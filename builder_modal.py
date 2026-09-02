with open('index.html', 'r') as f:
    html = f.read()

modal_html = """
    <!-- CV Builder Modal -->
    <div id="cv-builder-modal" class="fixed inset-0 z-[200] modal-inactive flex items-center justify-center bg-[#1A3326]/90 backdrop-blur-md p-4">
        <div class="bg-[#FCFAF8] w-full max-w-4xl rounded-sm shadow-2xl relative flex flex-col overflow-hidden max-h-[95vh]">
            <div class="p-6 border-b border-[#E8ECEA] flex justify-between items-center bg-white">
                <div>
                    <h2 class="font-serif font-bold text-2xl text-[#1A3326]">CV Builder</h2>
                    <p class="text-[10px] text-[#1A3326]/50 font-bold uppercase tracking-widest mt-1">Create a professional resume</p>
                </div>
                <button onclick="closeCvBuilderModal()" class="text-[#1A3326]/40 hover:text-[#1A3326] w-8 h-8 rounded-sm transition-colors"><i class="fas fa-times text-xl"></i></button>
            </div>
            
            <div class="p-6 overflow-y-auto flex-1 hide-scrollbar">
                <form id="cv-builder-form" class="space-y-8">
                    <!-- Title -->
                    <div>
                        <h3 class="text-sm font-bold uppercase tracking-widest text-[#1A3326] border-b border-[#D4AF37] pb-2 mb-4">Document Details</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-[#1A3326]/50 mb-1">CV Title (e.g. General, Tourism)</label>
                                <input type="text" id="cv-title" required class="w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]">
                            </div>
                            <div class="flex items-end pb-2">
                                <label class="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" id="cv-is-default" class="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37] border-[#E8ECEA] rounded-sm">
                                    <span class="text-sm text-[#1A3326]">Set as Default CV</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Personal Information -->
                    <div>
                        <h3 class="text-sm font-bold uppercase tracking-widest text-[#1A3326] border-b border-[#D4AF37] pb-2 mb-4">Personal Information</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-[#1A3326]/50 mb-1">Full Name</label>
                                <input type="text" id="cv-fullname" required class="w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-[#1A3326]/50 mb-1">Email</label>
                                <input type="email" id="cv-email" required class="w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-[#1A3326]/50 mb-1">Phone</label>
                                <input type="text" id="cv-phone" class="w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-[#1A3326]/50 mb-1">Physical Address</label>
                                <input type="text" id="cv-address" class="w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-[#1A3326]/50 mb-1">LinkedIn Profile</label>
                                <input type="text" id="cv-linkedin" class="w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-[#1A3326]/50 mb-1">Portfolio/Website</label>
                                <input type="text" id="cv-website" class="w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]">
                            </div>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-widest text-[#1A3326]/50 mb-1">Professional Summary</label>
                            <textarea id="cv-summary" rows="4" class="w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]"></textarea>
                        </div>
                    </div>

                    <!-- Education -->
                    <div>
                        <div class="flex justify-between items-center border-b border-[#D4AF37] pb-2 mb-4">
                            <h3 class="text-sm font-bold uppercase tracking-widest text-[#1A3326]">Education</h3>
                            <button type="button" onclick="addEducationRow()" class="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] hover:text-[#1A3326] transition-colors"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        <div id="cv-education-container" class="space-y-4">
                            <!-- Dynamic rows -->
                        </div>
                    </div>

                    <!-- Work Experience -->
                    <div>
                        <div class="flex justify-between items-center border-b border-[#D4AF37] pb-2 mb-4">
                            <h3 class="text-sm font-bold uppercase tracking-widest text-[#1A3326]">Work Experience</h3>
                            <button type="button" onclick="addExperienceRow()" class="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] hover:text-[#1A3326] transition-colors"><i class="fas fa-plus"></i> Add</button>
                        </div>
                        <div id="cv-experience-container" class="space-y-4">
                            <!-- Dynamic rows -->
                        </div>
                    </div>
                </form>
            </div>
            
            <div class="p-4 border-t border-[#E8ECEA] bg-white flex justify-end gap-4">
                <button onclick="closeCvBuilderModal()" class="px-6 py-2 rounded-sm border border-[#E8ECEA] text-[#1A3326] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FCFAF8] transition-colors">Cancel</button>
                <button onclick="saveOnlineCv()" class="px-6 py-2 rounded-sm bg-[#1A3326] text-[#FCFAF8] text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1A3326] transition-colors">Save CV & Generate PDF</button>
            </div>
        </div>
    </div>
"""

idx = html.find('</body>')
if idx != -1:
    html = html[:idx] + modal_html + '\n' + html[idx:]
    with open('index.html', 'w') as f:
        f.write(html)
    print("Injected Modal")
else:
    print("Could not find insertion point")
