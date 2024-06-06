document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('result.html')) {
        // This code runs on the second page (result.html)
        const targets = document.getElementById('targets');

        // Retrieve the calculated values from localStorage
        const calories = localStorage.getItem('calories');
        const protein = localStorage.getItem('protein');
        const carbs = localStorage.getItem('carbs');
        const fats = localStorage.getItem('fats');

        // Display the results on the second page
        targets.innerHTML = `
            <p> ${Math.round(calories)} Calories per day</p>
            <p>At least ${Math.round(protein)} Proteins</p>
            <p>At most ${Math.round(carbs)} Carbs</p>
            <p>At least ${Math.round(fats)} Fats</p>
        `;
    } else {
        // This code runs on the first page (index.html)

        const profileForm = document.getElementById('profile-form');
        const continueButton = document.querySelector('button[type="submit"]');

        continueButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Get user input
            const gender = profileForm.querySelector('input[name="gender"]:checked').value;
            const age = parseInt(profileForm.age.value);
            const weight = parseFloat(profileForm.weight.value);
            const height = parseFloat(profileForm.height.value);
            const activityLevel = parseFloat(profileForm.activity.value);
            const goal = profileForm.querySelector('input[name="goal"]:checked').value;
            const bodyFat = profileForm.querySelector('input[name="bodyFat"]:checked').value;

            // Validate Age, Weight, and Height
            if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
                displayErrorMessage('Please fill in Age, Weight, and Height with valid values.');
                return;
            }

            // Rest of your JavaScript code
            // Perform calorie and macronutrient calculations based on goal and body fat
            const calories = calculateCalories(gender, age, weight, height, activityLevel, goal, bodyFat);
            const protein = calculateProtein(weight, goal);
            const carbs = calculateCarbs(calories, goal);
            const fats = calculateFats(calories, goal);

            // Store the calculated values in localStorage
            localStorage.setItem('calories', calories);
            localStorage.setItem('protein', protein);
            localStorage.setItem('carbs', carbs);
            localStorage.setItem('fats', fats);

            // Redirect to the second page
            window.location.href = 'result.html';
        });

        // Rest of your JavaScript code
    }
});
function displayErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}



    function calculateCalories(gender, age, weight, height, activityLevel, goal, bodyFat) {
    let bmr;
    
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const tdee = bmr * activityLevel;

    let calories;

    if (goal === 'Lose Fat') {
        calories = tdee - 500; // Create a calorie deficit for fat loss
    } else if (goal === 'Build Muscle') {
        calories = tdee + 500; // Create a calorie surplus for muscle gain
    } else {
        calories = tdee; // Maintain current weight
    }

    // Adjust calories based on body fat preference
    if (bodyFat === 'Low') {
        calories -= 200; // Slightly lower calories for lower body fat
    } else if (bodyFat === 'High') {
        calories += 200; // Slightly higher calories for higher body fat

}
    return calories;

}

function calculateProtein(weight, goal) {
    let protein;
    
    if (goal === 'Build Muscle') {
        protein = weight * 3.5; // Higher protein intake for muscle gain
    } else {
        protein = weight * 2.0; // Standard protein intake
    }

    return protein;
}

function calculateCarbs(calories, goal) {
    let carbs;
    
    if (goal === 'Build Muscle') {
        carbs = (calories * 0.5) / 4; // More carbs for muscle gain
    } else {
        carbs = (calories * 0.45) / 4; // Balanced carbs for other goals
    }

    return carbs;
}

function calculateFats(calories, goal) {
    let fats;

    if (goal === 'Lose Fat') {
        fats = (calories * 0.25) / 9; // Lower fats for fat loss
    } else {
        fats = (calories * 0.3) / 9; // Standard fats for other goals
    }

    return fats;
} 

// Get references to the links and the hidden paragraphs by their IDs
const toggleLinkFats = document.getElementById('toggle-section-fats');
const hiddenParagraphFats = document.getElementById('hidden-paragraph-fats');

// Add a click event listener to the "fats" link
toggleLinkFats.addEventListener('click', function () {
    toggleHiddenParagraph(hiddenParagraphFats);
});

// Function to toggle a hidden paragraph
function toggleHiddenParagraph(hiddenParagraph) {
    if (hiddenParagraph.style.display === 'none' || hiddenParagraph.style.display === '') {
        hiddenParagraph.style.display = 'block';
    } else {
        hiddenParagraph.style.display = 'none';
    }
}

function updateDynamicImage() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var bodyFat = document.querySelector('input[name="bodyFat"]:checked').value;
    var img = document.getElementById("dynamicImage");

    // Define a map of image paths based on gender and body fat level
    var imagePaths = {
        male: {
            Low: "imgs/menWomen/man/good-body.png",
            Medium: "imgs/menWomen/man/medium-body.png",
            High: "imgs/menWomen/man/fat-body.png"
        },
        female: {
            Low: "imgs/menWomen/women/good-body.png",
            Medium: "imgs/menWomen/women/medium-body.png",
            High: "imgs/menWomen/women/fat-body.png"
        }
    };

    // Construct the image path based on user selections
    var imagePath = imagePaths[gender][bodyFat];

    // Update the src attribute of the image element
    img.src = imagePath;
}

// Call the function initially to set the default image
updateDynamicImage();

// Add event listeners to detect changes in gender and body fat selections
document.querySelectorAll('input[name="gender"]').forEach(function(elem) {
    elem.addEventListener("change", updateDynamicImage);
});

document.querySelectorAll('input[name="bodyFat"]').forEach(function(elem) {
    elem.addEventListener("change", updateDynamicImage);
});

