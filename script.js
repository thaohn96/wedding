// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav ul');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Responsive Image Handler
function handleResponsiveImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    });
}

// Window Resize Handler
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navList.classList.remove('active');
    }
});

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    handleResponsiveImages();
});
