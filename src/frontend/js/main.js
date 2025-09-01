// Classic Slideshow with Enhanced Features
class ClassicSlideshow {
    constructor() {
        this.currentIndex = 0;
        this.slides = document.querySelector(".slides");
        this.totalSlides = 4;
        this.autoSlideInterval = null;
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        this.createNavigationDots();
        this.createArrowButtons();
        this.startAutoSlide();
        this.addEventListeners();
    }
    
    createNavigationDots() {
        const slider = document.querySelector(".slider");
        const dotsContainer = document.createElement("div");
        dotsContainer.className = "slide-dots";
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement("button");
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        
        slider.appendChild(dotsContainer);
    }
    
    createArrowButtons() {
        const slider = document.querySelector(".slider");
        
        const prevButton = document.createElement("button");
        prevButton.className = "slide-arrow slide-arrow-prev";
        prevButton.innerHTML = "❮";
        prevButton.addEventListener('click', () => this.previousSlide());
        
        const nextButton = document.createElement("button");
        nextButton.className = "slide-arrow slide-arrow-next";
        nextButton.innerHTML = "❯";
        nextButton.addEventListener('click', () => this.nextSlide());
        
        slider.appendChild(prevButton);
        slider.appendChild(nextButton);
    }
    
    slideShow() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        
        // Add transition effect
        this.slides.style.transition = "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        this.slides.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        
        this.updateDots();
        
        // Reset transition lock after animation
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800);
    }
    
    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex) return;
        
        this.isTransitioning = true;
        this.currentIndex = index;
        
        this.slides.style.transition = "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        this.slides.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        
        this.updateDots();
        this.restartAutoSlide();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800);
    }
    
    nextSlide() {
        this.goToSlide((this.currentIndex + 1) % this.totalSlides);
    }
    
    previousSlide() {
        this.goToSlide((this.currentIndex - 1 + this.totalSlides) % this.totalSlides);
    }
    
    updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => this.slideShow(), 4000);
    }
    
    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
    
    restartAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
    
    addEventListeners() {
        const slider = document.querySelector(".slider");
        
        // Pause on hover
        slider.addEventListener('mouseenter', () => this.stopAutoSlide());
        slider.addEventListener('mouseleave', () => this.startAutoSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) { // Minimum swipe distance
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        });
    }
}

// Enhanced smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    new ClassicSlideshow();
    
    // Smooth scroll for anchor links
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
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.help-box, .content-box').forEach(el => {
        observer.observe(el);
    });
    
    // Add loading animation completion
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});
