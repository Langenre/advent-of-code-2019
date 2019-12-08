import * as fs from 'fs';

const input = fs.readFileSync('day5/input.txt', 'utf8')
    .split(',')
    .map(Number);

const inputValue = 5;

let position = 0;

while(input[position] !== 99) {
    const operation = input[position++];
    const opcode = operation % 100;
    const firstParameterMode = Math.floor(operation % 1000 / 100);
    const secondParameterMode = Math.floor(operation % 10000 / 1000);

    switch(opcode) {
        case 1: {
            const value1 = getValue(position++, firstParameterMode);
            const value2 = getValue(position++, secondParameterMode);
            const target = input[position++];
            input[target] = value1 + value2;
            break;
        }
        case 2: {
            const value1 = getValue(position++, firstParameterMode);
            const value2 = getValue(position++, secondParameterMode);
            const target = input[position++];
            input[target] = value1 * value2;
            break;
        }
        case 3: {
            const target = input[position++];
            input[target] = inputValue;
            break;
        }
        case 4: {
            firstParameterMode === 0 ? console.log(input[input[position++]]) : console.log(input[position++])
            break;
        }
        case 5: {
            const value1 = getValue(position++, firstParameterMode);
            const value2 = getValue(position++, secondParameterMode);
            if (value1 != 0) {
                position = value2;
            }
            break;
        }
        case 6: {
            const value1 = getValue(position++, firstParameterMode);
            const value2 = getValue(position++, secondParameterMode);
            if (value1 === 0) {
                position = value2;
            }
            break;
        }
        case 7: {
            const value1 = getValue(position++, firstParameterMode);
            const value2 = getValue(position++, secondParameterMode);
            const target = input[position++];
            input[target] = value1 < value2 ? 1 : 0;
            break;
        }
        case 8: {
            const value1 = getValue(position++, firstParameterMode);
            const value2 = getValue(position++, secondParameterMode);
            const target = input[position++];
            input[target] = value1 == value2 ? 1 : 0;
            break;
        }
    }
}

function getValue(pos, mode) {
    return mode === 0 ? input[input[pos]] : input[pos];
}