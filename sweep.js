// Do not rename minefield, use it as input for your program.
const minefield = "*-*";
// 0,1    1,1   1,3
// Clear the mines one by one, always choosing the mine closest to the top left hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// to find no of rows ... & no of columns
let noOfRows = 1;

for (let index = 0; index < minefield.length; index++) {
  if (minefield[index] === "\n") {
    noOfRows++;
  }
}

let noOfColumns = 0;
let index = 0;

while (minefield[index] !== "\n" && index < minefield.length) {
  noOfColumns++;
  index++;
}

// to find bomb points...(x,y) co-ordinates....
let bombPoint = "";
let mineCandidateIndex = 0;
let noOfBombs = 0;

for (let x = 0; x < noOfRows; x++) {
  for (let y = 0; y < noOfColumns + 1; y++) {
    if (minefield[mineCandidateIndex] === "*") {
      bombPoint = bombPoint + x + y;
      mineCandidateIndex++;
      noOfBombs++;
    } else {
      mineCandidateIndex++;
    }
  }
}

let count = 0;
let closestBombPoints = "";

// bomb closest points in ascending order....
while (closestBombPoints.length !== bombPoint.length) {
  let index4 = 0;
  while (index4 < bombPoint.length) {
    let number1 = + bombPoint[index4];
    let number2 = + bombPoint[index4 + 1];
    if (number1 + number2 === count) {
      closestBombPoints += bombPoint[index4] + bombPoint[index4 + 1];
    }
    index4 = index4 + 2;
  }
  count = count + 1;
}

let mineField = minefield + "\n";
let count1 = 0;

// printing defuse mines one by one in closest points ascending order...
for (let currentBomb = 0; currentBomb < noOfBombs; currentBomb++) {
  let newString = "";
  let mineIndex = 0;
  let x_axis = 0; let y_axis = 0;
  x_axis = closestBombPoints[count1];
  y_axis = closestBombPoints[count1 + 1];

  for (let x = 0; x < noOfRows; x++) {
    for (let y = 0; y < noOfColumns + 1; y++) {
      if (x == x_axis && y == y_axis) {
        newString += "+";
      }
      else {
        newString += mineField[mineIndex];
      }
      mineIndex++;
    }
  }
  
  console.log(newString);
  mineField = newString;
  count1 = count1 + 2;
}