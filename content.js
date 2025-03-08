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

// Function to disable chat input by blurring it
function disableChat() {
    const chatInput = document.querySelector('.textbox');
    if (chatInput) {
        chatInput.blur(); // Removes focus from chat
        console.log("Chat disabled");
    }
}

// Function to enable chat input by focusing on it
function enableChat() {
    const chatInput = document.querySelector('.textbox');
    if (chatInput) {
        chatInput.focus(); // Puts focus on chat
        console.log("Chat enabled");
    }
}

// Add event listener for key presses
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // If Escape is pressed, disable chat
    if (key === "Escape") {
        event.preventDefault();
        disableChat();
        return;
    }

    // If Enter is pressed, enable chat
    if (key === "Enter") {
        event.preventDefault();
        enableChat();
        return;
    }

    handleKeyPress(event);
});