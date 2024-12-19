/*-------------------------- All last Chars ----------------------*/
const concatLastChar = function (lastCharsString, string) {
  return lastCharsString + string.slice(-1);
};

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(concatLastChar, '');
};

/*------------------- Lists with positives Numbers ---------------*/
const isPositive = function (number) {
  return number > 0;
};

const areSomePositives = function (list) {
  return list.some(isPositive);
};

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(areSomePositives);
};

/*---------------------- Product of positives ---------------------*/
const multiply = function (x, y) {
  return x * y;
};

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(multiply, 1);
};

/*------------------ Longest word which is includes E ---------------*/
const longestWord = function (largestWord, word) {
  return largestWord.length < word.length ? word : largestWord;
};

const isContainE = function (string) {
  return string.includes('e') || string.includes('E');
};

const longestEWord = function (strings) {
  return strings.filter(isContainE).reduce(longestWord, '');
};

/*---------------------- Are all lists even -----------------------*/
const isEven = function (num) {
  return num % 2 === 0;
};

const areEven = function (list) {
  return list.every(isEven);
};

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(areEven);
};

/*------------------- Sum of squares of odds ------------------*/
const add = function (x, y) {
  return x + y;
};

const square = function (num) {
  return num * num;
};

const isOdd = function (num) {
  return num & 1 === 1;
};

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.filter(isOdd).map(square).reduce(add, 0);
};

/*------------------- Are all of same lengths -------------------*/
const areAllOfSameLength = function (listOfStrings) {
  return listOfStrings.every(function (string) {
    return listOfStrings[0].length === string.length;
  });
};

/*------------------------ Remove Duplicates ----------------------*/
const isIncludes = function (array, number) {
  if (!array.includes(number)) {
    array.push(number);
  }

  return array;
};

const removeDuplicates = function (numbers) {
  return numbers.reduce(isIncludes, []);
};

/*------------------- Is Starts With Vowels -------------------*/
const isStartsWithVowel = function (word) {
  const vowelsSet = 'aeiouAEIOU';

  return vowelsSet.includes(word.at(0));
};

const allStartWithAVowel = function (words) {
  return words.every(isStartsWithVowel);
};

/*------------------------ Running Total -----------------------*/
const sumUptoCurrentElement = function (array, element) {
  const lastElement = array.at(-1);
  array.push(lastElement + element);
  return array;
};

const runningTotal = function (numbers) {
  const nums = numbers.slice(1, numbers.length);
  return nums.reduce(sumUptoCurrentElement, [numbers.at(0)]);
};

/*--------------------------- Pairs -----------------------------*/
const makePair = function (pairLists, num) {
  if (pairLists.at(-1).length === 2) {
    pairLists.push([]);
  }

  pairLists.at(-1).push(num);
  return pairLists;
};

const pairs = function (list) {
  return list.reduce(makePair, [[]]);
};

/*---------------------------- TESTING SECTION ----------------------*/
function testFunctions(functionName, parameters, expected, testedData) {
  const actual = functionName(parameters);
  const status = actual === expected ? '✅' : '❌';

  testedData.push([status, functionName.name, parameters, expected, actual]);
}

const testAllLastChars = function (testCases) {
  testFunctions(allLastChars, ["abc", "def", "ghi"], 'cfi', testCases);
  testFunctions(allLastChars, ["ab", "de", "gh"], 'beh', testCases);
  testFunctions(allLastChars, ["", "", ""], '', testCases);
};

const testListWithAllPositiveNumbers = function (testCases) {
  testFunctions(listsWithPositiveNumbers, [[-1, -2], [3, 4], [-5, -6]], [[3, 4]],
    testCases);
  testFunctions(listsWithPositiveNumbers, [[-1, -2], [-3, 4], [-5, -6]], [[-3, 4]],
    testCases);
  testFunctions(listsWithPositiveNumbers, [[-1, -2], [-3, -4], [-5, -6]], [], testCases);
  testFunctions(listsWithPositiveNumbers, [[0, -2], [-3, -4], [-5, -6]], [], testCases);
};

const testProductsOfPositives = function (testCases) {
  testFunctions(productOfPositives, [0, -1, -2, 3, 4], 12, testCases);
  testFunctions(productOfPositives, [0, -2], 1, testCases);
  testFunctions(productOfPositives, [0], 1, testCases);
};

const testLongestEWord = function (testCases) {
  testFunctions(longestEWord, ["educate", "there", "animation"], 'educate', testCases);
  testFunctions(longestEWord, ["edu", "Education", "animate"], 'Education', testCases);
};

const testAreAllListsEven = function (testCases) {
  testFunctions(areAllListsEven, [[2, 4, 6], [1, 3, 5], [8, 10]], false, testCases);
  testFunctions(areAllListsEven, [[2, 4], [6, 8]], true, testCases);
};

const testSumOfSquaresOfOdds = function (testCases) {
  testFunctions(sumOfSquaresOfOdds, [1, 2, 3, 4], 10, testCases);
};

const testAreAllOfSameLength = function (testCases) {
  testFunctions(areAllOfSameLength, ["abc", "def"], true, testCases);
  testFunctions(areAllOfSameLength, ["abc", "de"], false, testCases);
};

const testRemoveDuplicates = function (testCases) {
  testFunctions(removeDuplicates, [1, 1, 2, 2, 3], [1, 2, 3], testCases);
  testFunctions(removeDuplicates, [1, 2, 3], [1, 2, 3], testCases);
};

const testAllStartWithAVowel = function (testCases) {
  testFunctions(allStartWithAVowel, ["ant", "eye", "id"], true, testCases);
  testFunctions(allStartWithAVowel, ["ant", "eye", "d"], false, testCases);
};

const testRunningTotal = function (testCases) {
  testFunctions(runningTotal, [1, 2, 3], [1, 3, 6], testCases);
  testFunctions(runningTotal, [1, 2, 3, 4], [1, 3, 6, 10], testCases);
};

const testPairs = function (testCases) {
  testFunctions(pairs, [], [[]], testCases);
  testFunctions(pairs, [1], [[1]], testCases);
  testFunctions(pairs, [1, 2], [[1, 2]], testCases);
  testFunctions(pairs, [1, 2, 3], [[1, 2], [3]], testCases);
  testFunctions(pairs, [1, 2, 3, 4], [[1, 2], [3, 4]], testCases);
  testFunctions(pairs, [1, 2, 3, 4, 5], [[1, 2], [3, 4], [5]], testCases);
};

const testAll = function () {
  const testCases = [];
  testCases.push(["mark", "function", "input", "expected", 'actual'], []);

  testAllLastChars(testCases);
  testListWithAllPositiveNumbers(testCases);
  testProductsOfPositives(testCases);
  testLongestEWord(testCases);
  testAreAllListsEven(testCases);
  testSumOfSquaresOfOdds(testCases);
  testAreAllOfSameLength(testCases);
  testRemoveDuplicates(testCases);
  testAllStartWithAVowel(testCases);
  testRunningTotal(testCases);
  testPairs(testCases);

  console.table(testCases);
};

testAll();