import re

with open('index.html', 'r') as f:
    html = f.read()

# We want to replace the entire <section id="cv-hub"> with the new UI.
# Let's find the start and end of <section id="cv-hub">.
start_idx = html.find('<section id="cv-hub"')
end_idx = html.find('</section>', start_idx) + 10

if start_idx != -1 and end_idx != -1:
    new_cv_hub = """<section id="cv-hub" class="dashboard-section min-h-full bg-white/80">
            <div class="py-12 px-6 md:px-12 lg:px-20 border-b border-[#E8ECEA] flex justify-between items-center">
                <div>
                    <h2 class="text-3xl md:text-4xl font-serif text-[#1A3326] italic mb-4">CV Management System</h2>
                    <p class="text-sm font-light text-[#1A3326]/60 leading-relaxed">Manage your career profiles, cover letters, and certificates.</p>
                </div>
            </div>
            
            <div class="px-6 md:px-12 lg:px-20 py-8">
                <!-- Tabs -->
                <div class="flex gap-6 mb-8 border-b border-[#E8ECEA]">
                    <button onclick="switchCvTab('my-cvs')" id="tab-my-cvs" class="pb-2 text-sm font-bold uppercase tracking-widest text-[#1A3326] border-b-2 border-[#1A3326]">My CVs</button>
                    <button onclick="switchCvTab('cover-letters')" id="tab-cover-letters" class="pb-2 text-sm font-bold uppercase tracking-widest text-[#1A3326]/40 border-b-2 border-transparent hover:text-[#1A3326]">Cover Letters</button>
                    <button onclick="switchCvTab('certificates')" id="tab-certificates" class="pb-2 text-sm font-bold uppercase tracking-widest text-[#1A3326]/40 border-b-2 border-transparent hover:text-[#1A3326]">Certificates</button>
                    <button onclick="switchCvTab('applications')" id="tab-applications" class="pb-2 text-sm font-bold uppercase tracking-widest text-[#1A3326]/40 border-b-2 border-transparent hover:text-[#1A3326]">App History</button>
                </div>

                <!-- My CVs View -->
                <div id="view-my-cvs" class="cv-view">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-[#1A3326]">Your Resumes</h3>
                        <div class="flex gap-4">
                            <button onclick="openUploadCvModal()" class="bg-white border border-[#E8ECEA] text-[#1A3326] px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#FCFAF8] transition-colors"><i class="fas fa-file-upload mr-1"></i> Upload Existing</button>
                            <button onclick="openCvBuilderModal()" class="bg-[#1A3326] text-[#FCFAF8] px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1A3326] transition-colors"><i class="fas fa-plus mr-1"></i> Create Online CV</button>
                        </div>
                    </div>
                    
                    <div id="cv-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- CV items will be rendered here -->
                        <div class="p-8 text-center text-[#1A3326]/50 col-span-full border border-dashed border-[#E8ECEA] rounded-sm bg-[#FCFAF8]">
                            <i class="fas fa-file-alt text-3xl mb-3 text-[#D4AF37]"></i>
                            <p class="text-sm">You haven't created or uploaded any CVs yet.</p>
                        </div>
                    </div>
                </div>

                <!-- Cover Letters View -->
                <div id="view-cover-letters" class="cv-view hidden">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-[#1A3326]">Cover Letters</h3>
                        <button onclick="openCoverLetterModal()" class="bg-[#1A3326] text-[#FCFAF8] px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1A3326] transition-colors"><i class="fas fa-plus mr-1"></i> New Cover Letter</button>
                    </div>
                    <div id="cover-letter-list" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <!-- CL items will be rendered here -->
                    </div>
                </div>
                
                <!-- Certificates View -->
                <div id="view-certificates" class="cv-view hidden">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-[#1A3326]">Certificates</h3>
                        <button onclick="openCertificateModal()" class="bg-[#1A3326] text-[#FCFAF8] px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1A3326] transition-colors"><i class="fas fa-upload mr-1"></i> Upload Certificate</button>
                    </div>
                    <div id="certificate-list" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <!-- Certificate items will be rendered here -->
                    </div>
                </div>

                <!-- App History View -->
                <div id="view-applications" class="cv-view hidden">
                    <h3 class="text-lg font-bold text-[#1A3326] mb-6">Application History</h3>
                    <div class="bg-white rounded-sm border border-[#E8ECEA] overflow-hidden">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="bg-transparent text-[10px] uppercase tracking-widest text-[#1A3326]/50 border-b border-[#E8ECEA]">
                                    <th class="p-4">Job Title</th>
                                    <th class="p-4">Company</th>
                                    <th class="p-4">Date Applied</th>
                                    <th class="p-4">Status</th>
                                    <th class="p-4">Snapshot</th>
                                </tr>
                            </thead>
                            <tbody id="app-history-list" class="text-sm divide-y divide-[#E8ECEA]">
                                <!-- App history items -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>"""
    html = html[:start_idx] + new_cv_hub + html[end_idx:]

    with open('index.html', 'w') as f:
        f.write(html)
    print("Injected new CV Hub UI")
else:
    print("Could not find cv-hub section")
