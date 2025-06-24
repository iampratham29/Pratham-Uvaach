
// Language Toggle Functionality
const langEn = document.getElementById('langEn');
const langMr = document.getElementById('langMr');
const enElements = document.querySelectorAll('.lang-en');
const mrElements = document.querySelectorAll('.lang-mr');

function setLanguage(lang) {
    if (lang === 'en') {
        langEn.classList.add('active-lang', 'bg-yellow-400', 'text-black');
        langEn.classList.remove('text-gray-600');
        langMr.classList.remove('active-lang', 'bg-yellow-400', 'text-black');
        langMr.classList.add('text-gray-600');
        
        enElements.forEach(el => el.classList.remove('content-hidden'));
        mrElements.forEach(el => el.classList.add('content-hidden'));
    } else {
        langMr.classList.add('active-lang', 'bg-yellow-400', 'text-black');
        langMr.classList.remove('text-gray-600');
        langEn.classList.remove('active-lang', 'bg-yellow-400', 'text-black');
        langEn.classList.add('text-gray-600');
        
        mrElements.forEach(el => el.classList.remove('content-hidden'));
        enElements.forEach(el => el.classList.add('content-hidden'));
    }
}

langEn.addEventListener('click', () => setLanguage('en'));
langMr.addEventListener('click', () => setLanguage('mr'));

// Initialize with English
setLanguage('en');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon. / तुमच्या संदेशाबद्दल धन्यवाद! मी लवकरच तुमच्याशी संपर्क साधेन.');
});

// Add active nav link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-yellow-600');
        link.classList.add('text-gray-700');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-yellow-600');
            link.classList.remove('text-gray-700');
        }
    });
});

// Add typing effect to hero section
let heroTextVisible = false;
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !heroTextVisible) {
            heroTextVisible = true;
            entry.target.querySelectorAll('.fade-in').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 200);
            });
        }
    });
});

heroObserver.observe(document.getElementById('home'));
