////////////////////////////////////////////////////////////////// Mapping Elements
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

let Movement;


document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const centerOfScreenX = window.innerWidth * 0.5;



    if (mouseX < centerOfScreenX) {
        Movement = mapRange(mouseX, 0, centerOfScreenX, 40, 0);
    } else {
        Movement = (mapRange(mouseX, centerOfScreenX, window.innerWidth, 0, 40) * -1);
    }

    // Update Location
    document.documentElement.style.setProperty("--movement", Movement + "vw");
    console.log("--movement", Movement + "px");
});
