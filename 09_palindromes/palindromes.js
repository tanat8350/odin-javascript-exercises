const palindromes = function (string) {
  const removeSym = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const splited = removeSym.split("");
  const splitedRe = removeSym.split("").reverse();
  let result = true;

  for (let i = 0; i < Math.floor(removeSym.length / 2); i++) {
    if (splited[i] !== splitedRe[i]) {
      result = false;
      break;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = palindromes;
