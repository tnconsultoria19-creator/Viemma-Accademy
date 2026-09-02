-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    status TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Profiles Table (Gamification & CV Snapshots)
CREATE TABLE IF NOT EXISTS profiles (
    user_id TEXT PRIMARY KEY,
    xp INTEGER DEFAULT 120,
    level INTEGER DEFAULT 1,
    badges TEXT DEFAULT '["Explorer"]',
    cv_url TEXT,
    cv_uploaded_at DATETIME,
    quiz_traits TEXT DEFAULT '{}',
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    salary TEXT,
    qualifications TEXT,
    status TEXT DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Applications Table
CREATE TABLE IF NOT EXISTS applications (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    job_id TEXT NOT NULL,
    applied_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'pending',
    cv_url_snapshot TEXT, cv_used_id TEXT, cv_used_type TEXT, cover_letter_used_id TEXT, cover_letter_snapshot_content TEXT, certificates_snapshot TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(job_id) REFERENCES jobs(id) ON DELETE CASCADE
);

-- Insert admin and initial jobs for testing
INSERT INTO users (id, email, password_hash, first_name, last_name, status, role) VALUES 
('admin1', 'admin@viemma.com', 'adminpass', 'Admin', 'User', 'Graduate', 'admin');

INSERT INTO jobs (id, title, company, location, type, salary, qualifications) VALUES 
('job1', 'Junior Safari Guide Intern', 'Kruger Private Reserve', 'Mpumalanga', 'Internship', 'R6,000 - R12,000', 'FGASA Level 1'),
('job2', 'Front Desk Receptionist', 'V&A Waterfront Hotel', 'Cape Town', 'Entry-Level Job', 'R8,000 - R15,000', 'Hospitality Diploma'),
('job3', 'Tourism Marketing Learnership', 'Viemma Tours HQ', 'Cape Town', 'Learnership', 'R4,000 Stipend', 'Matric with English'),
('job4', 'Events Assistant', 'Sandton Convention Centre', 'Johannesburg', 'Entry-Level Job', 'R10,000 - R14,000', 'Event Management Certificate');

-- CV Files (Uploaded CVs)
CREATE TABLE IF NOT EXISTS user_cv_files (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    version INTEGER DEFAULT 1,
    storage_url TEXT NOT NULL,
    is_default BOOLEAN DEFAULT false,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    active BOOLEAN DEFAULT true,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Online Built CVs
CREATE TABLE IF NOT EXISTS user_cvs (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    is_default BOOLEAN DEFAULT false,
    profile_photo_url TEXT,
    full_name TEXT,
    email TEXT,
    phone TEXT,
    physical_address TEXT,
    linkedin TEXT,
    website TEXT,
    summary TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cv_education (
    id TEXT PRIMARY KEY,
    cv_id TEXT NOT NULL,
    institution TEXT NOT NULL,
    qualification TEXT NOT NULL,
    start_date TEXT,
    end_date TEXT,
    grade TEXT,
    description TEXT,
    FOREIGN KEY(cv_id) REFERENCES user_cvs(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cv_experience (
    id TEXT PRIMARY KEY,
    cv_id TEXT NOT NULL,
    employer TEXT NOT NULL,
    position TEXT NOT NULL,
    start_date TEXT,
    end_date TEXT,
    current_position BOOLEAN DEFAULT false,
    responsibilities TEXT,
    achievements TEXT,
    FOREIGN KEY(cv_id) REFERENCES user_cvs(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cv_skills (
    id TEXT PRIMARY KEY,
    cv_id TEXT NOT NULL,
    category TEXT NOT NULL, -- 'Technical', 'Soft', 'Languages', 'Computer'
    skill_name TEXT NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES user_cvs(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cv_interests (
    id TEXT PRIMARY KEY,
    cv_id TEXT NOT NULL,
    interest_name TEXT NOT NULL,
    FOREIGN KEY(cv_id) REFERENCES user_cvs(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_cover_letters (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_certificates (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    file_url TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

