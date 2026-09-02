with open('index.html', 'r') as f:
    content = f.read()

import re

# Fix rounded on buttons to rounded-sm
content = re.sub(r'rounded\s', 'rounded-sm ', content)
# Make white text slightly softer
content = content.replace('text-white', 'text-[#FCFAF8]')

with open('index.html', 'w') as f:
    f.write(content)
print("Buttons updated")
