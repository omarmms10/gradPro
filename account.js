// JavaScript functionality for the account page
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle profile picture upload
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
});
