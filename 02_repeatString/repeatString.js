const repeatString = function (string, num) {
  /* Solution 1 */
  // if (num < 0) return "ERROR";
  // return string.repeat(num);

  /* Solution 2 */
  let result = "";
  if (num < 0) return "ERROR";
  while (num > 0) {
    result += string;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
