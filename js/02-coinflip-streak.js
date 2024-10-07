
let coinFlip;
let headsStreak = 0;

do {
    
    coinFlip = Math.floor(Math.random() * 2);

    
    if (coinFlip === 0) {
        console.log("Heads");
        headsStreak++;
    } else {
        console.log("Tails");
    }
} while (coinFlip === 0);

console.log(`Streak of heads: ${headsStreak}`);
