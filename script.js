// Function to detect when elements are in view
function revealOnScroll() {
    const reveals = document.querySelectorAll('.content h1, .content h2, .content p');

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('reveal');
        }
    });
}

// Run the reveal function on scroll
window.addEventListener('scroll', revealOnScroll);

// Add smooth fade-in effect for parallax sections
document.addEventListener('DOMContentLoaded', () => {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
        }, index * 500);
    });
});
