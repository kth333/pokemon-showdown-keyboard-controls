// Key mappings for selecting moves and switching Pokémon
const moveKeyMappings = {
    '1': 0, // Select the first move
    '2': 1, // Select the second move
    '3': 2, // Select the third move
    '4': 3  // Select the fourth move
};

const switchKeyMappings = {
    'z': 0, // Switch to the first Pokémon
    'x': 1, // Switch to the second Pokémon
    'c': 2, // Switch to the third Pokémon
    'v': 3, // Switch to the fourth Pokémon
    'b': 4, // Switch to the fifth Pokémon
    'n': 5  // Switch to the sixth Pokémon
};

// Function to handle key presses and select moves or switch Pokémon
function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    console.log(`Key pressed: ${key}`);

    // Check if the pressed key corresponds to selecting a move
    if (key in moveKeyMappings) {
        const moveIndex = moveKeyMappings[key];
        const moveButton = document.querySelector(`.movemenu > button:nth-child(${moveIndex + 1})`);
        if (moveButton) {
            console.log(`Clicking move button: ${moveIndex + 1}`);
            moveButton.click();
        }
    }

    // Check if the pressed key corresponds to switching Pokémon
    if (key in switchKeyMappings) {
        const pokemonIndex = switchKeyMappings[key];
        const pokemonSwitchButton = document.querySelector(`.switchmenu > button:nth-child(${pokemonIndex + 1})`);
        if (pokemonSwitchButton) {
            console.log(`Clicking Pokémon switch button: ${pokemonIndex + 1}`);
            pokemonSwitchButton.click();
        }
    }
}

// Function to simulate a click on a given selector
function simulateClick(selector) {
    const element = document.querySelector(selector);
    if (element) {
        console.log(`Simulating click on ${selector}`);
        element.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        }));
    } else {
        console.log(`Element not found: ${selector}`);
    }
}

// Add event listener for key presses
document.addEventListener('keydown', function (event) {
    // Check for Escape key
    if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
        console.log("Escape pressed, disabling chat...");
        simulateClick('#header');
        event.preventDefault();
        return;
    }

    // Check for Enter key
    if (event.key === "Enter" || event.keyCode === 13) {
        console.log("Enter pressed, enabling chat...");
        simulateClick('.battle-log');
        event.preventDefault();
        return;
    }

    handleKeyPress(event);
});
