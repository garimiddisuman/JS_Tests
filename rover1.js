const roverX = 0;
const roverY = 0;
const heading = 0;
const instructions = 32;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let instructCandidate = instructions;
let currentRoverX = roverX;
let currentRoverY = roverY;
let currentHeading = heading;
let instructionsReverse = 0;

// reverse instructions
while (instructCandidate > 0) {
  const remainder = instructCandidate % 10;
  instructCandidate = (instructCandidate - remainder) / 10;
  instructionsReverse = (instructionsReverse * 10) + remainder;
}

// loop until to finish instructions
while (instructionsReverse > 0) {
  const instruction = instructionsReverse % 10;
  instructionsReverse = (instructionsReverse - instruction) / 10;

  if (instruction < 3) {
    const noOfRightTurns = instruction === 1 ? 3 : 1;
    currentHeading = (currentHeading + noOfRightTurns) % 4;
  }

  if (instruction === 3) {
    let x_axis = 0;
    let y_axis = 0;

    switch (currentHeading) {
      case 0:
        y_axis = 1;
        break;
      case 1:
        x_axis = 1;
        break;
      case 2:
        y_axis = -1;
        break;
      case 3:
        x_axis = -1;
        break;

    }
    
    currentRoverX = currentRoverX + x_axis;
    currentRoverY = currentRoverY + y_axis;
  }
}

console.log(currentRoverX, currentRoverY, currentHeading);