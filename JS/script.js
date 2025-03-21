// Botão Voltar ao Topo
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    // Calcular a posição do scroll e a altura total da página
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Mostrar o botão quando o usuário estiver perto do final da página
    if (scrollPosition + windowHeight >= pageHeight - 300) {
        backToTop.style.display = "block";  // Mostrar o botão
    } else {
        backToTop.style.display = "none";   // Esconder o botão
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ScrollReveal para animações de elementos
ScrollReveal().reveal('.card_atuacao', { delay: 10, distance: '50px', origin: 'bottom', duration: 800 });
ScrollReveal().reveal('.team-cards .card', { delay: 20, distance: '50px', origin: 'right', duration: 800 });
ScrollReveal().reveal('.blog-card', { delay: 20, distance: '50px', origin: 'left', duration: 800 });
ScrollReveal().reveal('.quem-somos', { delay: 300, distance: '50px', origin: 'top', duration: 800 });
