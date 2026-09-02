with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('bg-blue-50 text-blue-700', 'bg-[#E8ECEA] text-[#1A3326]')
content = content.replace('text-blue-600 bg-blue-50 border-blue-200', 'text-[#1A3326] bg-[#E8ECEA] border-[#E8ECEA]')
content = content.replace('text-blue-600 bg-blue-50', 'text-[#1A3326] bg-[#E8ECEA]')
content = content.replace('text-blue-700', 'text-[#1A3326]')

with open('index.html', 'w') as f:
    f.write(content)
print("Colors updated")
