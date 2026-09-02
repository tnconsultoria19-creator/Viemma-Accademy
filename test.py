with open('index.html', 'r') as f:
    content = f.read()

start_idx = content.find('<div id="toast-container"')
script_idx = content.find('<script type="module">')
print(start_idx, script_idx)
