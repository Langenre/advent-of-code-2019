import * as fs from 'fs';

const input = fs.readFileSync('day2/input.txt', 'utf8')
    .split(',')
    .map(Number);

const expected = 19690720;
for(let noun = 0; noun <= 99; noun++) {
    for(let verb= 0; verb <= 99; verb++) {
        let draft = [...input];
        let position = 0;
        draft[1] = noun;
        draft[2] = verb;
        while(draft[position] !== 99) {
            const operator = draft[position];
            const num1 = draft[draft[position + 1]];
            const num2 = draft[draft[position + 2]];
            const outputPos = draft[position + 3];
            draft[outputPos] = operator === 1 ? num1 + num2 : num1 * num2;
            position += 4;
        }
        if (draft[0] === expected) {
            console.log(100*noun+verb);
        }
    }
}