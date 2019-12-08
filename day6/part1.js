const fs = require("fs");
const R = require("ramda");

const input = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .map(R.split(')'))
    .reduce((acc, val) => {
        acc[val[1]] = val[0];
        return acc;
    }, []);


let count = 0;
for (let parent of Object.values(input)) {
    while (parent !== undefined) {
        count++;
        parent = input[parent];
    }
}

console.log(count);