// Botão Voltar ao Topo
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


ScrollReveal().reveal('.card_atuacao', { delay: 10, distance: '50px', origin: 'bottom', duration: 800 });

ScrollReveal().reveal('.team-cards .card', { delay: 20, distance: '50px', origin: 'right', duration: 800 });

ScrollReveal().reveal('.blog-card', { delay: 20, distance: '50px', origin: 'left', duration: 800 });

ScrollReveal().reveal('.quem-somos', { delay: 300,distance: '50px',origin: 'top',duration: 800});
