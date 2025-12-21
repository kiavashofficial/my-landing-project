// 3D Hover Cards
document.querySelectorAll(".card-3d").forEach(card => {

    const inner = card.querySelector(".inner");

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        inner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        inner.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});

// ScrollReveal Animations
ScrollReveal().reveal('.hero', { duration: 1200, origin: 'bottom', distance: '60px' });
ScrollReveal().reveal('.card-3d', { duration: 1000, origin: 'bottom', distance: '50px', interval: 200 });
ScrollReveal().reveal('.footer', { duration: 1200, origin: 'top', distance: '40px' });

// Smooth Scroll برای همه لینک‌های صفحه
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute("href"));
        
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.querySelector(".typing").textContent = "طراحی سایت حرفه‌ای";

const texts = [
    "طراحی سایت حرفه‌ای",
    "برندسازی و UI مدرن",
    "ساخت ویدئو و تدوین"
];

let typingElement = document.querySelector(".typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentText = texts[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentText.slice(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 100);
}

typeEffect();

window.addEventListener("scroll", () => {
    let scrolled = window.pageYOffset;
    document.querySelector(".parallax").style.backgroundPositionY = -(scrolled * 0.2) + "px";
});

document.querySelectorAll(".card-3d").forEach((card, i) =>{
    let delay = Math.random() * 2;
    card.style.animationDelay = `${delay}s`;
    card.classList.add("floating");
});

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll(){
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight -100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

window.addEventListener("scroll", function () {
    const parallax = this.document.querySelector(".parallax");
    let offset = this.window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";

});

window.addEventListener("scroll", () => {
    const scrollProgress = document.getElementById("scroll-progress");
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + "%";
});

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let percent = (scrollTop / height) * 100;

    // Cyberpunk
    const cyber = document.getElementById("scroll-cyber");
    if (cyber) cyber.style.width = percent + "%";

    // Glassmorphism
    const glass = document.getElementById("scroll-glass");
    if (glass) glass.style.width = percent + "%";

    // Hologram
    const holo = document.getElementById("scroll-holo");
    if (holo) holo.style.width = percent + "%";
});