
// Gallery page JavaScript functionality

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

// Image loading animation
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-image-item');

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize gallery items with animation
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Add click handlers for gallery items (for future lightbox functionality)
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Gallery item clicked:', item.querySelector('h3').textContent);
            // Future: Add lightbox functionality here
        });
    });
});

// Smooth scroll for back link
document.addEventListener('DOMContentLoaded', () => {
    const backLink = document.querySelector('.back-link');
    if (backLink) {
        backLink.addEventListener('click', (e) => {
            // Let the browser handle the navigation naturally
            // since we're going to a different page with an anchor
        });
    }
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover sound effect (optional - can be removed)
    const galleryItems = document.querySelectorAll('.gallery-image-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add subtle scale effect on hover
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });

        item.addEventListener('mouseleave', () => {
            // Reset scale on mouse leave
            const img = item.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
});
