const fs = require("fs");

const relations = []

const input = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .map(str => str.split(')'))
    .forEach(rel => relations[rel[1]] = rel[0]);


let globalCount = 0;
for (let [child, parent] of Object.entries(relations)) {
    let count = 0;
    while (parent !== undefined) {
        count++;
        parent = relations[parent];
    }
    globalCount += count;
}

console.log(globalCount);