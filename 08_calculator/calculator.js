const add = function (...nums) {
  let result = 0;
  for (num of nums) {
    result += num;
  }
  return result;
};

const subtract = function (...nums) {
  return nums.reduce((total, num) => total - num);
};

const sum = function (arr) {
  let result = 0;
  for (item of arr) {
    result += item;
  }
  return result;
};

const multiply = function (arr) {
  return arr.reduce((total, num) => total * num);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
