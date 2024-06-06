const experienceBoxes = document.querySelectorAll('.experience-box');

experienceBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove the 'selected' class from all boxes
        experienceBoxes.forEach(box => box.classList.remove('selected'));

        // Add the 'selected' class to the clicked box
        box.classList.add('selected');

        // Wait for 5 seconds (5000 milliseconds) and then redirect to "next.html"
        setTimeout(() => {
            window.location.href = 'muscleGoal.html';
        }, 1000);
    });
});
