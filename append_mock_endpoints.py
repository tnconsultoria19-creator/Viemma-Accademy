import re

with open('index.html', 'r') as f:
    html = f.read()

mock_endpoints = """
                // --- CV Management Endpoints ---
                if (path === '/api/cvs' && method === 'GET') {
                    const db = window.getMockDB();
                    const cvs = db.user_cvs.filter(c => c.user_id === userId);
                    const uploaded = db.user_cv_files.filter(c => c.user_id === userId);
                    return createResponse({ cvs, uploaded });
                }
                if (path === '/api/cvs' && method === 'POST') {
                    const db = window.getMockDB();
                    const body = JSON.parse(options.body);
                    const newId = 'cv_' + Date.now();
                    
                    if (body.is_default) {
                        db.user_cvs.forEach(c => { if (c.user_id === userId) c.is_default = false; });
                        db.user_cv_files.forEach(c => { if (c.user_id === userId) c.is_default = false; });
                    }
                    
                    const newCv = {
                        id: newId,
                        user_id: userId,
                        title: body.title,
                        is_default: body.is_default || false,
                        profile_photo_url: body.profile_photo_url || null,
                        full_name: body.full_name,
                        email: body.email,
                        phone: body.phone,
                        physical_address: body.physical_address,
                        linkedin: body.linkedin,
                        website: body.website,
                        summary: body.summary,
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    };
                    db.user_cvs.push(newCv);
                    
                    body.education.forEach(e => {
                        db.cv_education.push({ id: 'edu_'+Math.random(), cv_id: newId, ...e });
                    });
                    body.experience.forEach(e => {
                        db.cv_experience.push({ id: 'exp_'+Math.random(), cv_id: newId, ...e });
                    });
                    
                    localStorage.setItem('VIEMMA_MOCK_DB', JSON.stringify(db));
                    return createResponse({ message: 'CV Created Successfully', cv: newCv });
                }
                
                if (path === '/api/cover-letters' && method === 'GET') {
                    const db = window.getMockDB();
                    return createResponse({ cover_letters: db.user_cover_letters.filter(c => c.user_id === userId) });
                }
                
                if (path === '/api/certificates' && method === 'GET') {
                    const db = window.getMockDB();
                    return createResponse({ certificates: db.user_certificates.filter(c => c.user_id === userId) });
                }
                
                if (path === '/api/user/applications' && method === 'GET') {
                    const db = window.getMockDB();
                    const apps = db.applications.filter(a => a.user_id === userId).map(a => {
                        const job = db.jobs.find(j => j.id === a.job_id) || {};
                        return { ...a, job_title: job.title, company: job.company };
                    });
                    return createResponse({ applications: apps });
                }
"""

html = html.replace('// GET: Fetch User Applications', mock_endpoints + '\n                // GET: Fetch User Applications')

with open('index.html', 'w') as f:
    f.write(html)
print("Injected Mock Endpoints")
