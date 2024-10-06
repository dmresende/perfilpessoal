document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const btnVoltarAoTopo = document.getElementById('btnVoltarAoTopo');

    // Função para trocar o tema
    function toggleTheme() {
        if (htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (themeToggle) themeToggle.textContent = 'Tema Claro';
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            if (themeToggle) themeToggle.textContent = 'Tema Escuro';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        if (themeToggle) {
            themeToggle.textContent = savedTheme === 'light' ? 'Tema Escuro' : 'Tema Claro';
        }
    }

    if (themeToggle) 
        themeToggle.addEventListener('click', toggleTheme);
     else 
        console.warn('Botão de troca de tema não encontrado');
    

    if (btnVoltarAoTopo) {
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
                btnVoltarAoTopo.style.display = "block";
             else 
                btnVoltarAoTopo.style.display = "none";
            
        };

        btnVoltarAoTopo.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else 
        console.warn('Botão Voltar ao Topo não encontrado');
    
});
