import re

with open('index.html', 'r') as f:
    html = f.read()

# 1. Wrap cv-upload-form
html = html.replace("document.getElementById('cv-upload-form').onsubmit = async (e) => {", "const cuForm = document.getElementById('cv-upload-form'); if(cuForm) { cuForm.onsubmit = async (e) => {")
html = html.replace("btn.disabled = false;\n            }\n        };", "btn.disabled = false;\n            }\n        }; }")

# 2. Add fetchMyCvs back if it doesn't exist
if 'async function fetchMyCvs' not in html:
    idx = html.find('// --- PAGE INITIALIZATION ---')
    if idx != -1:
        js = """
        // --- API Integration for CV Management ---
        async function fetchMyCvs() {
            try {
                const res = await apiFetch('/api/cvs');
                const data = await res.json();
                
                const cvList = document.getElementById('cv-list');
                if(!cvList) return;
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
                                <button onclick="generatePdfFromCv('${cv.id}')" class="flex-1 bg-[#FCFAF8] text-[#1A3326] py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#E8ECEA] transition-colors">Generate PDF</button>
                            </div>
                        </div>
                    `;
                });
            } catch(e) { console.error(e); }
        }
        
        function closeCvBuilderModal() {
            const m = document.getElementById('cv-builder-modal');
            if(m) {
                m.classList.remove('modal-active');
                m.classList.add('modal-inactive');
                setTimeout(() => m.style.display = 'none', 300);
            }
        }
        
        function openCvBuilderModal() {
            const m = document.getElementById('cv-builder-modal');
            if(m) {
                m.style.display = 'flex';
                setTimeout(() => {
                    m.classList.remove('modal-inactive');
                    m.classList.add('modal-active');
                }, 10);
            }
        }
        
        function addEducationRow() {
            const container = document.getElementById('cv-education-container');
            const id = Math.random().toString(36).substr(2, 9);
            const rhtml = `
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
            container.insertAdjacentHTML('beforeend', rhtml);
        }

        function addExperienceRow() {
            const container = document.getElementById('cv-experience-container');
            const id = Math.random().toString(36).substr(2, 9);
            const rhtml = `
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
            container.insertAdjacentHTML('beforeend', rhtml);
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
                    const data = await res.json();
                    showToast('CV saved successfully. PDF Generation triggered.', 'success');
                    closeCvBuilderModal();
                    fetchMyCvs();
                    generatePdfFromCv(data.cv.id);
                } else {
                    const data = await res.json();
                    showToast(data.error || 'Failed to save CV', 'error');
                }
            } catch(e) { console.error(e); }
        }

        // PDF Generation
        async function generatePdfFromCv(cvId) {
            const db = window.getMockDB();
            const cv = db.user_cvs.find(c => c.id === cvId);
            if (!cv) return;
            
            showToast('Generating PDF...', 'success');
            
            const pdfContainer = document.createElement('div');
            pdfContainer.innerHTML = `
                <div style="padding: 40px; font-family: 'Helvetica', sans-serif; color: #333;">
                    <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 5px; color: #1A3326;">${cv.full_name || 'My CV'}</h1>
                    <p style="font-size: 12px; margin-bottom: 20px; color: #666;">${cv.email || ''} | ${cv.phone || ''}</p>
                    
                    <h2 style="font-size: 16px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px;">Professional Summary</h2>
                    <p style="font-size: 12px; line-height: 1.5; margin-bottom: 20px;">${cv.summary || ''}</p>
                    
                    <h2 style="font-size: 16px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px;">Work Experience</h2>
                    ${db.cv_experience.filter(e => e.cv_id === cv.id).map(e => `
                        <div style="margin-bottom: 15px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <strong style="font-size: 14px;">${e.position} at ${e.employer}</strong>
                                <span style="font-size: 12px; color: #666;">${e.start_date} - ${e.end_date}</span>
                            </div>
                            <p style="font-size: 12px;">${e.responsibilities}</p>
                        </div>
                    `).join('')}
                    
                    <h2 style="font-size: 16px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px;">Education</h2>
                    ${db.cv_education.filter(e => e.cv_id === cv.id).map(e => `
                        <div style="margin-bottom: 15px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <strong style="font-size: 14px;">${e.qualification}</strong>
                                <span style="font-size: 12px; color: #666;">${e.start_date} - ${e.end_date}</span>
                            </div>
                            <p style="font-size: 12px;">${e.institution}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            
            document.body.appendChild(pdfContainer);
            
            try {
                await html2pdf().set({
                    margin: 10,
                    filename: `${cv.title.replace(/ /g, '_')}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                }).from(pdfContainer).save();
                showToast('PDF downloaded successfully.', 'success');
            } catch (err) {
                console.error(err);
                showToast('Error generating PDF.', 'error');
            }
            
            document.body.removeChild(pdfContainer);
        }
        """
        html = html[:idx] + js + '\n' + html[idx:]

with open('index.html', 'w') as f:
    f.write(html)
