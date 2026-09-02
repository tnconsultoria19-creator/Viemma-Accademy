with open('index.html', 'r') as f:
    html = f.read()

bad_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-black/40 overflow-hidden">
                <div class="absolute inset-0">
                    <img src="https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg" alt="Safari Guide" class="w-full h-full object-cover">
                </div>"""
good_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center overflow-hidden">
                <div class="absolute inset-0">
                    <img src="https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg" alt="Safari Guide" class="w-full h-full object-cover">
                </div>
                <!-- Gradient overlay to ensure text is readable without tinting the whole image -->
                <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>"""

html = html.replace(bad_hero, good_hero)

with open('index.html', 'w') as f:
    f.write(html)
