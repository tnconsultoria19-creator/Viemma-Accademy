with open('index.html', 'r') as f:
    content = f.read()

replacement = """        function closeLoginModal() { 
            document.getElementById('login-modal').classList.replace('modal-active', 'modal-inactive'); 
            if (!token) {
                document.getElementById('app-container').style.display = 'none';
                document.getElementById('landing-container').style.display = 'flex';
            }
        }"""
        
content = content.replace("        function closeLoginModal() { \n            document.getElementById('login-modal').classList.replace('modal-active', 'modal-inactive'); \n        }", replacement)

with open('index.html', 'w') as f:
    f.write(content)
