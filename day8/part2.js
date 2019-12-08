const fs = require("fs");
const R = require("ramda");

const input = fs.readFileSync('input.txt', 'utf8')
    .split('')
    .map(Number);

const result = R.dropLast(1, input.reduce((accumulator, currentValue, currentIndex, array) => {
    const lastLayer = R.last(accumulator);
    if (lastLayer === undefined || lastLayer.length === 6 && R.all(row => row.length === 25, lastLayer)) {
        accumulator.push([]);
    }
    const nextLayer = R.last(accumulator);

    const lastRow = R.last(nextLayer);
    if (lastRow === undefined || lastRow.length === 25) {
        nextLayer.push([]);
    }
    const nextRow = R.last(nextLayer);

    nextRow.push(currentValue);
    return accumulator;

}, [[]]));

const image = R.times(
    row => R.times(
        col => R.find(a => a === 0 || a === 1, result.map(layer => layer[row][col])),
        25),
    6);

image.forEach(row => console.log(row.reduce((acc, val) => acc + (val === 1 ? '1' : ' '), '')));