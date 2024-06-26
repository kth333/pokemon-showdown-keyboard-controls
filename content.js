// Function to handle key presses and select moves or switch Pokémon
function handleKeyPress(event) {
    // Get the pressed key
    const key = event.key.toLowerCase();

    // Define key mappings for selecting moves and switching Pokémon
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

    // Check if the pressed key corresponds to selecting a move
    if (key in moveKeyMappings) {
        // Get the index of the move (0-indexed)
        const moveIndex = moveKeyMappings[key];

        // Find the move button corresponding to the index
        const moveButton = document.querySelector(`.movemenu > button:nth-child(${moveIndex + 1})`);

        // Check if the move button exists
        if (moveButton) {
            // Simulate a click on the move button
            moveButton.click();
        }
    }

    // Check if the pressed key corresponds to switching Pokémon
    if (key in switchKeyMappings) {
        // Get the index of the Pokémon (0-indexed)
        const pokemonIndex = switchKeyMappings[key];

        // Find the Pokémon switch button corresponding to the index
        const pokemonSwitchButton = document.querySelector(`.switchmenu > button:nth-child(${pokemonIndex + 1})`);

        // Check if the Pokémon switch button exists
        if (pokemonSwitchButton) {
            // Simulate a click on the Pokémon switch button
            pokemonSwitchButton.click();
        }
    }
}

// Add event listener for key presses
document.addEventListener("keydown", handleKeyPress);