// Constants
const startButton = document.getElementById('start-button');
const playerNameInput = document.getElementById('player-name-input');
// Function ensures player's name is valid
function checkName() {
    // Read value of input field
    let playerName = playerNameInput.value;
    if (playerName === '') {
        // players name empty string
        // display alert message
        alert('Please enter your name !');
    } else if (playerName.includes(' ')) {
        // players name contains spaces
        // display alert message
        alert('Please enter name without spaces !');
    } else {
        //players name is good to go
        sessionStorage.setItem('playerName', playerName);
        window.location.href = 'game.html';
    }
    return;
}
document.addEventListener('DOMContentLoaded', function () {
    // Adding event listener to "start button"
    startButton.addEventListener('click', (event) => {
        // Prevent default
        event.preventDefault();
        // Call function that checks name
        checkName();
    });
});