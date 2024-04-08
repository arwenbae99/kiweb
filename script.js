document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const block = document.getElementById('block');
    const character = document.getElementById('character');
    const blockSize = 50; // size of the block
    const characterSize = 50; // size of the character image (adjust as needed)
    const step = 50; // step size for movement

    // Set initial position of the block to the center of the game container
    const initialLeft = (gameContainer.offsetWidth - blockSize) / 2;
    const initialTop = (gameContainer.offsetHeight - blockSize) / 2;
    block.style.left = `${initialLeft}px`;
    block.style.top = `${initialTop}px`;

    character.style.left = `${initialLeft}px`;
    character.style.top = `${initialTop}px`;

    // Function to move block based on arrow key pressed
    function moveBlock(event) {
        const currentPosition = {
            x: parseInt(block.style.left),
            y: parseInt(block.style.top)
        };

        switch (event.key) {
            case 'ArrowUp':
                block.style.top = `${Math.max(0, currentPosition.y - step)}px`;
                break;
            case 'ArrowDown':
                block.style.top = `${Math.min(gameContainer.offsetHeight - blockSize, currentPosition.y + step)}px`;
                break;
            case 'ArrowLeft':
                block.style.left = `${Math.max(0, currentPosition.x - step)}px`;
                break;
            case 'ArrowRight':
                block.style.left = `${Math.min(gameContainer.offsetWidth - blockSize, currentPosition.x + step)}px`;
                break;
        }

        const characterLeft = parseInt(block.style.left) + (blockSize - characterSize) / 2;
        const characterTop = parseInt(block.style.top) + (blockSize - characterSize) / 2;
        character.style.left = `${characterLeft}px`;
        character.style.top = `${characterTop}px`;
    }

    // Event listener for keyboard input
    document.addEventListener('keydown', moveBlock);
});


document.addEventListener('DOMContentLoaded', function () {
    const character = document.getElementById('character');
    const boxes = document.querySelectorAll('.box');

    // Function to open link of the element below character
    function openLinkOfElementBelow(link) {
        // Trigger click event of the link to open its URL
        link.click();
    }

    // Event listener for 'keydown' event
    document.addEventListener('keydown', function(event) {
        // Check if the 'Enter' key was pressed (key code 13)
        if (event.key === 'Enter') {
            // Get the position and size of the character image
            const characterRect = character.getBoundingClientRect();

            // Check if the character image is overlapping with any box element
            boxes.forEach(function(box) {
                const boxRect = box.getBoundingClientRect();

                const overlap = !(characterRect.right < boxRect.left ||
                    characterRect.left > boxRect.right ||
                    characterRect.bottom < boxRect.top ||
                    characterRect.top > boxRect.bottom);

                // If the character image is on top of the box, open its URL
                if (overlap) {
                    const link = box.querySelector('a');
                    if (link) {
                        openLinkOfElementBelow(link);
                    }
                }
            });
        }
    });
});

