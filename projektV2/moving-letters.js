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













////////////////////////////////////////////////////////////////// Middle of Element in Viewport
function getElementViewportCenterY(element) {

    const rect = element.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2; // Middle of Obj
    return centerY;
}



////////////////////////////////////////////////////////////////// Get Elements
const glyphs = document.querySelectorAll('.glyphcommon');






document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerOfScreenX = window.innerWidth * 0.5;
    


    // Loop through the elements
    glyphs.forEach(element => {
        // Get the value of the data-scroll-speed attribute for each element
        const weight = element.getAttribute("data-weight");
 
    
        


    //hier rechne ich den X wert aus mit ScreenWidth
    if (mouseX < centerOfScreenX) {
            differenceXLeft = mapRange(mouseX, 0, centerOfScreenX, 15, 0);
            offsetX = differenceXLeft * weight;
            Movement =  50 - offsetX;
        }
        else {
            differenceXRight = mapRange(mouseX, centerOfScreenX, window.innerWidth, 0, 15);
            offsetX = differenceXRight * weight;
            Movement = 50 + offsetX ;
        }



       //Update Location
        element.style.left = Movement + "vw";
    });
});
