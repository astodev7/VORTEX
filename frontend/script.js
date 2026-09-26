// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(menuToggle.classList.contains('active')));
    document.querySelector('.header').classList.toggle('menu-open', menuToggle.classList.contains('active'));
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.querySelector('.header').classList.remove('menu-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.querySelector('.header').classList.remove('menu-open');
    }
});

// Filter Buttons
const filterButtons = document.querySelectorAll('.filter-button');
const propertyCards = document.querySelectorAll('.property-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.textContent.trim().toLowerCase();

        // Filter properties
        propertyCards.forEach(card => {
            const title = card.querySelector('.property-title').textContent.toLowerCase();

            if (filterValue === 'todos') {
                card.style.display = 'block';
            } else if (
                (filterValue === 'apartamento' && (title.includes('residencial') || title.includes('loft'))) ||
                (filterValue === 'casa' && (title.includes('casa') || title.includes('villa'))) ||
                (filterValue === 'cobertura' && title.includes('cobertura')) ||
                (filterValue === 'terreno' && title.includes('terreno'))
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');

const homeHero = document.querySelector('.home-page .hero');
const updateHeader = () => {
    const pastHero = homeHero ? homeHero.getBoundingClientRect().bottom <= 0 : window.scrollY > 100;
    header.classList.toggle('is-scrolled', pastHero);
    header.classList.toggle('is-over-hero', Boolean(homeHero) && window.scrollY > 12 && !pastHero);
};
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', updateHeader);
updateHeader();

// Form Validation
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const interest = document.getElementById('interest').value;
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !phone) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // In a real application, this would send data to a server
        console.log('Form submitted:', { name, email, phone, interest, message });

        // Redirect to thank you page
        window.location.href = 'thank-you.html';
    });
}

// Property Card Hover Animation
propertyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Lazy Loading Images
const images = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Search Bar Functionality
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const searchTypeSelect = document.querySelector('.search-select:first-of-type');
const searchRoomsSelect = document.querySelector('.search-select:last-of-type');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const typeFilter = searchTypeSelect.value.toLowerCase();
    const roomsFilter = searchRoomsSelect.value;

    propertyCards.forEach(card => {
        const title = card.querySelector('.property-title').textContent.toLowerCase();
        const location = card.querySelector('.property-location').textContent.toLowerCase();
        const features = card.querySelector('.property-features').textContent.toLowerCase();

        let matchesSearch = true;
        let matchesType = true;
        let matchesRooms = true;

        // Search term filter
        if (searchTerm && !title.includes(searchTerm) && !location.includes(searchTerm)) {
            matchesSearch = false;
        }

        // Type filter
        if (typeFilter) {
            if (typeFilter === 'apartamento' && !title.includes('residencial') && !title.includes('loft')) {
                matchesType = false;
            } else if (typeFilter === 'casa' && !title.includes('casa') && !title.includes('villa')) {
                matchesType = false;
            } else if (typeFilter === 'cobertura' && !title.includes('cobertura')) {
                matchesType = false;
            }
        }

        // Rooms filter
        if (roomsFilter) {
            const roomsInCard = parseInt(features.match(/\d+/)?.[0] || 0);
            const minRooms = parseInt(roomsFilter);
            if (roomsInCard < minRooms) {
                matchesRooms = false;
            }
        }

        // Show or hide card
        if (matchesSearch && matchesType && matchesRooms) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Scroll to results
    const propertiesSection = document.getElementById('imoveis');
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = propertiesSection.offsetTop - headerHeight - 20;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchButton.click();
    }
});

// Property Button Click Handler - Navigate to detail page
const propertyButtons = document.querySelectorAll('.property-button');

propertyButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const propertyId = index + 1;
        window.location.href = `property.html?id=${propertyId}`;
    });
});

// Performance: Reduce animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(element => {
        element.style.transition = 'none';
    });
}

// Accessibility: Focus visible
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Service Links - Navigate to contact form with pre-selected option
const serviceLinks = document.querySelectorAll('.service-link');

serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const service = link.getAttribute('data-service');

        // Scroll to contact form
        const contactSection = document.getElementById('contato');
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Wait for scroll to complete, then update form
        setTimeout(() => {
            const interestSelect = document.getElementById('interest');
            const contactSubtitle = document.getElementById('contactSubtitle');

            if (interestSelect && contactSubtitle) {
                interestSelect.value = service;

                // Update subtitle based on service
                const messages = {
                    'comprar': 'Conte-nos sobre o imóvel dos seus sonhos',
                    'vender': 'Descreva o imóvel que você deseja vender',
                    'alugar': 'Informe-nos sobre suas necessidades de locação'
                };

                contactSubtitle.textContent = messages[service];
                contactSubtitle.classList.add('highlight');

                // Focus on first input
                document.getElementById('name').focus();

                // Remove highlight after 3 seconds
                setTimeout(() => {
                    contactSubtitle.classList.remove('highlight');
                }, 3000);
            }
        }, 800);
    });
});

// Cookie Banner Management
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');

// Check if user has already made a choice
const cookieConsent = localStorage.getItem('cookieConsent');

if (!cookieConsent) {
    // Show banner after a short delay
    setTimeout(() => {
        if (cookieBanner) {
            cookieBanner.classList.add('visible');
        }
    }, 1000);
}

// Accept cookies
if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        cookieBanner.classList.remove('visible');

        // Enable analytics or other cookie-dependent features
        console.log('Cookies accepted');
    });
}

// Reject cookies
if (cookieReject) {
    cookieReject.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
        cookieBanner.classList.remove('visible');

        console.log('Cookies rejected');
    });
}
