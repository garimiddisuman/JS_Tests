const roverX = 0;
const roverY = 0;
const heading = 0;
const instructions = 12;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let roverXCandidate = roverX;
let roverYCandidate = roverY;
let headingCandidate = heading;
let instructCandidate = instructions;
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

  if (roverXCandidate === 5 || roverYCandidate === 5) {
    console.log("rover reached to boundary,it can't move");
  }
  if (roverXCandidate > 5 || roverYCandidate > 5) {
    console.log("rover position out of range,it is not working");
    break;
  }
  if (headingCandidate === 0) {
    if (instruction === 3) {
      roverYCandidate = roverYCandidate + 1;
    }
    if (instruction === 1) {
      headingCandidate = 3;
    } else {
      headingCandidate = 1;
    }
    continue;
  }

  if (headingCandidate === 1) {
    if (instruction === 3) {
      roverXCandidate = roverXCandidate + 1;
    }
    if (instruction === 1) {
      headingCandidate = 0;
    } else {
      headingCandidate = 2;
    }
    continue;
  }

  if (headingCandidate === 2) {
    if (instruction === 3) {
      roverYCandidate = roverYCandidate - 1;
    }
    if (instruction === 1) {
      headingCandidate = 1;
    } else {
      headingCandidate = 3;
    }
    continue;
  }

  if (headingCandidate === 3) {
    if (instruction === 3) {
      roverXCandidate = roverXCandidate - 1;
    }
    if (instruction === 1) {
      headingCandidate = 2;
    } else {
      headingCandidate = 0;
    }
    continue;
  }
}

console.log(roverXCandidate, roverYCandidate, headingCandidate);