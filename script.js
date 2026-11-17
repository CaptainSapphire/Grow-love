document.addEventListener("DOMContentLoaded", () => {
    // List all your stage images in exact order
    const images = [ 
  './assets/phase-1.jpg',
  './assets/phase-2-draft.jpg',
  './assets/phase-3-draft.jpg',
  './assets/phase-4-draft.jpg',
  ];

    let currentIndex = 0;

    const growBtn = document.getElementById("grow-btn");
    const plantBg = document.getElementById("plant-bg");

    // 1. Load the very first image immediately when page loads
    if (images.length > 0 && plantBg) {
        plantBg.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    // 2. Handle button clicks
    if (growBtn && plantBg) {
        growBtn.addEventListener("click", () => {
            // Increment to the next image index
            currentIndex++;

            // Check if we still have images left to display
            if (currentIndex < images.length) {
                plantBg.style.backgroundImage = `url('${images[currentIndex]}')`;
                console.log(`Now showing image index: ${currentIndex}`, images[currentIndex]);
            } 
            
            // If we have reached or passed the last image index
            if (currentIndex >= images.length - 1) {
                // Optional: disable button or keep it on the last image
                // If you want it to disable right after the last image:
                if (currentIndex >= images.length) {
                    growBtn.disabled = true;
                    growBtn.style.opacity = "0.5";
                    growBtn.style.cursor = "not-allowed";
                }
            }
        });
    }
});