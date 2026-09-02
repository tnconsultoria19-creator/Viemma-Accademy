with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('hover:bg-yellow-50', 'hover:bg-[#FCFAF8]')
content = content.replace('hover:bg-yellow-500', 'hover:bg-[#FCFAF8]')
content = content.replace('text-yellow-600 bg-yellow-50 border-yellow-200', 'text-[#D4AF37] bg-[#FCFAF8] border-[#D4AF37]')
content = content.replace('text-yellow-600 bg-yellow-50', 'text-[#D4AF37] bg-[#FCFAF8]')
content = content.replace('text-yellow-600', 'text-[#D4AF37]')
content = content.replace('text-yellow-400', 'text-[#D4AF37]')
content = content.replace('bg-yellow-500/15 border border-yellow-500/30', 'bg-[#D4AF37]/15 border border-[#D4AF37]/30')
content = content.replace('bg-yellow-4 opacity-10000/15 border border-yellow-4 opacity-10000/30 rounded-sm text-yellow-400 text-[10px]', 'bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-sm text-[#D4AF37] text-[10px]')
content = content.replace('bg-brand-accent hover:bg-yellow-500 text-brand-dark px-4 py-2 rounded-lg transition-all shadow-sm', 'bg-[#D4AF37] hover:bg-[#FCFAF8] text-[#1A3326] px-4 py-2 rounded-sm transition-all shadow-none')
content = content.replace('border border-gray-200 rounded-xl hover:bg-[#FCFAF8] hover:border-brand-accent transition-all', 'border border-[#E8ECEA] rounded-sm hover:bg-[#FCFAF8] hover:border-[#D4AF37] transition-all')

with open('index.html', 'w') as f:
    f.write(content)
print("Yellow updated")
