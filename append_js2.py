with open('index.html', 'r') as f:
    html = f.read()

js_code = """
        // --- API Integration for CV Management ---
        async function fetchMyCvs() {
            try {
                const res = await apiFetch('/api/cvs');
                const data = await res.json();
                
                const cvList = document.getElementById('cv-list');
                cvList.innerHTML = '';
                
                if (data.cvs.length === 0 && data.uploaded.length === 0) {
                    cvList.innerHTML = `
                        <div class="p-8 text-center text-[#1A3326]/50 col-span-full border border-dashed border-[#E8ECEA] rounded-sm bg-[#FCFAF8]">
                            <i class="fas fa-file-alt text-3xl mb-3 text-[#D4AF37]"></i>
                            <p class="text-sm">You haven't created or uploaded any CVs yet.</p>
                        </div>
                    `;
                    return;
                }
                
                data.cvs.forEach(cv => {
                    cvList.innerHTML += `
                        <div class="border border-[#E8ECEA] bg-white p-6 rounded-sm hover:shadow-soft transition-all">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h4 class="font-bold text-[#1A3326]">${cv.title}</h4>
                                    <p class="text-xs text-[#1A3326]/50 mt-1">Online CV &bull; ${new Date(cv.updated_at).toLocaleDateString()}</p>
                                </div>
                                ${cv.is_default ? '<span class="bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded-sm text-[9px] font-bold uppercase tracking-wider">Default</span>' : ''}
                            </div>
                            <div class="flex gap-2 border-t border-[#E8ECEA] pt-4 mt-4">
                                <button class="flex-1 bg-[#FCFAF8] text-[#1A3326] py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8ECEA] transition-colors">Edit</button>
                                <button class="flex-1 bg-[#FCFAF8] text-[#1A3326] py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8ECEA] transition-colors">Preview</button>
                            </div>
                        </div>
                    `;
                });
            } catch(e) { console.error(e); }
        }
        
        function closeCvBuilderModal() {
            document.getElementById('cv-builder-modal').classList.remove('modal-active');
            document.getElementById('cv-builder-modal').classList.add('modal-inactive');
            setTimeout(() => document.getElementById('cv-builder-modal').style.display = 'none', 300);
        }
        
        function openCvBuilderModal() {
            document.getElementById('cv-builder-modal').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('cv-builder-modal').classList.remove('modal-inactive');
                document.getElementById('cv-builder-modal').classList.add('modal-active');
            }, 10);
        }
        
        function addEducationRow() {
            const container = document.getElementById('cv-education-container');
            const id = Math.random().toString(36).substr(2, 9);
            const html = `
                <div id="edu-${id}" class="border border-[#E8ECEA] p-4 rounded-sm bg-[#FCFAF8] relative">
                    <button type="button" onclick="document.getElementById('edu-${id}').remove()" class="absolute top-2 right-2 text-red-400 hover:text-red-600"><i class="fas fa-trash-alt"></i></button>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Institution" required class="w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] edu-inst">
                        <input type="text" placeholder="Qualification" required class="w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] edu-qual">
                        <input type="text" placeholder="Start Date (e.g. 2018)" class="w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] edu-start">
                        <input type="text" placeholder="End Date (e.g. 2021)" class="w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] edu-end">
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        }

        function addExperienceRow() {
            const container = document.getElementById('cv-experience-container');
            const id = Math.random().toString(36).substr(2, 9);
            const html = `
                <div id="exp-${id}" class="border border-[#E8ECEA] p-4 rounded-sm bg-[#FCFAF8] relative">
                    <button type="button" onclick="document.getElementById('exp-${id}').remove()" class="absolute top-2 right-2 text-red-400 hover:text-red-600"><i class="fas fa-trash-alt"></i></button>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Employer" required class="w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] exp-emp">
                        <input type="text" placeholder="Position" required class="w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] exp-pos">
                        <input type="text" placeholder="Start Date" class="w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] exp-start">
                        <input type="text" placeholder="End Date (or Current)" class="w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] exp-end">
                        <textarea placeholder="Responsibilities & Achievements" rows="2" class="col-span-1 md:col-span-2 w-full px-4 py-2 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37] exp-resp"></textarea>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        }

        async function saveOnlineCv() {
            showToast('Saving CV...', 'success');
            
            const education = [];
            document.querySelectorAll('#cv-education-container > div').forEach(el => {
                education.push({
                    institution: el.querySelector('.edu-inst').value,
                    qualification: el.querySelector('.edu-qual').value,
                    start_date: el.querySelector('.edu-start').value,
                    end_date: el.querySelector('.edu-end').value
                });
            });
            
            const experience = [];
            document.querySelectorAll('#cv-experience-container > div').forEach(el => {
                experience.push({
                    employer: el.querySelector('.exp-emp').value,
                    position: el.querySelector('.exp-pos').value,
                    start_date: el.querySelector('.exp-start').value,
                    end_date: el.querySelector('.exp-end').value,
                    responsibilities: el.querySelector('.exp-resp').value
                });
            });

            const body = {
                title: document.getElementById('cv-title').value || 'My Online CV',
                is_default: document.getElementById('cv-is-default').checked,
                full_name: document.getElementById('cv-fullname').value,
                email: document.getElementById('cv-email').value,
                phone: document.getElementById('cv-phone').value,
                physical_address: document.getElementById('cv-address').value,
                linkedin: document.getElementById('cv-linkedin').value,
                website: document.getElementById('cv-website').value,
                summary: document.getElementById('cv-summary').value,
                education,
                experience
            };
            
            try {
                const res = await apiFetch('/api/cvs', { method: 'POST', body: JSON.stringify(body) });
                if(res.ok) {
                    showToast('CV saved successfully. PDF Generation triggered.', 'success');
                    closeCvBuilderModal();
                    fetchMyCvs();
                } else {
                    const data = await res.json();
                    showToast(data.error || 'Failed to save CV', 'error');
                }
            } catch(e) { console.error(e); }
        }
"""
html = html.replace('// --- CV Management System ---', js_code + '\n        // --- CV Management System ---')

# Trigger fetchMyCvs when we open the CV tab
html = html.replace('switchTab(\'cv-hub\')"', 'switchTab(\'cv-hub\'); fetchMyCvs();"')

with open('index.html', 'w') as f:
    f.write(html)
print("Injected JS 2")
