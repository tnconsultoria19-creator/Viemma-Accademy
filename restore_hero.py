with open('index.html', 'r') as f:
    html = f.read()

bad_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-black overflow-hidden">
                <div class="absolute inset-0 opacity-60">
                    <img src="https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg" alt="Safari Guide" class="w-full h-full object-cover">
                </div>
                    </div>
                </div>
            </section>"""

good_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-black overflow-hidden">
                <div class="absolute inset-0 opacity-60">
                    <img src="https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg" alt="Safari Guide" class="w-full h-full object-cover">
                </div>
                <div class="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full">
                    <div class="max-w-2xl">
                        <h2 class="font-serif text-5xl md:text-7xl font-bold text-[#FCFAF8] leading-tight mb-6">
                            The Tourism Academy
                        </h2>
                        <p class="text-lg md:text-xl text-[#E8ECEA] font-light mb-10 leading-relaxed">
                            Your passion for Africa can be your profession. Viemma Tours provides actionable, practical pathways for young adults looking to break into the tourism industry as guides, operators, and entrepreneurs.
                        </p>
                        <div class="flex gap-4">
                            <button onclick="document.getElementById('landing-container').style.display='none'; document.getElementById('app-container').style.display='flex'; openLoginModal();" class="bg-[#D4AF37] text-[#1A3326] px-8 py-4 text-sm font-semibold tracking-wider hover:bg-[#FCFAF8] transition-colors">START YOUR JOURNEY</button>
                        </div>
                    </div>
                </div>
            </section>"""

html = html.replace(bad_hero, good_hero)

with open('index.html', 'w') as f:
    f.write(html)
print("Restored hero section")
