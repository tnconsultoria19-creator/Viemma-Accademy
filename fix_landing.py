with open('index.html', 'r') as f:
    html = f.read()

# 1. Fix the nav links by removing the <div> with the 4 links
start_nav = html.find('<div class="hidden md:flex items-center gap-8 font-medium text-sm text-[#1A3326]/80 tracking-wide">')
end_nav = html.find('</div>', start_nav) + 6
if start_nav != -1:
    html = html[:start_nav] + html[end_nav:]

# 2. Fix the hero section background/tint
# Old: 
# <section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-[#1A3326] overflow-hidden">
#     <div class="absolute inset-0 opacity-40 mix-blend-overlay">
#         <img src="https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg" alt="Safari Guide" class="w-full h-full object-cover">
#     </div>
old_hero_start = html.find('<section class="relative w-full h-[70vh]')
old_hero_end = html.find('</div>', html.find('</div>', old_hero_start) + 1) + 6
new_hero = """<section class="relative w-full h-[70vh] min-h-[600px] flex items-center bg-black overflow-hidden">
                <div class="absolute inset-0 opacity-60">
                    <img src="https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg" alt="Safari Guide" class="w-full h-full object-cover">
                </div>"""
if old_hero_start != -1:
    html = html[:old_hero_start] + new_hero + html[old_hero_end:]

# 3. Add onclick to pathway cards
auth_onclick = "document.getElementById('landing-container').style.display='none'; document.getElementById('app-container').style.display='flex'; openLoginModal(); return false;"

html = html.replace('READ GUIDE &darr;', f'READ GUIDE &darr;')
html = html.replace('CIPC CHECKLIST &darr;', f'CIPC CHECKLIST &darr;')
html = html.replace('MARKETING TOOLS &darr;', f'MARKETING TOOLS &darr;')

# We can just replace all instances of `<a href="#" class="text-[#D4AF37] text-[10px]` with `<a href="#" onclick="..." class="text-[#D4AF37] text-[10px]`
html = html.replace('<a href="#" class="text-[#D4AF37] text-[10px]', f'<a href="#" onclick="{auth_onclick}" class="text-[#D4AF37] text-[10px]')

with open('index.html', 'w') as f:
    f.write(html)
