with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('class="bg-[#1A3326] text-[#FCFAF8] px-4 py-2 rounded-sm text-xs hover:bg-[#D4AF37] hover:text-[#1A3326] shadow"', 'class="bg-[#1A3326] text-[#FCFAF8] px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1A3326] transition-colors"')
content = content.replace('bg-gray-50', 'bg-[#FCFAF8]')
content = content.replace('bg-gray-100', 'bg-[#E8ECEA]')
content = content.replace('bg-gray-200', 'bg-[#E8ECEA]')

with open('index.html', 'w') as f:
    f.write(content)
print("Simulations updated")
