
const { uuid } = require('uuid');

function generateMultiplesList(length, number) {
    let multiplesList = [];
    for (let i = 1; i <= length; i++) {
        multiplesList.push(number * i);
    }
    return multiplesList;
}

// Usage
const multiplesList = generateMultiplesList(10, 5); // Generates multiples of 5
console.log(multiplesList);


module.exports = { generateMultiplesList };
