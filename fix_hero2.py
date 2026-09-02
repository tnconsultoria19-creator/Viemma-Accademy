with open('index.html', 'r') as f:
    content = f.read()

import re

hero_start = content.find('<div class="bg-white/80 border-b border-[#E8ECEA] px-6 md:px-12 lg:px-16 py-8">')
if hero_start != -1:
    hero_end = content.find('<!-- Badges and Profile details -->', hero_start)
    if hero_end != -1:
        new_hero = """<div class="relative bg-[#1A3326] px-6 md:px-12 lg:px-16 py-16 overflow-hidden">
                <div class="absolute inset-0 opacity-20 mix-blend-overlay">
                    <img src="https://images.unsplash.com/photo-1547471080-7fc2caa7df63?auto=format&fit=crop&q=80" alt="Dashboard Banner" class="w-full h-full object-cover">
                </div>
                <div class="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div class="flex items-center gap-8">
                        <div class="relative shrink-0">
                            <div class="w-24 h-24 bg-white/10 rounded-sm overflow-hidden border border-[#D4AF37]/50 flex items-center justify-center relative backdrop-blur-md">
                                <img id="user-avatar-img" class="w-full h-full object-cover hidden" src="" alt="Profile Image">
                                <i class="fas fa-user text-4xl text-[#FCFAF8]/50" id="user-avatar-icon"></i>
                            </div>
                            <div id="user-level-badge" class="absolute -bottom-3 -right-3 bg-[#D4AF37] text-[#1A3326] text-[10px] font-bold px-3 py-1.5 rounded-sm border border-transparent shadow">LVL 0</div>
                        </div>
                        <div>
                            <h2 class="text-3xl md:text-4xl font-serif font-bold text-[#FCFAF8] mb-2" id="user-welcome-text">Continue Your Journey</h2>
                            <p class="text-[#E8ECEA] font-light max-w-md">You are progressing toward becoming a Tourism Professional. Complete your next lesson.</p>
                            <div class="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                                <p class="text-[#FCFAF8]/80 text-sm flex items-center gap-3">
                                    <span class="bg-[#FCFAF8]/10 text-[#FCFAF8] px-2 py-1 rounded-sm text-xs font-semibold tracking-widest border border-[#FCFAF8]/20">EXPLORER</span> 
                                    <span class="text-[#D4AF37] font-bold"><i class="fas fa-bolt"></i> <span id="user-xp-text">0</span> XP</span> 
                                    <span class="text-[#FCFAF8]/30">|</span> 
                                    <span><i class="fas fa-medal text-[#D4AF37]"></i> <span id="user-badges-text">0</span> Badges</span>
                                </p>
                                <button onclick="switchTab('profile'); fetchUserProfileForm();" id="header-manage-profile-btn" class="hidden text-xs font-medium text-[#1A3326] bg-[#D4AF37] hover:bg-white px-4 py-2 rounded-sm transition-colors tracking-wide">
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-md p-6 rounded-sm border border-white/10">
                        <div class="progress-ring" id="profile-progress-ring" style="background: conic-gradient(#D4AF37 0%, rgba(255,255,255,0.1) 0);">
                            <div class="progress-ring-inner bg-[#1A3326] text-[#FCFAF8]" id="profile-progress-text">0%</div>
                        </div>
                        <div class="text-center">
                            <p class="text-xs text-[#E8ECEA] font-light tracking-wide uppercase">Profile Status</p>
                            <p class="text-[10px] text-[#FCFAF8]/50" id="profile-progress-hint">Complete to stand out</p>
                        </div>
                    </div>
                </div>
            </div>
            
            """
        
        content = content[:hero_start] + new_hero + content[hero_end:]
        with open('index.html', 'w') as f:
            f.write(content)
        print("Hero updated")
