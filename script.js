// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the button element by its ID
    const clickButton = document.getElementById('clickButton');

    // Add a click event listener to the button
    clickButton.addEventListener('click', () => {
        // Display an alert when the button is clicked
        alert('You clicked the button! 🎉');

        // Optionally, dynamically add a message to the page
        const message = document.createElement('p');
        message.textContent = 'Thank you for clicking!';
        message.style.color = '#6200ea';
        message.style.fontWeight = 'bold';

        // Append the message below the button
        document.body.appendChild(message);
    });
});
