import re

with open('index.html', 'r') as f:
    html = f.read()

# Update hero image
html = html.replace('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80', 'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg')

# Update hero wording
hero_title_old = '''<h2 class="font-serif text-5xl md:text-7xl font-bold text-[#FCFAF8] leading-tight mb-6">
                            Shape the Future <br> <span class="text-[#D4AF37] italic font-light">of African Tourism</span>
                        </h2>'''
hero_title_new = '''<h2 class="font-serif text-5xl md:text-7xl font-bold text-[#FCFAF8] leading-tight mb-6">
                            The Tourism Academy
                        </h2>'''
html = html.replace(hero_title_old, hero_title_new)

hero_p_old = '''<p class="text-lg md:text-xl text-[#E8ECEA] font-light mb-10 leading-relaxed">
                            A premium learning management and career development platform for the next generation of hospitality and tourism professionals.
                        </p>'''
hero_p_new = '''<p class="text-lg md:text-xl text-[#E8ECEA] font-light mb-10 leading-relaxed">
                            Your passion for Africa can be your profession. Viemma Tours provides actionable, practical pathways for young adults looking to break into the tourism industry as guides, operators, and entrepreneurs.
                        </p>'''
html = html.replace(hero_p_old, hero_p_new)


# Update the cards section
cards_old = '''<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    </div>'''

cards_new = '''<div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                        <!-- Card 1 -->
                        <div class="bg-white shadow-soft hover:shadow-elegant transition-shadow duration-300 p-8 pt-10 border-t-4 border-[#1A3326] flex flex-col h-full">
                            <div class="w-12 h-12 bg-[#1A3326] text-[#D4AF37] rounded-full flex items-center justify-center text-xl mb-6">
                                <i class="fas fa-id-badge"></i>
                            </div>
                            <h3 class="font-serif text-2xl italic text-[#1A3326] mb-4">Become a Guide</h3>
                            <p class="text-[#1A3326]/70 text-sm leading-relaxed mb-8 flex-1">
                                Learn the legal requirements to become a registered Tour Guide in South Africa. From securing your First Aid Level 1 certificate to passing the CATHSSETA cultural examinations.
                            </p>
                            <a href="#" class="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:text-[#1A3326] transition-colors mt-auto block">
                                READ GUIDE &darr;
                            </a>
                        </div>
                        
                        <!-- Card 2 -->
                        <div class="bg-white shadow-soft hover:shadow-elegant transition-shadow duration-300 p-8 pt-10 border-t-4 border-[#D4AF37] flex flex-col h-full">
                            <div class="w-12 h-12 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-xl mb-6">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <h3 class="font-serif text-2xl italic text-[#1A3326] mb-4">Start a Business</h3>
                            <p class="text-[#1A3326]/70 text-sm leading-relaxed mb-8 flex-1">
                                A step-by-step breakdown of registering your own tour operation company via the CIPC, understanding public liability insurance, and acquiring your PDP driving licenses.
                            </p>
                            <a href="#" class="text-[#1A3326] hover:text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest transition-colors mt-auto block">
                                CIPC CHECKLIST &darr;
                            </a>
                        </div>
                        
                        <!-- Card 3 -->
                        <div class="bg-white shadow-soft hover:shadow-elegant transition-shadow duration-300 p-8 pt-10 border-t-4 border-[#1A3326] flex flex-col h-full">
                            <div class="w-12 h-12 bg-[#1A3326] text-[#D4AF37] rounded-full flex items-center justify-center text-xl mb-6">
                                <i class="fas fa-laptop"></i>
                            </div>
                            <h3 class="font-serif text-2xl italic text-[#1A3326] mb-4">Digital Presence</h3>
                            <p class="text-[#1A3326]/70 text-sm leading-relaxed mb-8 flex-1">
                                Learn how to build a professional website on a budget, claim your Google Business Profile, and market your tours to international clients using social media strategies.
                            </p>
                            <a href="#" class="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:text-[#1A3326] transition-colors mt-auto block">
                                MARKETING TOOLS &darr;
                            </a>
                        </div>
                    </div>'''

html = html.replace(cards_old, cards_new)

with open('index.html', 'w') as f:
    f.write(html)
