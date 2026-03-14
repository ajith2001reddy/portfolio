// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .reveal-delay, .reveal-delay-2').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Blob Pulse (optional extra polish)
const blob = document.querySelector('.blob');
if (blob) {
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        blob.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
}

// Copy Email functionality
const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach(link => {
    if (link.href.includes('mailto:')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const email = link.textContent;
            navigator.clipboard.writeText(email).then(() => {
                const originalText = link.textContent;
                link.textContent = 'Email Copied!';
                link.style.color = 'var(--accent)';
                setTimeout(() => {
                    link.textContent = originalText;
                    link.style.color = '';
                }, 2000);
            });
        });
    }
});

// Scroll Top Logic
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
