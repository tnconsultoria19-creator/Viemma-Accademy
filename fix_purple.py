with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('text-purple-600 bg-purple-50 border-purple-200', 'text-[#D4AF37] bg-[#1A3326] border-[#1A3326]')
content = content.replace('text-purple-600 bg-purple-50', 'text-[#D4AF37] bg-[#1A3326]')
content = content.replace('text-purple-600', 'text-[#D4AF37]')
content = content.replace('bg-purple-100 text-purple-700', 'bg-[#D4AF37] text-[#1A3326]')

with open('index.html', 'w') as f:
    f.write(content)
print("Purple updated")
