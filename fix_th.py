with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('bg-gray-100 text-xs text-gray-500', 'bg-transparent text-[10px] uppercase tracking-widest text-gray-500 border-b border-[#E8ECEA]')

with open('index.html', 'w') as f:
    f.write(content)
