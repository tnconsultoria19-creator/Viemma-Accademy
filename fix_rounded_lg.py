with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('rounded-lg', 'rounded-sm')
content = content.replace('rounded-xl', 'rounded-sm')
content = content.replace('rounded-2xl', 'rounded-sm')
content = content.replace('bg-brand-soft', 'bg-[#E8ECEA]')
content = content.replace('border-brand-accent/20', 'border-[#D4AF37]/20')
content = content.replace('bg-brand-dark', 'bg-[#1A3326]')
content = content.replace('border-gray-200', 'border-[#E8ECEA]')

with open('index.html', 'w') as f:
    f.write(content)
print("Rounded-lg updated")
