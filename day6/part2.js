const fs = require("fs");
const R = require("ramda");

const relations = [];

const input = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .map(str => str.split(')'))
    .forEach(rel => relations[rel[1]] = rel[0]);


let parentsYOU = [];
let parentYOU = relations['YOU'];
while (parentYOU !== undefined) {
    parentsYOU.push(parentYOU);
    parentYOU = relations[parentYOU];
}

let parentsSAN = [];
let parentSAN = relations['SAN'];
while (parentSAN !== undefined) {
    parentsSAN.push(parentSAN);
    parentSAN = relations[parentSAN];
}

parentsSAN.forEach(parent => {
    if (R.contains(parent, parentsYOU)) {
        console.log(parent)
    }
});

// ZCZ

const way1 = R.findIndex(obj => obj === 'ZCZ', parentsYOU);
const way2 = R.findIndex(obj => obj === 'ZCZ', parentsSAN);
console.log(way1+way2);
