const R = require("ramda");

const validPasswords = R.range(382345, 843168)
    .filter(password => {
        const numbers = password.toString().split('').map(Number);
        let valid = false;
        numbers.forEach((value, index, array) => {
            if (value === array[index+1]) {
                valid = true;
            }
        });
        return valid;
    })
    .filter(password => {
        const numbers = password.toString().split('').map(Number);
        return numbers[0] <= numbers[1]
            && numbers[1] <= numbers[2]
            && numbers[2] <= numbers[3]
            && numbers[3] <= numbers[4]
            && numbers[4] <= numbers[5]
    });

console.log(validPasswords.length);
