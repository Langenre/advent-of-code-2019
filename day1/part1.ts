import * as R from 'ramda';
import * as fs from 'fs';

const input = fs.readFileSync('day1/input.txt', 'utf8')
    .split('\n')
    .map(number => parseInt(number, 10));

const calculateFuel = R.compose(
    R.subtract(R.__, 2),
    Math.floor,
    R.divide(R.__, 3),
);

const fuelSum = R.sum(R.map(calculateFuel, input));

console.log(fuelSum);