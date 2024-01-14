const fibonacci = function (num) {
  let previous = 0;
  let newer = 1;
  let current;

  +num < 0 ? (newer = "OOPS") : "";
  +num === 0 ? (newer = 0) : "";

  for (i = 2; i <= +num; i++) {
    current = previous + newer;
    previous = newer;
    newer = current;
  }
  return newer;
};

// Do not edit below this line
module.exports = fibonacci;
