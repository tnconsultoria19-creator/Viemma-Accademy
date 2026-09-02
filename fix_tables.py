with open('index.html', 'r') as f:
    content = f.read()

# Make table headers transparent and editorial
content = content.replace('bg-gray-50 text-[10px]', 'bg-transparent text-[10px]')
content = content.replace('bg-gray-50 border-b border-[#E8ECEA]', 'bg-transparent border-b border-[#E8ECEA]')

# Fix standard table wrappers
content = content.replace('bg-white/80 rounded-sm shadow-none border border-[#E8ECEA] overflow-hidden', 'bg-white rounded-sm overflow-hidden')

with open('index.html', 'w') as f:
    f.write(content)
print("Tables updated")
