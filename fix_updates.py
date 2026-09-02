with open('index.html', 'r') as f:
    content = f.read()

replacement1 = """        function updateUIDisconnected() {
            document.getElementById('app-container').style.display = 'none';
            document.getElementById('landing-container').style.display = 'flex';"""

content = content.replace("        function updateUIDisconnected() {", replacement1)

replacement2 = """        function updateUIConnected() {
            document.getElementById('landing-container').style.display = 'none';
            document.getElementById('app-container').style.display = 'flex';"""

content = content.replace("        function updateUIConnected() {", replacement2)

with open('index.html', 'w') as f:
    f.write(content)
