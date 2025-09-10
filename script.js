// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

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

// Header scroll effect
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('.header');
//     if (window.scrollY > 100) {
//         header.style.background = 'rgba(255, 255, 255, 0.98)';
//         header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
//     } else {
//         header.style.background = 'rgba(255, 255, 255, 0.95)';
//         header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
//     }
// });

// Scroll animations (reduced intensity)
const observerOptions = {
    threshold: 0.05, // Lower threshold for gentler trigger
    rootMargin: '0px 0px -10px 0px' // Less offset for subtler effect
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        showNotification('Thank you! Your message has been sent.', 'success');
        this.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Add notification styles to head
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    .notification-message {
        font-weight: 500;
    }
`;
document.head.appendChild(notificationStyles);

// Typing effect helpers
function getPlainTextFromHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

// Type plain text first to avoid showing partial HTML tags, then restore HTML
function typeWriterHtml(element, originalHtml, speed = 100) {
    const plain = getPlainTextFromHtml(originalHtml);
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < plain.length) {
            element.textContent = plain.slice(0, i + 1);
            i++;
            setTimeout(type, speed);
        } else {
            // Restore original HTML (with highlight span etc.) after typing completes
            element.innerHTML = originalHtml;
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalHtml = heroTitle.innerHTML;
        // If the title contains HTML (e.g., highlight span), use safe HTML typing.
        if (heroTitle.children.length > 0) {
            typeWriterHtml(heroTitle, originalHtml, 50);
        } else {
            // Fallback: plain text typing
            const text = heroTitle.textContent;
            typeWriterHtml(heroTitle, text, 50);
        }
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyles = document.createElement('style');
loadingStyles.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
    }
`;
document.head.appendChild(loadingStyles);

// Parallax effect for hero section (disabled on small screens)
// Parallax effect for hero section (reduced intensity)
function handleParallax() {
    const heroSection = document.querySelector('.home-section');
    if (!heroSection) return;
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    if (isSmallScreen) {
        heroSection.style.transform = 'none';
        window.removeEventListener('scroll', parallaxScrollHandler);
        return;
    }
    window.addEventListener('scroll', parallaxScrollHandler);
}

function parallaxScrollHandler() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.home-section');
    if (heroSection) {
        // Reduce the parallax effect by lowering the multiplier
        const rate = scrolled * -0.15; // was -0.5, now much gentler
        heroSection.style.transform = `translateY(${rate}px)`;
    }
}

handleParallax();
window.addEventListener('resize', handleParallax);

// Add some interactive hover effects (reduced on touch/small screens)
function setupHoverEffects() {
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    document.querySelectorAll('.skill-item, .project-card, .stat').forEach(item => {
        item.style.willChange = 'transform';
        item.onmouseenter = null;
        item.onmouseleave = null;
        if (!isSmallScreen) {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'none';
            });
        } else {
            // Ensure no transform persists on small screens
            item.style.transform = 'none';
        }
    });
}

setupHoverEffects();
window.addEventListener('resize', setupHoverEffects);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: none;
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

<<<<<<< HEAD
// Add focus management for accessibility
=======
// // Add focus management for accessibility
>>>>>>> 4f414bb047d80d2acfaf8e3cfcfef30776874f3a
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('focus', function() {
//         this.style.outline = '2px solid #000000';
//         this.style.outlineOffset = '2px';
//     });
    
//     link.addEventListener('blur', function() {
//         this.style.outline = 'none';
//     });
// });

console.log('Portfolio website loaded successfully! 🚀');
