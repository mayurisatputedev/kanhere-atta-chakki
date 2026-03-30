// ============================================
// DOM Elements
// ============================================

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// ============================================
// Navigation Toggle
// ============================================

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

function openWhatsApp() {
    const phoneNumber = '9923817885';
    const defaultMessage = 'Hi Kanhere Atta Chakki! I would like to place an order. Please share available products and prices.';
    openWhatsAppWithMessage(defaultMessage);
}

function openWhatsAppWithMessage(message) {
    const phoneNumber = '9923817885';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// ============================================
// Notifications (Removed - No longer needed)
// ============================================

// ============================================
// Scroll Animation Effects
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.category-card, .feature-card, .offer-card, .review-card').forEach(el => {
        observer.observe(el);
    });
});

// ============================================
// Hero Animation
// ============================================

// ============================================
// Smooth Scroll for Navigation
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Navbar Background on Scroll
// ============================================

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// Add CSS Animation Styles Dynamically
// ============================================

const style = document.createElement('style');
style.textContent = `
    /* Animation styles already defined in CSS */
`;
document.head.appendChild(style);

// ============================================
// Page Load Animation
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Animate hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ============================================
// Mobile Viewport Height Fix (for mobile browser UI)
// ============================================

function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();
window.addEventListener('resize', setViewportHeight);
