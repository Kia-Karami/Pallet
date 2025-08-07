// Main JavaScript file for Pallet website

// DOM Content Loaded event listener
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pallet website loaded successfully!');
    
    // Initialize the website
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    setupCircleClick();
}

// Setup circle click functionality
function setupCircleClick() {
    const circle = document.querySelector('.bottom-circle');
    
    if (circle) {
        circle.addEventListener('click', function() {
            console.log('Circle clicked!');
            const secondSection = document.querySelector('.second-section');
            if (secondSection) {
                secondSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
}