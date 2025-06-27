// Shared site-wide JavaScript for Zara Spa

// DOM Elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Mobile menu toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Prevent mobile menu from closing when clicking inside it
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}
