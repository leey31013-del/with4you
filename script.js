// Smooth Scroll implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .avatar-mockup, .item-card').forEach((el) => {
    el.style.opacity = '0'; // Hide initially
    el.classList.add('animate-slide-up'); // Add class but control via CSS if needed, 
    // actually let's just use the observer to trigger animation class
    el.classList.remove('animate-slide-up');
    observer.observe(el);
});
