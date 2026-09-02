const encoder = new TextEncoder();

async function hashPassword(password, salt) {
    const data = encoder.encode(password + salt);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function signJWT(payload, secret) {
    const header = { alg: 'HS256', typ: 'JWT' };
    const encHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const encPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(`${encHeader}.${encPayload}`));
    const encSig = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    return `${encHeader}.${encPayload}.${encSig}`;
}

async function verifyJWT(request, secret) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
    const token = authHeader.split(' ')[1];
    
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    try {
        const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
        const data = encoder.encode(`${parts[0]}.${parts[1]}`);
        const sigStr = atob(parts[2].replace(/-/g, '+').replace(/_/g, '/'));
        const sig = new Uint8Array(sigStr.length);
        for (let i = 0; i < sigStr.length; i++) sig[i] = sigStr.charCodeAt(i);
        const isValid = await crypto.subtle.verify('HMAC', key, sig, data);
        if (!isValid) return null;
        return JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    } catch(e) {
        return null;
    }
}

export default {
    async fetch(request, env, ctx) {
        // Handle CORS Preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            });
        }

        const url = new URL(request.url);
        const path = url.pathname;
        const method = request.method;
        const jwtSecret = env.JWT_SECRET || 'dev_secret_key';

        const jsonResponse = (data, status = 200) => new Response(JSON.stringify(data), {
            status,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });

        try {
            // REGISTER
            if (path === '/api/auth/register' && method === 'POST') {
                const { email, password, first_name, last_name, status } = await request.json();
                const existing = await env.DB.prepare("SELECT email FROM users WHERE email = ?").bind(email).first();
                if (existing) return jsonResponse({ error: 'Email already exists' }, 400);

                const userId = crypto.randomUUID();
                const password_hash = await hashPassword(password, email); // using email as salt for simplicity here

                await env.DB.batch([
                    env.DB.prepare(
                        "INSERT INTO users (id, email, password_hash, first_name, last_name, status) VALUES (?, ?, ?, ?, ?, ?)"
                    ).bind(userId, email, password_hash, first_name, last_name, status),
                    env.DB.prepare(
                        "INSERT INTO profiles (user_id) VALUES (?)"
                    ).bind(userId)
                ]);

                const token = await signJWT({ sub: userId, email, role: 'user' }, jwtSecret);
                return jsonResponse({ token, message: 'Registration successful' });
            }

            // LOGIN
            if (path === '/api/auth/login' && method === 'POST') {
                const { email, password } = await request.json();
                const user = await env.DB.prepare("SELECT id, password_hash, role FROM users WHERE email = ?").bind(email).first();
                if (!user) return jsonResponse({ error: 'Invalid credentials' }, 401);

                const hash = await hashPassword(password, email);
                if (hash !== user.password_hash) return jsonResponse({ error: 'Invalid credentials' }, 401);

                const token = await signJWT({ sub: user.id, email, role: user.role }, jwtSecret);
                return jsonResponse({ token, role: user.role, message: 'Login successful' });
            }

            // GET PROFILE
            if (path === '/api/user/profile' && method === 'GET') {
                const payload = await verifyJWT(request, jwtSecret);
                if (!payload) return jsonResponse({ error: 'Unauthorized' }, 401);

                const userData = await env.DB.prepare(`
                    SELECT u.id, u.email, u.first_name, u.last_name, u.role, p.xp, p.level, p.badges, p.cv_url, p.cv_uploaded_at, p.quiz_traits
                    FROM users u JOIN profiles p ON u.id = p.user_id WHERE u.id = ?
                `).bind(payload.sub).first();

                if (!userData) return jsonResponse({ error: 'User not found' }, 404);
                
                userData.badges = JSON.parse(userData.badges || '[]');
                userData.quiz_traits = JSON.parse(userData.quiz_traits || '{}');
                return jsonResponse({ profile: userData });
            }

            // UPDATE XP
            if (path === '/api/user/update-xp' && method === 'POST') {
                const payload = await verifyJWT(request, jwtSecret);
                if (!payload) return jsonResponse({ error: 'Unauthorized' }, 401);

                const { xp_earned, new_badge } = await request.json();
                
                const profile = await env.DB.prepare("SELECT xp, badges FROM profiles WHERE user_id = ?").bind(payload.sub).first();
                if(!profile) return jsonResponse({error: 'Profile not found'}, 404);

                const newXp = profile.xp + xp_earned;
                const newLevel = Math.floor(newXp / 500) + 1;
                
                let badges = JSON.parse(profile.badges || '[]');
                if (new_badge && !badges.includes(new_badge)) badges.push(new_badge);

                await env.DB.prepare("UPDATE profiles SET xp = ?, level = ?, badges = ? WHERE user_id = ?")
                    .bind(newXp, newLevel, JSON.stringify(badges), payload.sub).run();

                return jsonResponse({ xp: newXp, level: newLevel, badges });
            }

            // UPLOAD CV
            if (path === '/api/cv/upload' && method === 'POST') {
                const payload = await verifyJWT(request, jwtSecret);
                if (!payload) return jsonResponse({ error: 'Unauthorized' }, 401);

                const formData = await request.formData();
                const file = formData.get('cv');
                if (!file || !(file instanceof File)) return jsonResponse({ error: 'No file' }, 400);

                const filename = `${payload.sub}-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
                
                if (env.CV_BUCKET) {
                    await env.CV_BUCKET.put(filename, file.stream(), { httpMetadata: { contentType: file.type } });
                }

                const cvUrl = `/cdn-cgi/image/width=500/cvs/${filename}`;

                await env.DB.prepare("UPDATE profiles SET cv_url = ?, cv_uploaded_at = CURRENT_TIMESTAMP WHERE user_id = ?")
                    .bind(cvUrl, payload.sub).run();

                return jsonResponse({ message: 'CV Uploaded Successfully', cv_url: cvUrl });
            }

            // GET JOBS
            if (path === '/api/jobs' && method === 'GET') {
                const type = url.searchParams.get('type');
                const location = url.searchParams.get('location');
                
                let query = "SELECT * FROM jobs WHERE status = 'active'";
                const params = [];

                if (type && type !== 'All Types') {
                    query += " AND type = ?";
                    params.push(type);
                }
                if (location && location !== 'All Locations') {
                    query += " AND location = ?";
                    params.push(location);
                }
                
                query += " ORDER BY created_at DESC";
                const { results } = await env.DB.prepare(query).bind(...params).all();
                return jsonResponse({ jobs: results });
            }

            // APPLY FOR JOB
            if (path === '/api/jobs/apply' && method === 'POST') {
                const payload = await verifyJWT(request, jwtSecret);
                if (!payload) return jsonResponse({ error: 'Unauthorized' }, 401);

                const { job_id } = await request.json();

                const profile = await env.DB.prepare("SELECT cv_url FROM profiles WHERE user_id = ?").bind(payload.sub).first();
                if(!profile || !profile.cv_url) return jsonResponse({error: "CV required"}, 400);

                const existingApp = await env.DB.prepare("SELECT id FROM applications WHERE user_id = ? AND job_id = ?").bind(payload.sub, job_id).first();
                if (existingApp) return jsonResponse({ error: 'Already applied' }, 400);

                await env.DB.prepare("INSERT INTO applications (id, user_id, job_id, cv_url_snapshot) VALUES (?, ?, ?, ?)")
                    .bind(crypto.randomUUID(), payload.sub, job_id, profile.cv_url).run();

                return jsonResponse({ message: 'Application submitted successfully' });
            }

            // ADMIN ENDPOINTS
            
            // ADMIN: POST JOB
            if (path === '/api/admin/jobs' && method === 'POST') {
                const payload = await verifyJWT(request, jwtSecret);
                if (!payload || payload.role !== 'admin') return jsonResponse({ error: 'Forbidden' }, 403);
                
                const { title, company, location, type, salary, qualifications } = await request.json();
                const jobId = crypto.randomUUID();
                
                await env.DB.prepare("INSERT INTO jobs (id, title, company, location, type, salary, qualifications) VALUES (?, ?, ?, ?, ?, ?, ?)")
                    .bind(jobId, title, company, location, type, salary, qualifications).run();
                    
                return jsonResponse({ message: 'Job posted successfully', job: { id: jobId, title, company } });
            }
            
            // ADMIN: DELETE JOB
            if (path.startsWith('/api/admin/jobs/') && method === 'DELETE') {
                const payload = await verifyJWT(request, jwtSecret);
                if (!payload || payload.role !== 'admin') return jsonResponse({ error: 'Forbidden' }, 403);
                
                const jobId = path.split('/').pop();
                await env.DB.prepare("DELETE FROM jobs WHERE id = ?").bind(jobId).run();
                return jsonResponse({ message: 'Job deleted successfully' });
            }

            // ADMIN: GET APPLICATIONS
            if (path === '/api/admin/applications' && method === 'GET') {
                const payload = await verifyJWT(request, jwtSecret);
                if (!payload || payload.role !== 'admin') return jsonResponse({ error: 'Forbidden' }, 403);
                
                const { results } = await env.DB.prepare(`
                    SELECT a.id, a.applied_at, a.status, a.cv_url_snapshot, 
                           u.first_name, u.last_name, u.email,
                           j.title as job_title, j.company as job_company
                    FROM applications a
                    JOIN users u ON a.user_id = u.id
                    JOIN jobs j ON a.job_id = j.id
                    ORDER BY a.applied_at DESC
                `).all();
                return jsonResponse({ applications: results });
            }

            // ADMIN: UPDATE APPLICATION STATUS
            if (path === '/api/admin/applications/status' && method === 'POST') {
                const payload = await verifyJWT(request, jwtSecret);
                if (!payload || payload.role !== 'admin') return jsonResponse({ error: 'Forbidden' }, 403);
                
                const { application_id, status } = await request.json();
                await env.DB.prepare("UPDATE applications SET status = ? WHERE id = ?").bind(status, application_id).run();
                return jsonResponse({ message: 'Status updated successfully' });
            }

            return jsonResponse({ error: 'Not Found' }, 404);
        } catch (err) {
            console.error(err);
            return jsonResponse({ error: err.message }, 500);
        }
    }
};
