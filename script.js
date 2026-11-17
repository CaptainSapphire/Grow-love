document.addEventListener("DOMContentLoaded", () => {
    const images = [ 
  './assets/phase-1.jpg',
  './assets/phase-2-draft.jpg',
  './assets/phase-3-draft.jpg',
  './assets/phase-4-draft.jpg',
  ];

    let currentIndex = 0;

    const growBtn = document.getElementById("grow-btn");
    const plantImage = document.getElementById("plant-image");

    // Safety check: ensure elements exist
    if (growBtn && plantImage && images.length > 0) {
        plantImage.src = images[currentIndex];

        growBtn.addEventListener("click", () => {
            currentIndex++;

            if (currentIndex < images.length) {
                plantImage.src = images[currentIndex];
            } else {
                growBtn.disabled = true;
                growBtn.textContent = "Fully Grown!";
            }
        });
    } else {
        console.error("Grow button or plant image element not found in HTML!");
    }
});