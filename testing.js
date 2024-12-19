const add = function (x, y) {
  return x + y;
};

const sumOfUpto = function (array, element) {
  const sum = array.at(-1);
  array.push(sum + element);
  console.log(array);
  return array;
};

const runningTotal = function (numbers) {
  const nums = numbers.slice(1, numbers.length);
  return nums.reduce(sumOfUpto, [numbers[0]]);
};

console.log(runningTotal([1, 2, 3, 4, 5]));