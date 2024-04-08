


// Define the scroll event handler
function handleScroll() {
    const scrollTop = window.scrollY;
    const layers = document.querySelectorAll(".parallax-layer");

    layers.forEach(layer => {
        const speed = layer.getAttribute("data-scroll-speed");
        const yPos = -(scrollTop * speed / 10);
        layer.style.transform = `translateY(${yPos}px)`;
    });
}


const frameRateInterval = 1000 / 60; // frames per second 


let lastScrollTime = 0;
document.addEventListener("scroll", function () {
    const currentTime = Date.now();
    if (currentTime - lastScrollTime >= frameRateInterval) {
        handleScroll();
        lastScrollTime = currentTime;
    }
});


const yearElement = document.getElementById("year");

yearElement.style.left = "9vw";
yearElement.style.top = "15vw";


