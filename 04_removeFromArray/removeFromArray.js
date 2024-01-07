const removeFromArray = function (array, ...args) {
  args.forEach((agr) => {
    const index = array.indexOf(agr);
    if (index === -1) return;
    array.splice(index, 1);
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
