// Data for the pie chart (without calories)
var data = {
    labels: ['Protein', 'Carbohydrates', 'Fat'],
    datasets: [{
        data: [localStorage.getItem('protein'), localStorage.getItem('carbs'), localStorage.getItem('fats')],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
    }]
};

// Configuration options
var options = {
    responsive: true,
    maintainAspectRatio: false
};

// Get the canvas element
var ctx = document.getElementById('myPieChart').getContext('2d');

// Create the pie chart
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

// Display the calculated values (excluding calories)
const totalCaloriesDiv = document.getElementById('totalCalories');
totalCaloriesDiv.innerHTML = `
    <h2>Total Calories per day: ${Math.round(localStorage.getItem('calories'))}</h2>
`;
