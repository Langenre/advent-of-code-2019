const fs = require("fs");
const R = require("ramda");

const input = fs.readFileSync('input.txt', 'utf8')
    .split('\n')
    .map(R.split(')'))
    .reduce((acc, val) => {
        acc[val[1]] = val[0];
        return acc;
    }, []);


let parentList1 = [];
let parent1 = input['YOU'];
while (parent1 !== undefined) {
    parentList1.push(parent1);
    parent1 = input[parent1];
}

let parentList2 = [];
let parent2 = input['SAN'];
while (parent2 !== undefined) {
    parentList2.push(parent2);
    parent2 = input[parent2];
}

let firstCommonParent;
parentList1.forEach(parent => {
    if (R.contains(parent, parentList2) && firstCommonParent === undefined) {
        firstCommonParent = parent;
    }
});

const distance1 = R.findIndex(obj => obj === firstCommonParent, parentList1);
const distance2 = R.findIndex(obj => obj === firstCommonParent, parentList2);

console.log(distance1 + distance2);
