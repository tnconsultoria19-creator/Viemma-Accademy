with open('index.html', 'r') as f:
    content = f.read()

import re
# Find logout
# We want to change the logout behavior to hide app-container and show landing-container
content = content.replace("window.location.href = 'https://viemma.co.za';", "document.getElementById('app-container').style.display = 'none'; document.getElementById('landing-container').style.display = 'flex';")

with open('index.html', 'w') as f:
    f.write(content)

