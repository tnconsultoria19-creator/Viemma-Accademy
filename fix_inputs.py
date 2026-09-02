with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('w-full px-4 py-3 rounded-sm border bg-gray-50 text-sm"', 'w-full px-4 py-3 rounded-sm border border-[#E8ECEA] bg-white text-sm focus:outline-none focus:border-[#D4AF37]"')

with open('index.html', 'w') as f:
    f.write(content)

