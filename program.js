const programOptions = document.querySelectorAll('.program-option');

programOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove the 'selected' class from all options
        programOptions.forEach(option => option.classList.remove('selected'));

        // Add the 'selected' class to the clicked option
        option.classList.add('selected');

        // Get the ID of the selected program option
        const selectedOptionId = option.id;

        // Redirect based on the selected program option
        switch (selectedOptionId) {
            case 'push-pull-leg':
                window.location.href = 'ppl.html';
                break;
            case 'five-days-muscles':
                window.location.href = '5dayExce.html';
                break;
            case 'cardio':
                window.location.href = 'cardio.html';
                break;
            default:
                // If none of the above, do nothing
                break;
        }
    });
});
