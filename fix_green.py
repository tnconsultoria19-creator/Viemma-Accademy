with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('text-green-600 bg-green-50 border-green-200', 'text-[#1A3326] bg-[#E8ECEA] border-[#E8ECEA]')
content = content.replace('text-green-600 bg-green-50', 'text-[#1A3326] bg-[#E8ECEA]')
content = content.replace('text-green-600', 'text-[#D4AF37]')
content = content.replace('bg-green-600', 'bg-[#1A3326]')
content = content.replace('bg-green-100 text-green-700', 'bg-[#E8ECEA] text-[#1A3326]')
content = content.replace('bg-green-50 border border-green-200 p-4 rounded-xl text-green-800', 'bg-[#FCFAF8] border border-[#E8ECEA] p-4 rounded-sm text-[#1A3326]')

with open('index.html', 'w') as f:
    f.write(content)
print("Green updated")
