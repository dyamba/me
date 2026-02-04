/* ===================================
   unsalaslan.me — Gamified Resume JS
   =================================== */

// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const achievementToast = document.getElementById('achievement-toast');
const achievementName = document.querySelector('.achievement-name');
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const easterEggModal = document.getElementById('easter-egg-modal');
const modalClose = document.querySelector('.modal-close');
const particles = document.getElementById('particles');

// State
let achievementsUnlocked = new Set();
let konamiProgress = 0;
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initScrollAnimations();
    initStatusBars();
    initCounters();
    initNavigation();
    initKonamiCode();
    initParticles();
    initAchievementHovers();
    logConsoleMessage();
});

// Loading Screen
function initLoadingScreen() {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
        
        // Trigger hero animations after loading
        setTimeout(() => {
            triggerHeroAnimations();
        }, 300);
    }, 2500);
}

// Hero Animations
function triggerHeroAnimations() {
    // Animate status bars
    const barFills = document.querySelectorAll('.bar-fill');
    barFills.forEach(bar => {
        const value = bar.dataset.value || 100;
        bar.style.width = value + '%';
    });
    
    // Animate ability bars
    const abilityFills = document.querySelectorAll('.ability-fill');
    abilityFills.forEach(bar => {
        const value = bar.dataset.value || 100;
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 500);
    });
}

// Scroll Animations with IntersectionObserver
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Check for achievement triggers
                checkAchievements(entry.target);
                
                // Animate ability bars when visible
                if (entry.target.classList.contains('ability-card')) {
                    const bar = entry.target.querySelector('.ability-fill');
                    if (bar) {
                        const value = bar.dataset.value || 100;
                        bar.style.width = value + '%';
                    }
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => observer.observe(el));
}

// Status Bars Animation
function initStatusBars() {
    const statusBars = document.getElementById('status-bars');
    if (!statusBars) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.bar-fill');
                fills.forEach((fill, index) => {
                    setTimeout(() => {
                        const value = fill.dataset.value || 100;
                        fill.style.width = value + '%';
                    }, index * 200);
                });
            }
        });
    });
    
    observer.observe(statusBars);
}

// Number Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count) || 0;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Navigation
function initNavigation() {
    if (!navToggle || !mobileMenu) return;
    
    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Achievement System
function checkAchievements(element) {
    const sectionMap = {
        'quest-log': { name: 'Quest Explorer', icon: '⚔️' },
        'abilities': { name: 'Skill Seeker', icon: '⭐' },
        'raids': { name: 'Raid Inspector', icon: '🏰' },
        'achievements': { name: 'Trophy Hunter', icon: '🏆' },
        'origin': { name: 'Lore Master', icon: '📜' },
        'side-quests': { name: 'Side Quest Fan', icon: '🎮' },
        'contact': { name: 'Connection Initiated', icon: '🤝' }
    };
    
    const section = element.closest('section');
    if (!section) return;
    
    const sectionId = section.id;
    const achievement = sectionMap[sectionId];
    
    if (achievement && !achievementsUnlocked.has(sectionId)) {
        achievementsUnlocked.add(sectionId);
        showAchievementToast(achievement.name, achievement.icon);
    }
}

function showAchievementToast(name, icon = '🏆') {
    if (!achievementToast || !achievementName) return;
    
    const iconEl = achievementToast.querySelector('.achievement-icon');
    if (iconEl) iconEl.textContent = icon;
    achievementName.textContent = name;
    
    achievementToast.classList.add('show');
    
    setTimeout(() => {
        achievementToast.classList.remove('show');
    }, 3000);
}

// Achievement Card Hovers
function initAchievementHovers() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.dataset.achievement;
            if (name) {
                showAchievementToast(`"${name}" inspected!`, card.querySelector('.achievement-badge')?.textContent || '🏆');
            }
        });
    });
}

// Konami Code Easter Egg
function initKonamiCode() {
    document.addEventListener('keydown', (e) => {
        if (e.code === konamiCode[konamiProgress]) {
            konamiProgress++;
            
            if (konamiProgress === konamiCode.length) {
                activateEasterEgg();
                konamiProgress = 0;
            }
        } else {
            konamiProgress = 0;
        }
    });
    
    // Modal close handlers
    if (modalClose) {
        modalClose.addEventListener('click', closeEasterEggModal);
    }
    
    if (easterEggModal) {
        easterEggModal.addEventListener('click', (e) => {
            if (e.target === easterEggModal) {
                closeEasterEggModal();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && easterEggModal?.classList.contains('active')) {
            closeEasterEggModal();
        }
    });
}

function activateEasterEgg() {
    if (easterEggModal) {
        easterEggModal.classList.add('active');
        showAchievementToast('Secret Hunter!', '🎮');
    }
}

function closeEasterEggModal() {
    if (easterEggModal) {
        easterEggModal.classList.remove('active');
    }
}

// Floating Particles
function initParticles() {
    if (!particles) return;
    
    for (let i = 0; i < 20; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    
    const size = 2 + Math.random() * 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    particles.appendChild(particle);
}

// Console Message Easter Egg
function logConsoleMessage() {
    const styles = [
        'color: #00d4aa',
        'font-size: 14px',
        'font-family: "JetBrains Mono", monospace',
        'padding: 10px'
    ].join(';');
    
    console.log('%c' + `
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🎮 Welcome, fellow developer!                          ║
║                                                          ║
║   You found the console Easter egg!                      ║
║   Want to see the source code?                           ║
║   → github.com/dyamba                                    ║
║                                                          ║
║   Psst... try the Konami Code on the page!              ║
║   ↑↑↓↓←→←→BA                                            ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    `, styles);
    
    console.log('%cHint: %cType %chire("Ünsal Aslan")%c in the console 😉', 
        'color: #ffd700; font-weight: bold;',
        'color: #a1a1a6;',
        'color: #00d4aa; font-family: monospace;',
        'color: #a1a1a6;'
    );
}

// Console Command Easter Egg
window.hire = function(name) {
    if (name && name.toLowerCase().includes('ünsal') || name && name.toLowerCase().includes('unsal')) {
        console.log('%c✓ Great choice! Redirecting to contact...', 'color: #27ca40; font-size: 16px;');
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        showAchievementToast('Developer Hired!', '🤝');
        return '🎮 Player 2 has joined the game!';
    } else {
        console.log('%c❌ Developer not found. Try: hire("Ünsal Aslan")', 'color: #ff4757;');
        return 'Developer not found in the database.';
    }
};

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const rect = hero.getBoundingClientRect();
    if (e.clientY > rect.bottom) return;
    
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;
    
    const characterCard = document.querySelector('.character-card');
    if (characterCard) {
        characterCard.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});

// Typing effect for terminal
function typeText(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect after load
setTimeout(() => {
    const typingCommand = document.getElementById('typing-command');
    if (typingCommand) {
        typingCommand.classList.remove('typing');
        setTimeout(() => {
            typingCommand.classList.add('typing');
        }, 100);
    }
}, 3000);

// Add smooth reveal for navbar on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar?.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar?.classList.contains('scroll-down')) {
        navbar?.classList.remove('scroll-up');
        navbar?.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar?.classList.contains('scroll-down')) {
        navbar?.classList.remove('scroll-down');
        navbar?.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});
