// Intersection Observer para animações de scroll
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona classes base para animação
    const animatedElements = document.querySelectorAll('.card, .price-card, .scope-item, .testim-card, .schedule-card, .section-title, .section-desc');
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Animação suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lógica do Formulário de Agendamento (WhatsApp)
    const form = document.getElementById('whatsapp-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const horas = document.getElementById('horas-select').value;
            const dataStr = document.getElementById('data-input').value; // YYYY-MM-DD
            const horaStr = document.getElementById('hora-input').value; // HH:MM
            
            // Formatando a data para DD/MM
            const partesData = dataStr.split('-');
            const dataFormatada = partesData.length === 3 ? `${partesData[2]}/${partesData[1]}` : dataStr;

            const mensagem = `Olá Fabiane! Gostaria de verificar a disponibilidade para uma faxina de ${horas} no dia ${dataFormatada} às ${horaStr}.`;
            const phone = "554396053182";
            
            // Construção da URL e redirecionamento
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
        });
    }
});
