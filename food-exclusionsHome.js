        // JavaScript to toggle checkbox color to green
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const label = this.previousElementSibling;
                label.classList.toggle('checked', this.checked);
                if (this.checked) {
                    label.style.backgroundColor = "orange"; // Change the color to 
                } else {
                    label.style.backgroundColor = "#fff"; // Reset to default color
                }
            });
        });

const toggleButton = document.getElementById('toggle-section');
const sectionToShow = document.getElementById('section-to-show');
const image = document.getElementById('sticker-image');

toggleButton.addEventListener('click', function() {
    if (sectionToShow.style.display === 'none') {
        sectionToShow.style.display = 'block';
        sectionToShow.style.height = '0';
        sectionToShow.style.opacity = '0';
        sectionToShow.style.transition = 'height 0.9s ease-in, opacity 0.9s ease-in';
        setTimeout(() => {
            sectionToShow.style.height = 'auto';
            sectionToShow.style.opacity = '1';
        }, 0);

        image.style.display = 'none';
    } else {
        sectionToShow.style.height = '0';
        sectionToShow.style.opacity = '0';
        sectionToShow.style.transition = 'height 0.1s ease-out, opacity 0.1s ease-out';
        setTimeout(() => {
            sectionToShow.style.display = 'none';
        }, 300);

        image.style.display = 'block';
    }
});

        const continueButton = document.querySelector('button[type="submit"]'); // Changed button selection

        continueButton.addEventListener('click', (e) => {
                        e.preventDefault();
                 // Redirect to the second page
            window.location.href = 'profile.html';
        });
        