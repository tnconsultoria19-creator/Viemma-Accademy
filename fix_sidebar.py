import re
with open('index.html', 'r') as f:
    content = f.read()

sidebar_start = content.find('<!-- Sidebar -->')
if sidebar_start != -1:
    sidebar_end = content.find('<!-- Mobile Header -->')
    if sidebar_end != -1:
        sidebar_html = content[sidebar_start:sidebar_end]
        
        # Make the sidebar more elegant
        sidebar_html = sidebar_html.replace('bg-[#1A3326]', 'bg-[#1A3326]')
        sidebar_html = sidebar_html.replace('w-64 lg:w-72', 'w-64')
        sidebar_html = sidebar_html.replace('p-6 lg:p-8', 'p-8')
        sidebar_html = sidebar_html.replace('gap-4', 'gap-3')
        sidebar_html = sidebar_html.replace('w-5', 'w-4 opacity-70')
        sidebar_html = sidebar_html.replace('text-sm font-medium', 'text-xs font-medium tracking-wide')
        sidebar_html = sidebar_html.replace('bg-white/5', 'bg-transparent text-[#D4AF37]')
        sidebar_html = sidebar_html.replace('hover:bg-white/10', 'hover:text-[#D4AF37] transition-colors')
        sidebar_html = sidebar_html.replace('rounded-lg', 'rounded-none')
        
        content = content[:sidebar_start] + sidebar_html + content[sidebar_end:]
        with open('index.html', 'w') as f:
            f.write(content)
        print("Sidebar updated")
