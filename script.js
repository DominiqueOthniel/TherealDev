// ===================================
// Portfolio Template - JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initLoader();
    initCursor();
    initNavigation();
    initScrollAnimations();
    initFormValidation();
});

// ===================================
// Loader
// ===================================
function initLoader() {
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }, 1500);
    });
}

// ===================================
// Custom Cursor
// ===================================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor animation
    function animateCursor() {
        // Main cursor follows immediately
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower has more lag
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
}

// ===================================
// Navigation
// ===================================
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const nav = document.querySelector('.nav');
    
    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 10, 11, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'linear-gradient(to bottom, var(--bg-primary), transparent)';
            nav.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger children animations
                const children = entry.target.querySelectorAll('.stagger-child');
                children.forEach((child, index) => {
                    child.style.animationDelay = `${index * 0.1}s`;
                    child.classList.add('animate-in');
                });
            }
        });
    }, observerOptions);
    
    // Observe sections
    const animatedElements = document.querySelectorAll('.section-header, .project-card, .about-visual, .about-content, .contact-header, .contact-info, .contact-form');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// Form Validation
// ===================================
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Veuillez remplir tous les champs.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide.', 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span>Envoi en cours...</span>';
        submitBtn.disabled = true;
        
        // Envoi via mailto vers crugerstark@gmail.com
        const subject = encodeURIComponent(`Message depuis le portfolio - ${name}`);
        const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:crugerstark@gmail.com?subject=${subject}&body=${body}`;
        
        // Ouvrir le client email
        window.location.href = mailtoLink;
        
        // Réinitialiser le formulaire après un court délai
        setTimeout(() => {
            showNotification('Message préparé dans votre client email !', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 500);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 0.95rem;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.4s ease;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification button {
                background: transparent;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                line-height: 1;
                opacity: 0.8;
                transition: opacity 0.2s;
            }
            .notification button:hover {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.4s ease reverse';
        setTimeout(() => notification.remove(), 400);
    }, 5000);
}

// ===================================
// Parallax Effect (optional enhancement)
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.05 * (index + 1);
        orb.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed}px)`;
    });
});

