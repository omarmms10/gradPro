const goalBoxes = document.querySelectorAll('.goal-box');

goalBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove the 'selected' class from all boxes
        goalBoxes.forEach(box => box.classList.remove('selected'));

        // Add the 'selected' class to the clicked box
        box.classList.add('selected');

        // Wait for 5 seconds (5000 milliseconds) and then redirect to "next.html"
        setTimeout(() => {
            window.location.href = 'placeExcercise.html';
        }, 1000);
    });
});
