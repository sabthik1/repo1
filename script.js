// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initMatchCards();
    initScheduleTabs();
    initPlayerControls();
    initNewsletterForm();
    initSmoothScrolling();
    initLiveUpdates();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Match cards functionality
function initMatchCards() {
    const watchButtons = document.querySelectorAll('.btn-watch');
    const reminderButtons = document.querySelectorAll('.btn-reminder');
    
    // Watch button functionality
    watchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const matchCard = this.closest('.match-card');
            const teams = matchCard.querySelector('.match-teams');
            const teamNames = teams.querySelectorAll('.team span');
            const matchTitle = `${teamNames[0].textContent} vs ${teamNames[1].textContent}`;
            
            // Scroll to streaming section
            const streamingSection = document.getElementById('streaming-player');
            streamingSection.scrollIntoView({ behavior: 'smooth' });
            
            // Update player title
            const playerTitle = document.querySelector('.player-placeholder span');
            if (playerTitle) {
                playerTitle.textContent = matchTitle;
            }
            
            // Show notification
            showNotification(`Starting live stream for ${matchTitle}`);
        });
    });
    
    // Reminder button functionality
    reminderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const matchCard = this.closest('.match-card');
            const teams = matchCard.querySelector('.match-teams');
            const teamNames = teams.querySelectorAll('.team span');
            const matchTitle = `${teamNames[0].textContent} vs ${teamNames[1].textContent}`;
            
            // Toggle button state
            if (this.textContent === 'Set Reminder') {
                this.textContent = 'Reminder Set';
                this.style.background = '#047857';
                showNotification(`Reminder set for ${matchTitle}`);
            } else {
                this.textContent = 'Set Reminder';
                this.style.background = '#059669';
                showNotification(`Reminder removed for ${matchTitle}`);
            }
        });
    });
}

// Schedule tabs functionality
function initScheduleTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update schedule content based on tab
            updateScheduleContent(this.textContent);
        });
    });
}

// Update schedule content based on selected tab
function updateScheduleContent(tabName) {
    const scheduleList = document.querySelector('.schedule-list');
    
    // Sample data for different tabs
    const scheduleData = {
        'Today': [
            {
                date: 'Today',
                time: '8:00 PM IST',
                teams: 'West Indies vs Bangladesh',
                venue: 'Kensington Oval, Barbados'
            },
            {
                date: 'Today',
                time: '10:30 PM IST',
                teams: 'England vs South Africa',
                venue: 'Lord\'s, London'
            }
        ],
        'Tomorrow': [
            {
                date: 'Tomorrow',
                time: '2:30 PM IST',
                teams: 'Sri Lanka vs Afghanistan',
                venue: 'R. Premadasa Stadium, Colombo'
            },
            {
                date: 'Tomorrow',
                time: '6:00 PM IST',
                teams: 'Pakistan vs New Zealand',
                venue: 'Gaddafi Stadium, Lahore'
            }
        ],
        'This Week': [
            {
                date: 'Wednesday',
                time: '3:00 PM IST',
                teams: 'Australia vs India',
                venue: 'MCG, Melbourne'
            },
            {
                date: 'Friday',
                time: '7:30 PM IST',
                teams: 'England vs West Indies',
                venue: 'The Oval, London'
            }
        ]
    };
    
    const data = scheduleData[tabName] || scheduleData['Today'];
    
    // Update schedule list
    scheduleList.innerHTML = data.map(match => `
        <div class="schedule-item">
            <div class="match-time">
                <span class="date">${match.date}</span>
                <span class="time">${match.time}</span>
            </div>
            <div class="match-details">
                <div class="teams">
                    <span>${match.teams}</span>
                </div>
                <div class="venue">${match.venue}</div>
            </div>
            <button class="btn-reminder">Set Reminder</button>
        </div>
    `).join('');
    
    // Reinitialize reminder buttons
    initMatchCards();
}

// Player controls functionality
function initPlayerControls() {
    const playButton = document.querySelector('.control-btn i.fa-play');
    const volumeButton = document.querySelector('.control-btn i.fa-volume-up');
    const expandButton = document.querySelector('.control-btn i.fa-expand');
    const settingsButton = document.querySelector('.control-btn i.fa-cog');
    const volumeSlider = document.querySelector('.volume-slider input');
    
    // Play/Pause functionality
    if (playButton) {
        playButton.addEventListener('click', function() {
            if (this.classList.contains('fa-play')) {
                this.classList.remove('fa-play');
                this.classList.add('fa-pause');
                showNotification('Stream started');
            } else {
                this.classList.remove('fa-pause');
                this.classList.add('fa-play');
                showNotification('Stream paused');
            }
        });
    }
    
    // Volume functionality
    if (volumeButton && volumeSlider) {
        volumeButton.addEventListener('click', function() {
            if (this.classList.contains('fa-volume-up')) {
                this.classList.remove('fa-volume-up');
                this.classList.add('fa-volume-mute');
                volumeSlider.value = 0;
                showNotification('Audio muted');
            } else {
                this.classList.remove('fa-volume-mute');
                this.classList.add('fa-volume-up');
                volumeSlider.value = 80;
                showNotification('Audio unmuted');
            }
        });
        
        volumeSlider.addEventListener('input', function() {
            if (this.value == 0) {
                volumeButton.classList.remove('fa-volume-up');
                volumeButton.classList.add('fa-volume-mute');
            } else {
                volumeButton.classList.remove('fa-volume-mute');
                volumeButton.classList.add('fa-volume-up');
            }
        });
    }
    
    // Fullscreen functionality
    if (expandButton) {
        expandButton.addEventListener('click', function() {
            const videoPlayer = document.querySelector('.video-player');
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.webkitRequestFullscreen) {
                videoPlayer.webkitRequestFullscreen();
            } else if (videoPlayer.msRequestFullscreen) {
                videoPlayer.msRequestFullscreen();
            }
        });
    }
    
    // Settings functionality
    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            showNotification('Settings panel opened');
        });
    }
}

// Newsletter form functionality
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                showNotification('Successfully subscribed to newsletter!');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for all internal links
function initSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Live updates simulation
function initLiveUpdates() {
    // Simulate live score updates
    setInterval(() => {
        updateLiveScores();
    }, 30000); // Update every 30 seconds
    
    // Simulate live stats updates
    setInterval(() => {
        updateLiveStats();
    }, 15000); // Update every 15 seconds
}

// Update live scores
function updateLiveScores() {
    const scores = document.querySelectorAll('.score');
    scores.forEach(score => {
        // Simulate score changes
        if (Math.random() > 0.7) {
            const currentScore = score.textContent;
            const parts = currentScore.split(':');
            if (parts.length === 2) {
                const team = parts[0];
                const scorePart = parts[1].split('(')[0];
                const overs = parts[1].match(/\(([^)]+)\)/)[1];
                
                // Simulate score increase
                const scoreNumbers = scorePart.split('/');
                const runs = parseInt(scoreNumbers[0]) + Math.floor(Math.random() * 3);
                const wickets = parseInt(scoreNumbers[1]) + (Math.random() > 0.8 ? 1 : 0);
                
                if (wickets < 10) {
                    score.textContent = `${team}: ${runs}/${wickets} (${overs})`;
                }
            }
        }
    });
}

// Update live stats
function updateLiveStats() {
    const statValues = document.querySelectorAll('.stat .value');
    statValues.forEach(stat => {
        if (Math.random() > 0.8) {
            const currentValue = parseFloat(stat.textContent);
            const change = (Math.random() - 0.5) * 2;
            const newValue = Math.max(0, currentValue + change);
            stat.textContent = newValue.toFixed(1);
        }
    });
}

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#dc2626' : '#059669'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add loading animation for buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-watch, .btn-primary, .btn-secondary')) {
        const button = e.target;
        const originalText = button.textContent;
        
        button.textContent = 'Loading...';
        button.style.pointerEvents = 'none';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.pointerEvents = 'auto';
        }, 2000);
    }
});

// Add hover effects for interactive elements
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('.match-card, .schedule-item')) {
        e.target.style.transform = 'translateY(-5px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('.match-card, .schedule-item')) {
        e.target.style.transform = 'translateY(0)';
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(function() {
    // Any scroll-based functionality can be added here
}, 10));