import re

with open('index.html', 'r') as f:
    html = f.read()

# Update DEFAULT_MOCK_DB
old_db = """        const DEFAULT_MOCK_DB = {
            users: ["""
new_db = """        const DEFAULT_MOCK_DB = {
            user_cvs: [],
            cv_education: [],
            cv_experience: [],
            cv_skills: [],
            user_cv_files: [],
            user_cover_letters: [],
            user_certificates: [],
            users: ["""
html = html.replace(old_db, new_db)

with open('index.html', 'w') as f:
    f.write(html)
print("Updated MOCK DB")
