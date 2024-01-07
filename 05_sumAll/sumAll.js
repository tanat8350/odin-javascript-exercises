const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  let resultSum = 0;
  let [start, end] = [num1, num2].sort((a, b) => a - b);
  for (; start <= end; start++) {
    resultSum += start;
  }
  return resultSum;
};

// Do not edit below this line
module.exports = sumAll;
