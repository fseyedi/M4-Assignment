// Declare the variable
let coinFlip

// Prompt user for the number of times to loop
let numOfFlips = parseInt(prompt("Enter the number of times to flip the coin:"));

// Loop that many times
for (let i = 0; i < numOfFlips; i++) {
    // Assign a randomly generated number to coinFlip (0 or 1)
    coinFlip = Math.floor(Math.random()*2)

    // Conditional statement to check the result
    if (coinFlip === 0) {
        console.log("Heads")
        
    } else {
        console.log("Tails")
        
    }
}
