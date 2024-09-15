// Função para alternar o menu hambúrguer
document.getElementById('menuToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});

// Função para fechar o menu quando um link for clicado
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    });
});

// Função para alertar sobre a continuação
document.addEventListener('DOMContentLoaded', function() {
    const alertLinks = document.querySelectorAll('.info-alert');
    const alertMessage = document.createElement('div');
    alertMessage.className = 'alert-message';
    alertMessage.textContent = 'Esta seção será adicionada em breve!';
    document.body.appendChild(alertMessage);

    alertLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            alertMessage.classList.add('show');
            setTimeout(() => {
                alertMessage.classList.remove('show');
            }, 3000); // Exibe o aviso por 3 segundos
        });
    });
});