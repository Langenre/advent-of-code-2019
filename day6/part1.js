const fs = require("fs");

const relations = []

const input = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .map(str => str.split(')'))
    .forEach(rel => relations[rel[1]] = rel[0]);


for (let point of Object.keys(relations)) {
    findByParent(point);

}