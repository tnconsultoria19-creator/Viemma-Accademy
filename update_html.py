import re

with open('index.html', 'r') as f:
    content = f.read()

# Replace body class to not be flex by default, we will handle that in the containers
content = re.sub(r'<body class=".*?">', '<body class="font-sans text-[#1A3326] bg-[#FCFAF8] overflow-x-hidden">', content)

# Wrap the current app (which starts with toast-container and ends just before scripts)
# Wait, let's just insert the landing page right after <body>, and then wrap the rest in #app-container.
# Actually, the sidebar, mobile header, and main content are direct children of body.
# Let's find `<div id="toast-container"` and wrap from there to just before `<script type="module">`

start_idx = content.find('<div id="toast-container"')
script_idx = content.find('<script type="module">')

if start_idx != -1 and script_idx != -1:
    before = content[:start_idx]
    app_html = content[start_idx:script_idx]
    after = content[script_idx:]
    
    # We will inject the landing container here
    landing_html = """
    <div id="landing-container" class="w-full min-h-screen bg-[#FCFAF8] flex flex-col">
        <!-- Navbar -->
        <nav class="w-full py-6 px-8 lg:px-16 flex justify-between items-center border-b border-[#E8ECEA]/50 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div class="flex items-center gap-3">
                <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc366uzOWFLPWyEuBIMhicbjT2GajlyGrsVyeSDE68ap9hBFEamMNA78eyvIPmA-MVNbGhtCBwzKlk29IttM_jygwrCJXjmUdZt6iijoXLFzRyBcrcb_C-oH3KxcsenhczLCRl7RfOtKSy_7o02kbNgJ29iMA?key=KPDE2Lo8HhnJ3v--HqdAAw" alt="Viemma Youth Logo" class="h-10 object-contain">
                <h1 class="font-serif font-bold text-2xl tracking-wide text-[#1A3326]">Viemma Youth</h1>
            </div>
            <div class="hidden md:flex items-center gap-8 font-medium text-sm text-[#1A3326]/80 tracking-wide">
                <a href="#" class="hover:text-[#D4AF37] transition-colors">Explore Careers</a>
                <a href="#" class="hover:text-[#D4AF37] transition-colors">Learning</a>
                <a href="#" class="hover:text-[#D4AF37] transition-colors">Jobs</a>
                <a href="#" class="hover:text-[#D4AF37] transition-colors">Partners</a>
            </div>
            <div class="flex items-center gap-4">
                <button onclick="document.getElementById('landing-container').style.display='none'; document.getElementById('app-container').style.display='flex'; openLoginModal();" class="text-sm font-medium text-[#1A3326] hover:text-[#D4AF37] transition-colors">Sign In</button>
                <button onclick="document.getElementById('landing-container').style.display='none'; document.getElementById('app-container').style.display='flex'; openLoginModal();" class="bg-[#1A3326] text-[#FCFAF8] px-6 py-2.5 text-sm font-medium hover:bg-[#D4AF37] transition-colors border border-[#1A3326] hover:border-[#D4AF37]">Register</button>
            </div>
        </nav>

        <!-- Hero Section -->
        <main class="flex-1">
            <section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-[#1A3326] overflow-hidden">
                <div class="absolute inset-0 opacity-40 mix-blend-overlay">
                    <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80" alt="Safari Guide" class="w-full h-full object-cover">
                </div>
                <div class="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full">
                    <div class="max-w-2xl">
                        <h2 class="font-serif text-5xl md:text-7xl font-bold text-[#FCFAF8] leading-tight mb-6">
                            Shape the Future <br> <span class="text-[#D4AF37] italic font-light">of African Tourism</span>
                        </h2>
                        <p class="text-lg md:text-xl text-[#E8ECEA] font-light mb-10 leading-relaxed">
                            A premium learning management and career development platform for the next generation of hospitality and tourism professionals.
                        </p>
                        <div class="flex gap-4">
                            <button onclick="document.getElementById('landing-container').style.display='none'; document.getElementById('app-container').style.display='flex'; openLoginModal();" class="bg-[#D4AF37] text-[#1A3326] px-8 py-4 text-sm font-semibold tracking-wider hover:bg-white transition-colors">START YOUR JOURNEY</button>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Careers -->
            <section class="py-24 bg-[#FCFAF8]">
                <div class="max-w-7xl mx-auto px-8 lg:px-16">
                    <div class="text-center max-w-3xl mx-auto mb-16">
                        <p class="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-4">Discover Pathways</p>
                        <h2 class="font-serif text-4xl text-[#1A3326] font-bold">Curated Career Paths</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Card 1 -->
                        <div class="group cursor-pointer">
                            <div class="relative h-96 overflow-hidden mb-6">
                                <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80" alt="Hospitality" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            </div>
                            <h3 class="font-serif text-2xl text-[#1A3326] mb-2">Hospitality & Management</h3>
                            <p class="text-[#1A3326]/60 font-light text-sm">Front office, food & beverage, and hotel operations.</p>
                        </div>
                        <!-- Card 2 -->
                        <div class="group cursor-pointer">
                            <div class="relative h-96 overflow-hidden mb-6">
                                <img src="https://images.unsplash.com/photo-1547471080-7fc2caa7df63?auto=format&fit=crop&q=80" alt="Safari Guide" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            </div>
                            <h3 class="font-serif text-2xl text-[#1A3326] mb-2">Guiding & Conservation</h3>
                            <p class="text-[#1A3326]/60 font-light text-sm">Safari guiding, nature conservation, and outdoor leadership.</p>
                        </div>
                        <!-- Card 3 -->
                        <div class="group cursor-pointer">
                            <div class="relative h-96 overflow-hidden mb-6">
                                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80" alt="Aviation" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            </div>
                            <h3 class="font-serif text-2xl text-[#1A3326] mb-2">Travel & Aviation</h3>
                            <p class="text-[#1A3326]/60 font-light text-sm">Travel coordination, ticketing, and aviation services.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <!-- Footer -->
        <footer class="bg-[#1A3326] text-[#E8ECEA] py-16 border-t border-white/10">
            <div class="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="flex items-center gap-3">
                    <img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc366uzOWFLPWyEuBIMhicbjT2GajlyGrsVyeSDE68ap9hBFEamMNA78eyvIPmA-MVNbGhtCBwzKlk29IttM_jygwrCJXjmUdZt6iijoXLFzRyBcrcb_C-oH3KxcsenhczLCRl7RfOtKSy_7o02kbNgJ29iMA?key=KPDE2Lo8HhnJ3v--HqdAAw" alt="Viemma Youth Logo" class="h-8 object-contain opacity-50">
                    <h2 class="font-serif text-xl opacity-50">Viemma Youth</h2>
                </div>
                <div class="text-sm font-light opacity-50">
                    &copy; 2026 Viemma Youth. All rights reserved.
                </div>
            </div>
        </footer>
    </div>
    
    <div id="app-container" class="flex-col md:flex-row h-screen w-full overflow-hidden" style="display: none;">
    """
    
    # Let's adjust colors in the app_html to match the new palette
    # bg-brand-dark -> bg-[#1A3326]
    # text-brand-dark -> text-[#1A3326]
    # border-brand-dark -> border-[#1A3326]
    # bg-brand-accent -> bg-[#D4AF37]
    # text-brand-accent -> text-[#D4AF37]
    # border-brand-accent -> border-[#D4AF37]
    # text-brand-youth -> text-[#D4AF37]
    # bg-brand-youth -> bg-[#D4AF37]
    # bg-brand-light -> bg-[#FCFAF8]
    # bg-brand-soft -> bg-[#E8ECEA]
    
    color_map = {
        'bg-brand-dark': 'bg-[#1A3326]',
        'text-brand-dark': 'text-[#1A3326]',
        'border-brand-dark': 'border-[#1A3326]',
        'bg-brand-accent': 'bg-[#D4AF37]',
        'text-brand-accent': 'text-[#D4AF37]',
        'border-brand-accent': 'border-[#D4AF37]',
        'text-brand-youth': 'text-[#D4AF37]',
        'bg-brand-youth': 'bg-[#D4AF37]',
        'bg-brand-light': 'bg-[#FCFAF8]',
        'bg-brand-soft': 'bg-[#E8ECEA]',
        'text-brand-soft': 'text-[#E8ECEA]',
        'text-brand-light': 'text-[#FCFAF8]'
    }
    
    for old_color, new_color in color_map.items():
        app_html = app_html.replace(old_color, new_color)

    # Make dashboard more editorial
    app_html = app_html.replace('Welcome, Guest!', 'Continue Your Journey')
    app_html = app_html.replace('Welcome Back, Admin!', 'Admin Console')
    
    # We will close the app-container just before script
    new_content = before + landing_html + app_html + "\n</div>\n" + after
    
    with open('index.html', 'w') as f:
        f.write(new_content)
    print("HTML updated")
