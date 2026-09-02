with open('index.html', 'r') as f:
    html = f.read()

js_code = """
        // --- CV Management System ---
        function switchCvTab(tabId) {
            document.querySelectorAll('.cv-view').forEach(el => el.classList.add('hidden'));
            document.getElementById('view-' + tabId).classList.remove('hidden');
            
            ['my-cvs', 'cover-letters', 'certificates', 'applications'].forEach(id => {
                const btn = document.getElementById('tab-' + id);
                if (id === tabId) {
                    btn.className = 'pb-2 text-sm font-bold uppercase tracking-widest text-[#1A3326] border-b-2 border-[#1A3326]';
                } else {
                    btn.className = 'pb-2 text-sm font-bold uppercase tracking-widest text-[#1A3326]/40 border-b-2 border-transparent hover:text-[#1A3326]';
                }
            });
        }
        
        function openCvBuilderModal() {
            showToast('Opening CV Builder (Template Selection)...');
        }
        function openUploadCvModal() {
            showToast('Opening CV Upload Modal...');
        }
        function openCoverLetterModal() {
            showToast('Opening Cover Letter Editor...');
        }
        function openCertificateModal() {
            showToast('Opening Certificate Upload...');
        }
"""
html = html.replace('// === START MOCK BACKEND LOGIC ===', js_code + '\n        // === START MOCK BACKEND LOGIC ===')

with open('index.html', 'w') as f:
    f.write(html)
print("Injected JS")
