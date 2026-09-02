with open('index.html', 'r') as f:
    html = f.read()

bad_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-black overflow-hidden">
                <div class="absolute inset-0 opacity-60">"""
good_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-[#1A3326] overflow-hidden">
                <div class="absolute inset-0 opacity-40 mix-blend-overlay">"""

html = html.replace(bad_hero, good_hero)

with open('index.html', 'w') as f:
    f.write(html)
