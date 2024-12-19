const LION = "L";
const ZEBRA = "Z";

function findIndexOfZebraInDanger(jungle, index, nearestPos) {
  if (index === jungle.length) {
    return findIndexOfZebraInDanger(jungle, 0, nearestPos + 1);
  }

  if (jungle[index] === ZEBRA && jungle[index + nearestPos] === LION) {
    return index;
  }

  if (jungle[index] === LION && jungle[index + nearestPos] === ZEBRA) {
    return index + nearestPos;
  }

  return findIndexOfZebraInDanger(jungle, index + 1, nearestPos);
}

function isLionAndZebraPresent(jungle, match, index) {
  if (index === jungle.length) {
    return false;
  }

  if (jungle[index] === match) {
    return true;
  }

  return isLionAndZebraPresent(jungle, match, index + 1);
}

function findPosOfZebraInDanger(jungle) {
  const isLionPresent = isLionAndZebraPresent(jungle, LION, 0);
  const isZebraPresent = isLionAndZebraPresent(jungle, ZEBRA, 0);

  if (isLionPresent && isZebraPresent) {
    return findIndexOfZebraInDanger(jungle, 0, 1);
  }

  return -1;
}

// ---------------- Testing Section ----------------------
function makeMessage(jungle, expected, actual) {
  const message = "|jungle:'" + jungle + "'\n   |expected:" + expected;
  return message + "\n   |actual:" + actual;
}

function testFindPosOfZebraInDanger(jungle, expected) {
  const actual = findPosOfZebraInDanger(jungle, 0, 1);
  const status = actual === expected ? "✅" : "❌";
  const content = makeMessage(jungle, expected, actual);

  console.log(status, content + "\n");
}

function testAll() {
  testFindPosOfZebraInDanger("", -1);
  testFindPosOfZebraInDanger("L", -1);
  testFindPosOfZebraInDanger("LL", -1);
  testFindPosOfZebraInDanger("Z", -1);
  testFindPosOfZebraInDanger("ZZ", -1);
  testFindPosOfZebraInDanger("L Z  Z   L", 2);
  testFindPosOfZebraInDanger("L    Z  Z   L", 8);
  testFindPosOfZebraInDanger("  Z     L  Z", 11);
  testFindPosOfZebraInDanger("L    Z  ZL", 8);
  testFindPosOfZebraInDanger("LZ  Z   L", 1);
  testFindPosOfZebraInDanger("Z L  Z   L", 0);
  testFindPosOfZebraInDanger("L Z         Z LZ", 15);
  testFindPosOfZebraInDanger("Z L Z L Z L Z L Z L Z L Z LZ", 27);
  testFindPosOfZebraInDanger("Z  Z L Z L Z L Z L Z L Z LZ", 26);
}

testAll();