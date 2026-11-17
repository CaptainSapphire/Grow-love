document.addEventListener("DOMContentLoaded", () => {
    // Array of your stage images
    const images = [
    './assets/phase-1.jpg',
    './assets/phase-2-draft.jpg',
    './assets/phase-3-draft.jpg',
    './assets/phase-4-draft.jpg'
    ];

    let currentIndex = 0;

    const growBtn = document.getElementById("grow-btn");
    const plantBg = document.getElementById("plant-bg");

    // 1. Set the initial background image on page load
    if (images.length > 0 && plantBg) {
        plantBg.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    // 2. Cycle through backgrounds on click
    if (growBtn && plantBg) {
        growBtn.addEventListener("click", () => {
            currentIndex++;

            if (currentIndex < images.length) {
                // Show the next image
                plantBg.style.backgroundImage = `url('${images[currentIndex]}')`;
                
                // If this new image is the LAST one in the array, trigger confetti!
                if (currentIndex === images.length - 1) {
                    triggerConfetti();
                }
            } else {
                // Reached past the end - disable the button
                growBtn.disabled = true;
            }
        });
    }
});

// Confetti burst function
function triggerConfetti() {
    // Fires confetti from both edges falling down towards the center/middle
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0 } // Starts from the top of the screen
    });
}