document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        // Optionally, save the user's preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for saved theme preference on load
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    // Interactive Text
    const interactiveText = document.getElementById('interactive-text');
    const texts = [
        "Click this text to change it!",
        "You clicked me! Awesome!",
        "Isn't JavaScript cool?",
        "Keep clicking for more!",
        "Hello from the DOM!"
    ];
    let textIndex = 0;

    interactiveText.addEventListener('click', () => {
        textIndex = (textIndex + 1) % texts.length;
        interactiveText.textContent = texts[textIndex];
    });
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