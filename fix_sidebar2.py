import re
with open('index.html', 'r') as f:
    content = f.read()

sidebar_start = content.find('<!-- Sidebar -->')
if sidebar_start != -1:
    sidebar_end = content.find('<!-- Mobile Header -->')
    if sidebar_end != -1:
        sidebar_html = content[sidebar_start:sidebar_end]
        
        # fix invalid tailwind
        sidebar_html = sidebar_html.replace('hover:bg-white/80/10', 'hover:text-[#D4AF37]')
        sidebar_html = sidebar_html.replace('bg-white/80/5', 'text-[#D4AF37]')
        sidebar_html = sidebar_html.replace('text-white/80', 'text-[#FCFAF8]/70')
        sidebar_html = sidebar_html.replace('px-4 py-3', 'px-2 py-3')
        sidebar_html = sidebar_html.replace('gap-3', 'gap-4')
        sidebar_html = sidebar_html.replace('w-4 opacity-70', 'w-4 opacity-100')
        
        content = content[:sidebar_start] + sidebar_html + content[sidebar_end:]
        with open('index.html', 'w') as f:
            f.write(content)
        print("Sidebar updated 2")
