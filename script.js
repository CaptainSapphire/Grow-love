// Array of all images to cycle through
const images = [ 
  './assets/phase-1.png',
  './assets/phase-2-draft.png',
  './assets/phase-3-draft.png',
  './assets/phase-4-draft.png',
];

const growBtn = document.getElementById("grow-btn");
const displayImage = document.getElementById("display-image");

// Set initial image on load
if (images.length > 0) {
    displayImage.src = images[currentIndex];
}

growBtn.addEventListener("click", () => {
    currentIndex++;
    
    // Check if there are still images left
    if (currentIndex < images.length) {
        displayImage.src = images[currentIndex];
    } else {
        // No more images left - disable button or hide it
        growBtn.disabled = true;
        growBtn.textContent = "Fully Grown! ❤️";
        // Alternatively, to hide it completely: growBtn.style.display = "none";
    }
});