// ===================================
// Portfolio Template - JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    initLoader();
    initCursor();
    initNavigation();
    initScrollAnimations();
    initFormValidation();
    initHeroTools();
});

const I18N = {
    fr: {
        loader: 'CHARGEMENT',
        'nav.work': 'Projets',
        'nav.about': 'À propos',
        'nav.contact': 'Contact',
        'nav.menu': 'Menu',
        'hero.tag': 'Développeur web et mobile',
        'hero.line1': 'Créateur',
        'hero.line2': "d'expériences",
        'hero.line3': 'digitales',
        'hero.desc': 'Je conçois des sites web et des apps iOS / Android claires, rapides et mémorables. Du premier écran jusqu\'au détail, chaque choix sert un vrai usage.',
        'hero.ctaWork': 'Voir mes projets',
        'hero.ctaContact': 'Me contacter',
        'hero.scroll': 'Défiler',
        'marquee.design': 'Design UI/UX',
        'marquee.web': 'Développement Web',
        'marquee.mobile': 'Applications mobiles',
        'marquee.os': 'iOS et Android',
        'work.title': 'Projets sélectionnés',
        'work.intro': 'Dix réalisations, une idée claire par carte. Cliquez pour ouvrir le site.',
        'work.view': 'Voir le site',
        'work.github': 'Plus sur GitHub',
        'tag.industry': 'Industrie',
        'tag.landing': 'Site vitrine',
        'tag.catalog': 'Catalogue',
        'tag.consulting': 'Conseil',
        'tag.institutional': 'Institutionnel',
        'tag.ecology': 'Écologie',
        'tag.association': 'Association',
        'tag.logistics': 'Logistique',
        'tag.tracking': 'Suivi',
        'tag.auto': 'Auto',
        'tag.inventory': 'Inventaire',
        'tag.jewelry': 'Bijoux',
        'tag.fintech': 'Fintech',
        'tag.dashboard': 'Dashboard',
        'tag.craft': 'Artisanat',
        'prima.alt': 'Prima Rattan Home, mobilier en rotin artisanal',
        'prima.desc': 'Boutique de meubles en rotin tissé à la main, à Yaoundé.',
        'semence.alt': 'Sémence, tableau de bord de budget personnel',
        'semence.desc': 'App de budget personnel : enveloppes, reste à vivre et cycle mensuel.',
        'sitrabcam.alt': 'Sitrabcam, site de farine premium au Cameroun',
        'sitrabcam.desc': 'Site vitrine et catalogue pour un producteur de farine premium au Cameroun.',
        'lidaf.alt': 'LidafCCA, cabinet de conseil à Douala',
        'lidaf.desc': 'Cabinet de conseil à Douala : fiscalité, formations et gestion de projets.',
        'bambou.alt': 'BambouCamer, association et startup bambou au Cameroun',
        'bambou.desc': 'Association et startup à Dschang : bambou, économie verte et restauration des terres.',
        'aurex.alt': 'Aurex Logistics, suivi de fret mondial',
        'aurex.desc': 'Suivi de fret mondial : cartes live, timelines, route, air, mer et véhicules.',
        'car.alt': "Car4WayLess, inventaire de voitures d'occasion",
        'car.desc': "Marketplace auto aux USA : voitures d'occasion, filtres et fiches véhicule.",
        'ice.alt1': "ICE_TECH, page d'accueil bijouterie",
        'ice.alt2': 'ICE_TECH, catégories de bijoux',
        'ice.alt3': 'ICE_TECH, grills sur mesure',
        'ice.desc': 'Marque de bijoux iced-out au Cameroun : catalogue, catégories et prise de rendez-vous.',
        'rhit.alt': 'RHIT Élections, plateforme de vote étudiant',
        'rhit.desc': 'Vote électronique pour les élections universitaires, avec résultats en direct.',
        'roberto.alt': 'Roberto Saddles, catalogue de selles',
        'roberto.desc': "Boutique d'équipement équestre : catalogue filtré et parcours d'achat.",
        'about.photo': 'Portrait de Dominique Othniel',
        'about.years': 'Années',
        'about.projects': 'Projets',
        'about.clients': 'Clients',
        'about.tag': 'À propos',
        'about.title': "Design et code, au service d'un usage clair.",
        'about.p1': "Je suis Dominique Othniel. Je construis des sites, des apps web et des applications mobiles iOS / Android, où l'esthétique ne cache jamais l'essentiel : un parcours simple, un rendu soigné, une performance solide.",
        'about.p2': "On avance ensemble, de l'idée au livrable. Moins de jargon, plus de décisions visibles à l'écran.",
        'about.skills': 'Compétences',
        'contact.title': 'Vous avez un projet ?<br><span class="highlight">Parlons-en.</span>',
        'form.name': 'Votre nom',
        'form.email': 'Votre email',
        'form.message': 'Votre message',
        'form.send': 'Envoyer le message',
        'form.sending': 'Envoi en cours...',
        'form.required': 'Veuillez remplir tous les champs.',
        'form.invalid': 'Veuillez entrer une adresse email valide.',
        'form.ready': 'Message préparé dans votre client email !',
        'form.subject': 'Message depuis le portfolio',
        'form.bodyName': 'Nom',
        'form.bodyEmail': 'Email',
        'form.bodyMessage': 'Message',
        'footer.tagline': 'Dominique Othniel — Sites web et apps mobiles.',
        'footer.copy': '© 2026 Tous droits réservés.'
    },
    en: {
        loader: 'LOADING',
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.menu': 'Menu',
        'hero.tag': 'Web and mobile developer',
        'hero.line1': 'Creator',
        'hero.line2': 'of digital',
        'hero.line3': 'experiences',
        'hero.desc': 'I design websites and iOS / Android apps that are clear, fast, and memorable. From the first screen to the last detail, every choice serves a real use.',
        'hero.ctaWork': 'See my work',
        'hero.ctaContact': 'Get in touch',
        'hero.scroll': 'Scroll',
        'marquee.design': 'UI/UX Design',
        'marquee.web': 'Web Development',
        'marquee.mobile': 'Mobile Apps',
        'marquee.os': 'iOS and Android',
        'work.title': 'Selected work',
        'work.intro': 'Ten projects, one clear idea per card. Click to open the site.',
        'work.view': 'View site',
        'work.github': 'More on GitHub',
        'tag.industry': 'Industry',
        'tag.landing': 'Landing page',
        'tag.catalog': 'Catalog',
        'tag.consulting': 'Consulting',
        'tag.institutional': 'Institutional',
        'tag.ecology': 'Ecology',
        'tag.association': 'Nonprofit',
        'tag.logistics': 'Logistics',
        'tag.tracking': 'Tracking',
        'tag.auto': 'Auto',
        'tag.inventory': 'Inventory',
        'tag.jewelry': 'Jewelry',
        'tag.fintech': 'Fintech',
        'tag.dashboard': 'Dashboard',
        'tag.craft': 'Craft',
        'prima.alt': 'Prima Rattan Home, handmade rattan furniture',
        'prima.desc': 'Handmade rattan furniture shop in Yaoundé.',
        'semence.alt': 'Semence, personal budget dashboard',
        'semence.desc': 'Personal budget app: envelopes, cash on hand, and a monthly cycle.',
        'sitrabcam.alt': 'Sitrabcam, premium flour website in Cameroon',
        'sitrabcam.desc': 'Showcase and catalog for a premium flour producer in Cameroon.',
        'lidaf.alt': 'LidafCCA, consulting firm in Douala',
        'lidaf.desc': 'Consulting firm in Douala: tax, training, and project management.',
        'bambou.alt': 'BambouCamer, bamboo association and startup in Cameroon',
        'bambou.desc': 'Association and startup in Dschang: bamboo, green economy, and land restoration.',
        'aurex.alt': 'Aurex Logistics, global freight tracking',
        'aurex.desc': 'Global freight tracking: live maps, timelines, road, air, sea, and vehicles.',
        'car.alt': 'Car4WayLess, used car inventory',
        'car.desc': 'US auto marketplace: used cars, filters, and vehicle listings.',
        'ice.alt1': 'ICE_TECH jewelry homepage',
        'ice.alt2': 'ICE_TECH jewelry categories',
        'ice.alt3': 'ICE_TECH custom grills',
        'ice.desc': 'Iced-out jewelry brand in Cameroon: catalog, categories, and booking.',
        'rhit.alt': 'RHIT Elections, student voting platform',
        'rhit.desc': 'Electronic voting for university elections, with live results.',
        'roberto.alt': 'Roberto Saddles, saddle catalog',
        'roberto.desc': 'Equestrian shop: filtered catalog and checkout flow.',
        'about.photo': 'Portrait of Dominique Othniel',
        'about.years': 'Years',
        'about.projects': 'Projects',
        'about.clients': 'Clients',
        'about.tag': 'About',
        'about.title': 'Design and code, in service of a clear use.',
        'about.p1': 'I am Dominique Othniel. I build websites, web apps, and iOS / Android mobile apps where aesthetics never hide the point: a simple path, a careful look, and solid performance.',
        'about.p2': 'We move together, from idea to delivery. Less jargon, more decisions you can see on screen.',
        'about.skills': 'Skills',
        'contact.title': 'Have a project?<br><span class="highlight">Let\'s talk.</span>',
        'form.name': 'Your name',
        'form.email': 'Your email',
        'form.message': 'Your message',
        'form.send': 'Send message',
        'form.sending': 'Sending...',
        'form.required': 'Please fill in all fields.',
        'form.invalid': 'Please enter a valid email address.',
        'form.ready': 'Message drafted in your email app.',
        'form.subject': 'Message from the portfolio',
        'form.bodyName': 'Name',
        'form.bodyEmail': 'Email',
        'form.bodyMessage': 'Message',
        'footer.tagline': 'Dominique Othniel — Websites and mobile apps.',
        'footer.copy': '© 2026 All rights reserved.'
    }
};

let currentLang = 'fr';

function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.fr[key] || key;
}

function applyLang(lang) {
    currentLang = lang === 'en' ? 'en' : 'fr';
    document.documentElement.lang = currentLang;
    localStorage.setItem('portfolio-lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = t(key);
        if (el.hasAttribute('data-i18n-split')) {
            el.innerHTML = '';
            value.split('').forEach((letter, i) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.style.animationDelay = (i * 0.1) + 's';
                el.appendChild(span);
            });
            return;
        }
        el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
        el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
        el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('is-active', btn.getAttribute('data-lang') === currentLang);
    });
}

function initI18n() {
    const saved = localStorage.getItem('portfolio-lang');
    applyLang(saved === 'en' ? 'en' : 'fr');

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            applyLang(btn.getAttribute('data-lang'));
        });
    });
}

// ===================================
// Loader
// ===================================
function initLoader() {
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }, 700);
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
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .lang-btn');
    
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
        
        if (currentScroll > 40) {
            nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
        } else {
            nav.style.borderBottomColor = 'transparent';
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
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
            showNotification(t('form.required'), 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification(t('form.invalid'), 'error');
            return;
        }
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const submitLabel = submitBtn.querySelector('span');
        const originalText = submitLabel ? submitLabel.textContent : submitBtn.innerHTML;
        
        if (submitLabel) {
            submitLabel.textContent = t('form.sending');
        } else {
            submitBtn.innerHTML = '<span>' + t('form.sending') + '</span>';
        }
        submitBtn.disabled = true;
        
        const subject = encodeURIComponent(t('form.subject') + ' - ' + name);
        const body = encodeURIComponent(
            t('form.bodyName') + ': ' + name + '\n' +
            t('form.bodyEmail') + ': ' + email + '\n\n' +
            t('form.bodyMessage') + ':\n' + message
        );
        const mailtoLink = `mailto:crugerstark@gmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        setTimeout(() => {
            showNotification(t('form.ready'), 'success');
            form.reset();
            if (submitLabel) {
                submitLabel.textContent = t('form.send');
            } else {
                submitBtn.innerHTML = originalText;
            }
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
// Hero tool icons
// ===================================
function initHeroTools() {
    const tools = document.querySelector('.hero-tools');
    const hero = document.querySelector('.hero');
    if (!tools || !hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const icons = tools.querySelectorAll('.tool-icon');

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        icons.forEach((icon, i) => {
            const depth = ((i % 4) + 1) * 10;
            icon.style.setProperty('--tx', (x * depth).toFixed(1) + 'px');
            icon.style.setProperty('--ty', (y * depth).toFixed(1) + 'px');
        });
    });
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

