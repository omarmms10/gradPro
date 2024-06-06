document.addEventListener('DOMContentLoaded', function() {
  console.log("foodRecognition.js is executed.");
  
  const fileInput = document.getElementById('fileInput');
  console.log("fileInput:", fileInput);
  
  const imageContainer = document.getElementById('imageContainer');
  console.log("imageContainer:", imageContainer);

  fileInput.addEventListener('change', function(event) {
    console.log("File input changed.");
    
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
});
