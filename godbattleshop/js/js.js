// ===== Smooth Scroll for "View Pack" or category links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== Highlight Product on Hover =====
const products = document.querySelectorAll('.product-card');
products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.transform = 'scale(1.05)';
        product.style.transition = '0.3s';
    });
    product.addEventListener('mouseleave', () => {
        product.style.transform = 'scale(1)';
    });
});

// ===== Highlight Staff Card on Hover =====
const staffCards = document.querySelectorAll('.staff-card');
staffCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 0 15px #ffee00ff';
        card.style.transition = '0.3s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});
