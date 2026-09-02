with open('index.html', 'r') as f:
    content = f.read()

import re

new_config = """tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    colors: {
                        brand: {
                            dark: '#1A3326', 
                            light: '#FCFAF8', 
                            accent: '#D4AF37',
                            soft: '#E8ECEA'
                        }
                    },
                    boxShadow: {
                        'elegant': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
                        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
                        'float': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }
                }
            }
        }"""
        
content = re.sub(r'tailwind\.config\s*=\s*\{.*?(?=\s*<\/script>)', new_config, content, flags=re.DOTALL)

with open('index.html', 'w') as f:
    f.write(content)
print("Config updated")
