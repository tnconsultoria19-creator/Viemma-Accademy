with open('index.html', 'r') as f:
    html = f.read()

# Make the generate PDF function for html2pdf
js_code = """
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
html = html.replace('// --- API Integration for CV Management ---', js_code + '\n        // --- API Integration for CV Management ---')

# Trigger generatePdfFromCv
html = html.replace('fetchMyCvs();', 'fetchMyCvs(); generatePdfFromCv(body.title ? res.cv?.id : null);')

with open('index.html', 'w') as f:
    f.write(html)
