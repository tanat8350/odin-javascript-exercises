const findTheOldest = function (arr) {
  arr.forEach((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
  });

  const sorted = arr.sort((personA, personB) => {
    const ageA = personA.yearOfDeath - personA.yearOfBirth;
    const ageB = personB.yearOfDeath - personB.yearOfBirth;
    return ageB - ageA;
  });
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
