const R = require('ramda');
const fs = require('fs');

const input = fs.readFileSync('day1/input.txt', 'utf8')
    .split('\n')
    .map(number => parseInt(number, 10));

const calculateFuel = num => Math.floor(num / 3) - 2;

function calculateRecursive(input: Array<number>): number {
    const fuel = R.filter(R.lt(1), R.map(calculateFuel, input));
    const sum = R.sum(fuel);
    return fuel.length > 0 ? sum + calculateRecursive(fuel) : sum;
}

const fuelSum = calculateRecursive(input);

console.log(fuelSum);