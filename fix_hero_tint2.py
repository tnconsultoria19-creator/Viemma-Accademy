with open('index.html', 'r') as f:
    html = f.read()

bad_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-[#1A3326] overflow-hidden">
                <div class="absolute inset-0 opacity-40 mix-blend-overlay">"""
good_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-black/40 overflow-hidden">
                <div class="absolute inset-0">"""

html = html.replace(bad_hero, good_hero)

# Add text shadow to make text readable
html = html.replace('<h2 class="font-serif text-5xl md:text-7xl font-bold text-[#FCFAF8] leading-tight mb-6">', '<h2 class="font-serif text-5xl md:text-7xl font-bold text-[#FCFAF8] leading-tight mb-6 drop-shadow-lg">')
html = html.replace('<p class="text-lg md:text-xl text-[#E8ECEA] font-light mb-10 leading-relaxed">', '<p class="text-lg md:text-xl text-[#E8ECEA] font-medium mb-10 leading-relaxed drop-shadow-md">')


with open('index.html', 'w') as f:
    f.write(html)
