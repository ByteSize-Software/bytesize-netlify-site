// Rotating text for hero section
const industries = [ 'HVAC', 'Plumbing', 'Electrical', 'Contracting', 'Construction', 'Field Service', 'Security', 'Low Voltage'];
const rotatingTextElement = document.querySelector('.rotating-text');
let currentIndex = 1; // Start at 1 so first rotation shows HVAC, not Plumbing again

function rotateText() {
    if (rotatingTextElement) {
        rotatingTextElement.style.opacity = '0';
        setTimeout(() => {
            rotatingTextElement.textContent = industries[currentIndex];
            rotatingTextElement.style.opacity = '1';
            currentIndex = (currentIndex + 1) % industries.length;
        }, 300); // Half of transition time for smooth fade
    }
}

// Start rotating text
if (rotatingTextElement) {
    rotatingTextElement.textContent = industries[0]; // Initial display
    setInterval(rotateText, 1500);
}

// Smooth scroll for navigation links
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

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this to a backend
        // For now, we'll just show an alert
        alert('Thank you for your interest! We\'ll be in touch soon.');
        contactForm.reset();
    });
}

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

// Observe all solution cards and comparison cards
document.querySelectorAll('.solution-card, .comparison-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});


