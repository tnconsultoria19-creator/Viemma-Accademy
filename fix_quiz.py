with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('bg-white/80 border border-[#E8ECEA] text-gray-600', 'bg-transparent border border-[#E8ECEA] text-[#1A3326]')
content = content.replace('text-gray-600', 'text-[#1A3326]/60')
content = content.replace('text-gray-500', 'text-[#1A3326]/50')
content = content.replace('text-gray-400', 'text-[#1A3326]/40')
content = content.replace('text-gray-300', 'text-[#1A3326]/30')

with open('index.html', 'w') as f:
    f.write(content)
print("Grays updated")
