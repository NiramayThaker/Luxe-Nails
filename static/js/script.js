const cursor = document.querySelector('.custom-cursor');
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Custom Cursor Movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hover Effect
document.querySelectorAll('a, button, .glass-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
        cursor.style.border = "1px solid #fff";
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.border = "none";
    });
});

navSlide();
