const R = require("ramda");

function twoAdjacentDigitsAreTheSame(password) {
    return password.toString()
        .split('')
        .map(Number)
        .reduce(
            (accumulator, currentValue, currentIndex, array) =>
                (currentValue === array[currentIndex + 1])
                    ? true
                    : accumulator,
            false
        );
}

function isAscending(password) {
    return password.toString()
        .split('')
        .map(Number)
        .reduce(
            (accumulator, currentValue, currentIndex, array) =>
                (currentIndex === 5 || currentValue <= array[currentIndex + 1])
                    ? accumulator
                    : false,
            true
        );
}

const validPasswords = R.range(382345, 843168)
    .filter(twoAdjacentDigitsAreTheSame)
    .filter(isAscending);

console.log(validPasswords.length);