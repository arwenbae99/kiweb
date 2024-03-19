


// Define the scroll event handler
function handleScroll() {
    const scrollTop = window.scrollY;
    const layers = document.querySelectorAll(".parallax-layer");

    layers.forEach(layer => {
        const speed = layer.getAttribute("data-scroll-speed");
        const yPos = -(scrollTop * speed / 100);
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
yearElement.style.top = "9vw";




function mapRange(value, oldMin, oldMax, newMin, newMax) {
    // Check if the value is within the old range
    if (value < oldMin || value > oldMax) {
        throw new Error("Value is not within the old range");
    }

    // Calculate the percentage of the value within the old range
    const percentage = (value - oldMin) / (oldMax - oldMin);

    // Map the percentage to the new range
    const newValue = percentage * (newMax - newMin) + newMin;

    return newValue;
}




const glyph1e = document.getElementById("glyph1e");

document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerOfScreen = window.innerWidth * 0.5;





    if (mouseX < centerOfScreen) {
        differenceXLeft = mapRange(mouseX, 0, centerOfScreen, 15, 0);
        offsetX = 50 - differenceXLeft;
    }

    else {
        differenceXLeft = mapRange(mouseX, centerOfScreen, window.innerWidth, 0, 15);
        offsetX = 50 + differenceXLeft;
    }



    console.log(offsetX)

    // Update element's position
    glyph1e.style.left = offsetX + "vw";
});