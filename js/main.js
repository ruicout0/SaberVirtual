/**
 * SaberVirtual - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Hide page loader
    initPageLoader();
    
    // Set current year in footer
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    // Initialize all components
    initThemeToggle();
    initMobileMenu();
    initLanguageSelector();
    initSmoothScroll();
    initAccordion();
    initCarousel();
    initScrollAnimations();
    initStickyHeader();
    initBackToTop();
    initContactForm();
    initHeroSlider();
    initServiceModals();
});

/**
 * Theme Toggle (Dark/Light Mode)
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for stored theme preference or system preference
    const storedTheme = localStorage.getItem('sabervirtual-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply initial theme
    if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('sabervirtual-theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
        }
    });
    
    // Toggle button click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('sabervirtual-theme', newTheme);
            
            // Debug log
            console.log('Theme toggled to:', newTheme);
        });
    }
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });
    }
}

/**
 * Language Selector
 */
function initLanguageSelector() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    
    if (langBtn && langDropdown) {
        // Toggle dropdown
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Language selection
        const langOptions = langDropdown.querySelectorAll('a');
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                
                if (typeof i18n !== 'undefined') {
                    i18n.setLanguage(lang);
                }
                
                langDropdown.classList.remove('active');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
        });
    }
}

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Accordion Component
 */
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                accordionItems.forEach(i => {
                    i.classList.remove('active');
                    const icon = i.querySelector('.accordion-header i');
                    if (icon) {
                        icon.className = 'fas fa-plus';
                    }
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    const icon = item.querySelector('.accordion-header i');
                    if (icon) {
                        icon.className = 'fas fa-minus';
                    }
                }
            });
        }
    });
}

/**
 * Simple Carousel/Slider
 */
function initCarousel() {
    // Services Carousel
    const servicesCarousel = document.querySelector('.services .services-carousel');
    const servicesNav = document.querySelector('.services .carousel-nav');
    
    if (servicesCarousel && servicesNav) {
        setupCarousel(servicesCarousel, servicesNav);
    }
    
    // Areas Carousel
    const areasCarousel = document.querySelector('.support-areas .areas-carousel');
    const areasNav = document.querySelector('.support-areas .carousel-nav');
    
    if (areasCarousel && areasNav) {
        setupCarousel(areasCarousel, areasNav);
    }
}

function setupCarousel(carousel, nav) {
    const prevBtn = nav.querySelector('.prev');
    const nextBtn = nav.querySelector('.next');
    
    let scrollAmount = 0;
    const cardWidth = 280; // Approximate card width + gap
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            scrollAmount = Math.max(scrollAmount - cardWidth, 0);
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    // Elements with fade-in animation
    const fadeElements = document.querySelectorAll(
        '.section-header, .about-content, .accordion, .online-box, .contact-content, .testimonial-card'
    );
    
    // Cards with staggered animation
    const cardContainers = document.querySelectorAll(
        '.services-carousel, .values-cards, .areas-carousel, .testimonials-grid'
    );
    
    // Left/right animations
    const leftElements = document.querySelectorAll('.why-us-text, .recruitment-text, .tutoring-text');
    const rightElements = document.querySelectorAll('.why-us-image, .recruitment-image, .tutoring-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Apply fade-in to basic elements
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Apply left animation
    leftElements.forEach(el => {
        el.classList.add('fade-in-left');
        observer.observe(el);
    });
    
    // Apply right animation
    rightElements.forEach(el => {
        el.classList.add('fade-in-right');
        observer.observe(el);
    });
    
    // Apply staggered animations to cards
    cardContainers.forEach(container => {
        const cards = container.querySelectorAll('.service-card, .value-card, .area-card, .testimonial-card');
        cards.forEach((card, index) => {
            card.classList.add('fade-in', `stagger-${Math.min(index + 1, 5)}`);
            observer.observe(card);
        });
    });
}

/**
 * Sticky Header with Liquid Glass Effect
 */
function initStickyHeader() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

/**
 * Update Active Navigation Link
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    let currentSection = '';
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Hero Dots Navigation (if implementing slider)
 */
function initHeroDots() {
    const dots = document.querySelectorAll('.hero-dots .dot');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            // Add slide change logic here if implementing full slider
        });
    });
}
/**
 * Page Loader
 */
function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        // Small delay to show loader briefly
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Contact Form Validation
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const formData = new FormData(form);
            
            // Validate each field
            form.querySelectorAll('input, textarea').forEach(field => {
                if (field.hasAttribute('required') && !field.value.trim()) {
                    field.classList.add('error');
                    field.classList.remove('success');
                    isValid = false;
                } else if (field.type === 'email' && field.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        field.classList.add('error');
                        field.classList.remove('success');
                        isValid = false;
                    } else {
                        field.classList.remove('error');
                        field.classList.add('success');
                    }
                } else {
                    field.classList.remove('error');
                    if (field.value.trim()) {
                        field.classList.add('success');
                    }
                }
            });
            
            if (isValid) {
                // Show success message
                const successMsg = form.querySelector('.form-success');
                if (successMsg) {
                    successMsg.classList.add('visible');
                    form.reset();
                    form.querySelectorAll('input, textarea').forEach(field => {
                        field.classList.remove('success');
                    });
                    
                    // Hide success after 5 seconds
                    setTimeout(() => {
                        successMsg.classList.remove('visible');
                    }, 5000);
                }
            }
        });
        
        // Real-time validation
        form.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('blur', () => {
                if (field.hasAttribute('required') && !field.value.trim()) {
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            field.addEventListener('input', () => {
                field.classList.remove('error');
            });
        });
    }
}

/**
 * Hero Slider
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero > .hero-dots .dot');
    let currentSlide = 0;
    let autoSlideInterval;
    const slideInterval = 6000; // 6 seconds per slide
    
    if (slides.length === 0) return;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentSlide = index;
    }
    
    // Function to go to next slide
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // Function to start auto-sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, slideInterval);
    }
    
    // Function to reset auto-slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        heroSection.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                const prev = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(prev);
            }
            resetAutoSlide();
        }
    }
    
    // Pause auto-slide on hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        heroSlider.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
    
    // Start auto-sliding
    startAutoSlide();
    
    // Show first slide initially
    showSlide(0);
}

/**
 * Service Modals
 */
function initServiceModals() {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    
    const modalContent = modal.querySelector('.modal-content');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    
    // Image data for each service (non-translatable)
    const modalImages = {
        cycle1: [
            'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&h=200&fit=crop'
        ],
        cycle2: [
            'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop'
        ],
        cycle3: [
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=200&fit=crop'
        ],
        secondary: [
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=200&fit=crop'
        ],
        higher: [
            'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=300&h=200&fit=crop'
        ],
        psychology: [
            'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=300&h=200&fit=crop',
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=200&fit=crop'
        ]
    };
    
    // Icon data for each service (non-translatable)
    const modalIcons = {
        cycle1: { icon: 'fas fa-apple-alt', color: 'orange' },
        cycle2: { icon: 'fas fa-book-open', color: 'blue' },
        cycle3: { icon: 'fas fa-microscope', color: 'purple' },
        secondary: { icon: 'fas fa-graduation-cap', color: 'pink' },
        higher: { icon: 'fas fa-university', color: 'cyan' },
        psychology: { icon: 'fas fa-brain', color: 'green' }
    };
    
    // Get current language translations
    function getTranslations() {
        const lang = localStorage.getItem('sabervirtual-lang') || 'pt';
        return translations[lang] || translations.pt;
    }
    
    // Generate modal HTML content
    function generateModalContent(serviceKey) {
        const t = getTranslations();
        const service = t.services[serviceKey];
        const images = modalImages[serviceKey];
        const iconData = modalIcons[serviceKey];
        
        if (!service) return '';
        
        const disciplinesHTML = (service.disciplines || []).map(d => 
            `<div class="modal-discipline"><i class="fas fa-check-circle"></i><span>${d}</span></div>`
        ).join('');
        
        const imagesHTML = images.map(img => 
            `<img src="${img}" alt="${service.modalTitle}" loading="lazy">`
        ).join('');
        
        // Check if this service has a custom services section (like psychology)
        const servicesTitle = service.servicesTitle || t.services.areasTitle;
        const servicesIntro = service.servicesIntro ? `<p class="modal-services-intro">${service.servicesIntro}</p>` : '';
        
        return `
            <div class="modal-header">
                <div class="modal-icon ${iconData.color}">
                    <i class="${iconData.icon}"></i>
                </div>
                <h2>${service.modalTitle}</h2>
                <p class="subtitle">${service.modalSubtitle}</p>
            </div>
            <div class="modal-body">
                <p class="modal-intro">${service.modalIntro}</p>
                <div class="modal-quote">${service.modalQuote}</div>
                
                <div class="modal-images">
                    ${imagesHTML}
                </div>
                
                <h3 class="modal-section-title">
                    <i class="fas fa-list-check"></i>
                    ${servicesTitle}
                </h3>
                ${servicesIntro}
                <div class="modal-disciplines">
                    ${disciplinesHTML}
                </div>
                
                <div class="modal-cta">
                    <a href="#contact" class="btn-primary" onclick="closeServiceModal()">
                        <i class="fas fa-envelope"></i>
                        ${t.services.contactUs}
                    </a>
                </div>
            </div>
        `;
    }
    
    // Open modal
    function openModal(serviceKey) {
        const content = generateModalContent(serviceKey);
        if (!content) return;
        
        modalContent.innerHTML = content;
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
    
    // Make closeModal available globally for the CTA button
    window.closeServiceModal = closeModal;
    
    // Event listeners for service cards
    document.querySelectorAll('.service-card[data-modal]').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceKey = card.getAttribute('data-modal');
            openModal(serviceKey);
        });
        
        // Make the whole card clickable with visual feedback
        card.style.cursor = 'pointer';
    });
    
    // Close modal events
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}