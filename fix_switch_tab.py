with open('index.html', 'r') as f:
    content = f.read()

replacement = """        function switchTab(tabId) {
            document.querySelectorAll('.dashboard-section').forEach(s => s.classList.remove('active'));
            document.getElementById(tabId)?.classList.add('active');

            // Set active highlight class on navigation buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                const target = btn.getAttribute('data-target');
                if (target === tabId) {
                    btn.classList.add('text-[#D4AF37]');
                    btn.classList.remove('text-[#FCFAF8]/70');
                } else {
                    btn.classList.remove('text-[#D4AF37]');
                    btn.classList.add('text-[#FCFAF8]/70');
                }
            });"""

content = content.replace("""        function switchTab(tabId) {
            document.querySelectorAll('.dashboard-section').forEach(s => s.classList.remove('active'));
            document.getElementById(tabId)?.classList.add('active');

            // Set active highlight class on navigation buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                const target = btn.getAttribute('data-target');
                if (target === tabId) {
                    btn.classList.add('text-brand-accent', 'bg-white/5');
                    btn.classList.remove('text-white/80');
                } else {
                    btn.classList.remove('text-brand-accent', 'bg-white/5');
                    btn.classList.add('text-white/80');
                }
            });""", replacement)

with open('index.html', 'w') as f:
    f.write(content)
