const R = require("ramda");

const twoAdjacentDigitsAreTheSame = (password) => R.any(val => val[0] === val[1], R.aperture(2, R.split('', password)));

const isAscending = (password) => R.all(val => val[0] <= val[1], R.aperture(2, R.split('', password)));

const isValid = R.allPass([twoAdjacentDigitsAreTheSame, isAscending]);

const validPasswords = R.range(382345, 843168).map(String).filter(isValid);

console.log(validPasswords.length);