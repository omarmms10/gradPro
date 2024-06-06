// exerciseChoice.js

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', () => {
            // Remove the 'selected' class from all options
            options.forEach(option => option.classList.remove('selected'));

            // Add the 'selected' class to the clicked option
            option.classList.add('selected');

            // Wait for 1 second (1000 milliseconds) and then redirect to "placeExcercise.html"
            setTimeout(() => {
                window.location.href = 'ExcerModel.html';
            }, 1000);
        });
    });
});
