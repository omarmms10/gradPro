// Select all list items
const listItems = document.querySelectorAll('ul li');

// Add click listener to each list item
listItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove selected class from all list items
        listItems.forEach(li => {
            li.classList.remove('selected');
        });
        // Add selected class to the clicked list item
        this.classList.add('selected');
    });
});


   const continueButton = document.querySelector('button[type="submit"]'); // Changed button selection

        continueButton.addEventListener('click', (e) => {
                        e.preventDefault();
                 // Redirect to the second page
            window.location.href = 'food-exclusions.html';
        });