// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    
    document.querySelector('.navbar').insertBefore(hamburger, navLinks);
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        }
    });
}

// Destination Cards Animation
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Search Functionality
const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-btn');

if (searchBox && searchBtn) {
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchBox.value.trim();
        if (searchTerm) {
            // Redirect to search results page with query parameter
            window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
        }
    });

    searchBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Image Lazy Loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Add to Cart Animation
function addToCartAnimation(element) {
    element.classList.add('added-to-cart');
    setTimeout(() => {
        element.classList.remove('added-to-cart');
    }, 1000);
}

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .added-to-cart {
        animation: addToCart 1s ease;
    }

    @keyframes addToCart {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    .error {
        border-color: red !important;
    }

    .sticky {
        position: fixed;
        top: 0;
        width: 100%;
        background: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
        
        .nav-links.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .hamburger {
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--primary-color);
        }
    }
`;
document.head.appendChild(style); 