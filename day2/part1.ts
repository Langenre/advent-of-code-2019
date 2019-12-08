import * as fs from 'fs';

const input = fs.readFileSync('day2/input.txt', 'utf8')
    .split(',')
    .map(Number);

let position = 0;
input[1] = 12;
input[2] = 2;
while(input[position] !== 99) {
    const operator = input[position];
    const num1 = input[input[position + 1]];
    const num2 = input[input[position + 2]];
    const outputPos = input[position + 3];
    input[outputPos] = operator === 1 ? num1 + num2 : num1 * num2;
    position += 4;
}
console.log(input[0]);