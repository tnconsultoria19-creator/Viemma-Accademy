with open('index.html', 'r') as f:
    content = f.read()

import re

flow_start = content.find('<div class="px-6 md:px-12 lg:px-16 py-10">')
if flow_start != -1:
    flow_end = content.find('</section>', flow_start)
    if flow_end != -1:
        new_flow = """<div class="px-6 md:px-12 lg:px-16 py-16 bg-[#FCFAF8]">
                <div class="mb-12">
                    <p class="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Next Steps</p>
                    <h3 class="text-3xl font-serif text-[#1A3326]">Recommended For You</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Card 1 -->
                    <div onclick="switchTab('quiz')" class="group cursor-pointer bg-white border border-[#E8ECEA] hover:border-[#D4AF37]/50 p-8 transition-all duration-300">
                        <div class="w-12 h-12 bg-[#FCFAF8] flex items-center justify-center rounded-sm mb-6 border border-[#E8ECEA]">
                            <i class="fas fa-compass text-xl text-[#D4AF37]"></i>
                        </div>
                        <h4 class="font-serif text-xl text-[#1A3326] mb-2">Career Quiz</h4>
                        <p class="text-sm font-light text-[#1A3326]/60 leading-relaxed">Discover which tourism sector aligns perfectly with your personality and goals.</p>
                        <div class="mt-6 flex items-center gap-2 text-xs font-semibold text-[#D4AF37] group-hover:text-[#1A3326] transition-colors">
                            <span>START NOW</span>
                            <i class="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    
                    <!-- Card 2 -->
                    <div onclick="switchTab('simulations')" class="group cursor-pointer bg-white border border-[#E8ECEA] hover:border-[#D4AF37]/50 p-8 transition-all duration-300">
                        <div class="w-12 h-12 bg-[#FCFAF8] flex items-center justify-center rounded-sm mb-6 border border-[#E8ECEA]">
                            <i class="fas fa-laptop-code text-xl text-[#D4AF37]"></i>
                        </div>
                        <h4 class="font-serif text-xl text-[#1A3326] mb-2">Job Simulations</h4>
                        <p class="text-sm font-light text-[#1A3326]/60 leading-relaxed">Gain practical experience and earn XP by solving real-world hospitality scenarios.</p>
                        <div class="mt-6 flex items-center gap-2 text-xs font-semibold text-[#D4AF37] group-hover:text-[#1A3326] transition-colors">
                            <span>PRACTICE</span>
                            <i class="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    
                    <!-- Card 3 -->
                    <div onclick="switchTab('cv-hub')" class="group cursor-pointer bg-white border border-[#E8ECEA] hover:border-[#D4AF37]/50 p-8 transition-all duration-300">
                        <div class="w-12 h-12 bg-[#FCFAF8] flex items-center justify-center rounded-sm mb-6 border border-[#E8ECEA]">
                            <i class="fas fa-file-alt text-xl text-[#D4AF37]"></i>
                        </div>
                        <h4 class="font-serif text-xl text-[#1A3326] mb-2">CV Builder</h4>
                        <p class="text-sm font-light text-[#1A3326]/60 leading-relaxed">Create a professional tourism CV that stands out to top employers in the industry.</p>
                        <div class="mt-6 flex items-center gap-2 text-xs font-semibold text-[#D4AF37] group-hover:text-[#1A3326] transition-colors">
                            <span>BUILD PROFILE</span>
                            <i class="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    
                    <!-- Card 4 -->
                    <div onclick="switchTab('board'); fetchJobs();" class="group cursor-pointer bg-white border border-[#E8ECEA] hover:border-[#D4AF37]/50 p-8 transition-all duration-300">
                        <div class="w-12 h-12 bg-[#FCFAF8] flex items-center justify-center rounded-sm mb-6 border border-[#E8ECEA]">
                            <i class="fas fa-briefcase text-xl text-[#D4AF37]"></i>
                        </div>
                        <h4 class="font-serif text-xl text-[#1A3326] mb-2">Opportunities</h4>
                        <p class="text-sm font-light text-[#1A3326]/60 leading-relaxed">Browse exclusive learnerships, internships, and entry-level tourism jobs.</p>
                        <div class="mt-6 flex items-center gap-2 text-xs font-semibold text-[#D4AF37] group-hover:text-[#1A3326] transition-colors">
                            <span>BROWSE JOBS</span>
                            <i class="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                </div>
            </div>
            """
        content = content[:flow_start] + new_flow + content[flow_end:]
        with open('index.html', 'w') as f:
            f.write(content)
        print("Flow updated")
