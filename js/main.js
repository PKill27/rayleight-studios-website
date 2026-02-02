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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const submitButton = this.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('form-message');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    messageDiv.style.display = 'none';
    
    // Form will submit to Formspree automatically
    // Formspree will handle the response
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Success
            messageDiv.className = 'mb-3 alert alert-success';
            messageDiv.textContent = 'Thank you! Your message has been sent successfully.';
            messageDiv.style.display = 'block';
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        } else {
            // Error
            messageDiv.className = 'mb-3 alert alert-danger';
            messageDiv.textContent = 'Oops! There was a problem sending your message. Please try again.';
            messageDiv.style.display = 'block';
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }).catch(error => {
        // Network error
        messageDiv.className = 'mb-3 alert alert-danger';
        messageDiv.textContent = 'Network error. Please check your connection and try again.';
        messageDiv.style.display = 'block';
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
    
    // Prevent default form submission since we're using fetch
    e.preventDefault();
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.game-card, .team-card, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
