// Function to toggle sidebar visibility
var buttons = document.getElementsByClassName("buttonU");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var sidebar = document.getElementById("sidebar");
        if (sidebar.style.right === "-180px" || sidebar.style.right === "") {
            sidebar.style.right = "0";
        } else {
            sidebar.style.right = "-180px";
        }
    });
}


// Function to toggle sidebar visibility
var buttons = document.getElementsByClassName("buttonU");
var sidebar = document.getElementById("sidebar");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        sidebar.classList.toggle("sidebar-visible");
    });
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("editFoodPreferencesBtn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of links

        var submenu = document.getElementById("foodPreferencesSubmenu");
        if (submenu.style.display === "none" || submenu.style.display === "") {
            submenu.style.display = "block";
        } else {
            submenu.style.display = "none";
        }
    });
});



//Dynamic SideBar
/*document.addEventListener("DOMContentLoaded", function() {
    // Get the button and submenu links
    const editFoodPreferencesBtn = document.getElementById("editFoodPreferencesBtn");
    const submenuLinks = document.querySelectorAll(".submenu-link");

    // Attach click event listener to each submenu link
    submenuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            const url = this.getAttribute("href"); // Get the href attribute

            // Fetch content from the URL
            fetch(url)
                .then(response => response.text()) // Get the response as text
                .then(html => {
                    // Set the fetched HTML as the content of the main area
                    document.getElementById("mainContent").innerHTML = html;
                })
                .catch(error => {
                    console.error("Error fetching content:", error);
                });
        });
    });

    // Optionally, you can handle the "Edit Food Preferences" button separately if it's supposed to do something different.
    // For example, if it opens a modal or a separate page.
    editFoodPreferencesBtn.addEventListener("click", function() {
        // Add your logic here
        console.log("Edit Food Preferences button clicked");
    });

    // Event delegation for list items
    const list = document.querySelector('ul');
    list.addEventListener('click', function(event) {
        const clickedListItem = event.target.closest('li');
        if (!clickedListItem) return;

        // Remove selected class from all list items
        list.querySelectorAll('li').forEach(li => {
            li.classList.remove('selected');
        });

        // Add selected class to the clicked list item
        clickedListItem.classList.add('selected');
    });
});*/

// Function to load page content into the main section
        function loadPage(url) {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('mainContent').innerHTML = html;
                    // Load the corresponding JavaScript file for the page dynamically
                    const pageName = url.split('/').pop().split('.')[0];
                    const script = document.createElement('script');
                    script.src = pageName + '.js';
                    document.body.appendChild(script);
                })
                .catch(error => console.error('Error loading page:', error));
        }

        // Event listeners for each link
        document.getElementById('dietBtn').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            loadPage(this.href); // Load the content of the clicked link
        });

        document.getElementById('foodExclusionsBtn').addEventListener('click', function(event) {
            event.preventDefault();
            loadPage(this.href);
        });

        document.getElementById('profileBtn').addEventListener('click', function(event) {
            event.preventDefault();
            loadPage(this.href);
        });

        document.getElementById('resultBtn').addEventListener('click', function(event) {
            event.preventDefault();
            loadPage(this.href);
        });



//account 
// home.js

// home.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to load the account page dynamically
    function loadAccountPage() {
        // Fetch the account page content
        fetch("account.html")
            .then(response => response.text())
            .then(html => {
                // Inject the fetched HTML into the main content area
                document.getElementById("mainContent").innerHTML = html;
                
                // Once the account page is loaded, you can add any additional JavaScript functionality here
                // For example, handling profile picture upload or other dynamic interactions
                
                // Add event listeners or call functions for any dynamic functionality
                
                // Example:
                // Handle profile picture upload
                document.getElementById("profile-pic-input").addEventListener("change", function(event) {
                    const file = event.target.files[0];
                    if (file) {
                        // Create a FileReader instance
                        const reader = new FileReader();
                        // When the file is loaded, update the image source
                        reader.onload = function(e) {
                            document.getElementById("profile-pic-display").src = e.target.result;
                        };
                        // Read the file as a data URL
                        reader.readAsDataURL(file);
                    }
                });
            })
            .catch(error => {
                console.error("Error loading account page:", error);
            });
    }

    // Call the function to load the account page when the document is loaded
    loadAccountPage();
});




// Dynamic Nav
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event triggered.");

    const buttons = document.querySelectorAll(".button");
    console.log("Buttons:", buttons);

    const mainContent = document.querySelector("main");
    console.log("Main content:", mainContent);

    // Initialize history stack to keep track of visited pages
    let historyStack = [];

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Button clicked:", button);

            const pageUrl = this.getAttribute("href");
            console.log("Page URL:", pageUrl);

            fetchPage(pageUrl);
        });
    });

    // Function to fetch page content and populate the main content area
    function fetchPage(pageUrl) {
        fetch(pageUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                console.log("Response data:", data);

                mainContent.innerHTML = data;
                // Call any specific initialization functions for the loaded content here
                if (pageUrl === "./foodRecognition.html") {
                    initializeFoodRecognition();
                } else if (pageUrl === "./liftingWeights.html") {
                    initializeLiftingWeights();
                }
                    initializeMuscleGoal();
                
                    initializePlaceExcercise();
                
                    initializeProgram();
                
                    initializeExcercisesChoice();
                

                // Select the back button after it's added to the DOM
                const backButton = document.querySelector(".back-button");
                console.log("Back button:", backButton);

                // Add event listener for the back button
                backButton.addEventListener("click", function () {
                    console.log("Back button clicked.");
                    console.log("History stack before going back:", historyStack);

                    if (historyStack.length > 1) {
                        const previousPageUrl = historyStack[historyStack.length - 2]; // Get the URL of the previous page
                        console.log("Going back to:", previousPageUrl);
                        fetchPage(previousPageUrl);
                    } else {
                        console.log("No previous page to go back to.");
                    }

                    console.log("History stack after going back:", historyStack);
                });

                // Add the current page URL to the history stack
                historyStack.push(pageUrl);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // Function to initialize specific functionality for foodRecognition.html
    function initializeFoodRecognition() {
        console.log("Initializing food recognition functionality.");

        const fileInput = document.getElementById('fileInput');
        console.log("File input:", fileInput);

        const imageContainer = document.getElementById('imageContainer');
        console.log("Image container:", imageContainer);

        fileInput.addEventListener('change', function(event) {
            console.log("File input change event triggered.");

            const file = event.target.files[0];
            console.log("Selected file:", file);

            if (file) {
                const reader = new FileReader();
                reader.onload = function(readerEvent) {
                    console.log("File reader onload event triggered.");

                    const imageUrl = readerEvent.target.result;
                    console.log("Image URL:", imageUrl);

                    const imageElement = document.createElement('img');
                    imageElement.src = imageUrl;

                    console.log("Clearing previous image.");
                    imageContainer.innerHTML = ''; // Clear previous image

                    console.log("Appending new image.");
                    imageContainer.appendChild(imageElement);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Function to initialize lifting weights functionality
    function initializeLiftingWeights() {
        console.log("Initializing lifting weights functionality.");

        const experienceBoxes = document.querySelectorAll('.experience-box');

        experienceBoxes.forEach(box => {
            box.addEventListener('click', () => {
                // Remove the 'selected' class from all boxes
                experienceBoxes.forEach(box => box.classList.remove('selected'));

                // Add the 'selected' class to the clicked box
                box.classList.add('selected');

                // Fetch and load "muscleGoal.html" dynamically into the main content area
                fetchPage('muscleGoal.html');
            });
        });
    }

    // Function to initialize muscle goal functionality
    function initializeMuscleGoal() {
        console.log("Initializing muscle Goal functionality.");

        const goalBoxes = document.querySelectorAll('.goal-box');
        console.log("Goal boxes:", goalBoxes);

        goalBoxes.forEach(box => {
            box.addEventListener('click', () => {
                console.log("Goal box clicked:", box);
                // Remove the 'selected' class from all boxes
                goalBoxes.forEach(box => box.classList.remove('selected'));

                // Add the 'selected' class to the clicked box
                box.classList.add('selected');

                // Fetch and load "program.html" dynamically into the main content area
                fetchPage('placeExcercise.html');
            });
        });
    }

    // Function to initialize place exercise functionality
    function initializePlaceExcercise() {
        console.log("Initializing Place Exercise functionality.");
        const placeBoxes = document.querySelectorAll('.excercise-place');
        console.log("Place boxes:", placeBoxes);

        placeBoxes.forEach(box => {
            box.addEventListener('click', () => {
                // Remove the 'selected' class from all boxes
                placeBoxes.forEach(box => box.classList.remove('selected'));

                // Add the 'selected' class to the clicked box
                box.classList.add('selected');

                fetchPage('program.html');
            });
        });
    }

    // Function to initialize program functionality
    function initializeProgram() {
        console.log("Initializing program functionality.");

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
                        fetchPage('ppl.html');
                        break;
                    case 'five-days-muscles':
                        fetchPage('5dayExce.html');
                        break;
                    case 'cardio':
                        fetchPage('cardio.html');
                        break;
                    default:
                        // If none of the above, do nothing
                        break;
                }
            });
        });
    }

    // Function to initialize exercise choice functionality
    function initializeExcercisesChoice() {
        console.log("Initializing Excercise Choice functionality.");

        const options = document.querySelectorAll('.option');

        options.forEach(option => {
            option.addEventListener('click', () => {
                // Remove the 'selected' class from all options
                options.forEach(option => option.classList.remove('selected'));

                // Add the 'selected' class to the clicked option
                option.classList.add('selected');

                // Redirect to ExcerModel.html when any exercise option is clicked
                fetchPage('ExcerModel.html');
            });
        });
    }
});




    













