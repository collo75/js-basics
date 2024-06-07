// Exercise one - arrayFromRange
const numbers = arrayFromRange(4, 10)

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}


// Exercise two - replace includes with custom includes function
console.log(numbers.includes(6));

function includes(array, searchElement) {
    return array.indexOf(searchElement);
}