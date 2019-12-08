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

const nullCount = result.map(layer => layer.reduce((acc, row) => acc + row.reduce((acc, num) => num === 0 ? ++acc : acc, 0), 0));

const oneDigits = result[5].reduce((acc, row) => acc + row.reduce((acc, num) => num === 1 ? ++acc : acc, 0), 0);
const twoDigits = result[5].reduce((acc, row) => acc + row.reduce((acc, num) => num === 2 ? ++acc : acc, 0), 0);

console.log(oneDigits * twoDigits);
