import * as R from 'ramda';
import * as fs from 'fs';

const input = fs.readFileSync('day3/input.txt', 'utf8')
    .split(',')

const input2 = fs.readFileSync('day3/input2.txt', 'utf8')
    .split(',')

let grid = [];

for (let xx = -20000; xx < 20000; xx++) {
    grid[xx] = []
}


let intersections = [];

let x = 0;
let y = 0;

input.forEach(operation => {

    const distance = parseInt(operation.match(/\d+/)[0], 10);

    const direction = operation.charAt(0);

    switch (direction) {
        case 'R': {
            R.range(1, distance + 1).forEach(() => {
                x++;
                grid[x][y] = true;
            });
            break;
        }
        case 'L': {
            R.range(1, distance + 1).forEach(() => {
                x--;
                grid[x][y] = true;
            });
            break;
        }
        case 'U': {
            R.range(1, distance + 1).forEach(() => {
                y++;
                grid[x][y] = true;
            });
            break;
        }
        case 'D': {
            R.range(1, distance + 1).forEach(() => {
                y--;
                grid[x][y] = true;
            });
            break;
        }
    }
});

x = 0
y = 0

input2.forEach(operation => {

    const distance = parseInt(operation.match(/\d+/)[0], 10);

    const direction = operation.charAt(0);

    switch (direction) {
        case 'R': {
            R.range(1, distance + 1).forEach(() => {
                x++;
                if (grid[x][y] === true) {
                    intersections.push([x,y])
                }
            });
            break;
        }
        case 'L': {
            R.range(1, distance + 1).forEach(() => {
                x--;
                if (grid[x][y] === true) {
                    intersections.push([x,y])
                }
            });
            break;
        }
        case 'U': {
            R.range(1, distance + 1).forEach(() => {
                y++;
                if (grid[x][y] === true) {
                    intersections.push([x,y])
                }
            });
            break;
        }
        case 'D': {
            R.range(1, distance + 1).forEach(() => {
                y--;
                if (grid[x][y] === true) {
                    intersections.push([x,y])
                }
            });
            break;
        }
    }
});

const resultList = intersections.map(point => Math.abs(point[0]) + Math.abs(point[1]));

console.log(resultList.filter(val => val < 7000))

