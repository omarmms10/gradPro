const placeBoxes = document.querySelectorAll('.excercise-place');

placeBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove the 'selected' class from all boxes
        placeBoxes.forEach(box => box.classList.remove('selected'));

        // Add the 'selected' class to the clicked box
        box.classList.add('selected');

        // Wait for 5 seconds (5000 milliseconds) and then redirect to "program.html"
        setTimeout(() => {
            window.location.href = 'program.html';
        }, 1000);
    });
});
