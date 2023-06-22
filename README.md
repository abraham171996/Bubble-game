# Bubble-game
The provided code is a JavaScript implementation of a bubble popping game. It involves creating bubbles on the screen and allowing the player to pop them for points. Here's a description of the code:

The code selects various elements from the HTML document using their IDs and assigns them to corresponding variables. These elements include buttons, input fields, and containers for displaying the game and player information.

The code attaches event listeners to the "Start Game" button and level buttons (Easy, Medium, Hard, and Delete). When the "Start Game" button is clicked, it checks if the player has entered their name and displays the game screen if the name is provided.

The code initializes some variables like newBubbleArr and count to keep track of the bubbles and the player's score, respectively.

When the "Start" button is clicked, it enables the level buttons and the delete button, and removes some CSS classes from these buttons. It also sets up an interval using setInterval() that creates bubbles at random positions on the screen. Each bubble is added to the newBubbleArr array and has a click event listener attached to it. When a bubble is clicked, it is removed from the screen, and the player's score is incremented.

The code includes different event handlers for the level buttons (Easy, Medium, Hard) that clear any existing intervals and set up new intervals with different timing intervals and score increments based on the chosen level.

There is also an event handler for the "Delete" button, which clears the game zone, resets the variables, stops the interval, and enables the "Start" button.

A Git repository for this project would likely include this JavaScript code along with an HTML file and any associated CSS stylesheets or images. It would also include any additional files or documentation related to the project, such as a README.md file with instructions or explanations. 
