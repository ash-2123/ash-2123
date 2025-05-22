document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Apply saved theme on page load (important for new pages)
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }

        // Add event listener only if the button exists on this page
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            });
        } else {
            console.warn("Theme toggle button not found on this page."); // Use warn instead of error if it's optional
        }
    });

    // Check for saved theme preference on load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    
    document.addEventListener('DOMContentLoaded', function () {
        // Get a reference to the button using its ID

    });

    const navigateButton = document.getElementById('navigateButton');

    // Add an event listener to the button
    if (navigateButton) { // Ensure the button exists before adding an event listener
        navigateButton.addEventListener('click', function () {
            // Navigate to the new page
            window.location.href = 'cat.html';

        });
    }
    const back = document.getElementById('back');
    // Add an event listener to the button
    if (back) { // Ensure the button exists before adding an event listener
        back.addEventListener('click', function () {
            // Navigate to the new page
            window.location.href = 'index.html';

        });
    }
});