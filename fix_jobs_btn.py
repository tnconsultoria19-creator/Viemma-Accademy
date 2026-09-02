with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('hover:bg-[#FCFAF8]0 text-brand-dark px-4 py-2 rounded-lg transition-all shadow-sm', 'hover:bg-[#FCFAF8] text-[#1A3326] px-4 py-2 rounded-sm transition-all shadow-none')
content = content.replace('bg-brand-accent', 'bg-[#D4AF37]')
content = content.replace('text-brand-dark', 'text-[#1A3326]')
content = content.replace('px-4 py-2 rounded-lg cursor-not-allowed', 'px-4 py-2 rounded-sm cursor-not-allowed')
content = content.replace('text-brand-accent', 'text-[#D4AF37]')

with open('index.html', 'w') as f:
    f.write(content)
print("Jobs buttons updated")
