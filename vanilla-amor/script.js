// Configuração das fotos - ajuste os nomes dos arquivos se necessário
const photos = [
    "WhatsApp Image 2026-06-17 at 19.13.22 (1).jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.22.jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.23 (1).jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.23 (2).jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.23 (3).jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.23 (4).jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.23 (5).jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.23 (6).jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.23 (7).jpeg",
    "WhatsApp Image 2026-06-17 at 19.13.23 (8).jpeg"
];

const gallery = document.getElementById('gallery');
const audio = document.getElementById('bg-audio');
let hasStarted = false;

// Criar as seções de Polaroid
photos.forEach((photoName, index) => {
    const section = document.createElement('section');
    section.className = 'memory-section';
    
    // Alternar rotação para as Polaroids
    const rotation = index % 2 === 0 ? -2 : 3;

    section.innerHTML = `
        <div class="polaroid" style="transform: rotate(${rotation}deg)">
            <img src="assets/photos/${photoName}" alt="Memória" class="polaroid-img">
        </div>
    `;
    gallery.appendChild(section);
});

// Intersection Observer para revelar elementos no scroll
const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.memory-section').forEach(section => {
    observer.observe(section);
});

// Gatilho de Áudio no Scroll
window.addEventListener('scroll', () => {
    if (!hasStarted) {
        audio.play().catch(e => console.log("Aguardando interação para áudio..."));
        hasStarted = true;
    }
});
