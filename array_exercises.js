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

// Exercise 3 - Except
const digits = [1,2,3,4,5,6,7,8,9,10]
const output = except(digits, [2, 3, 8]);
console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

// Exercise 4 - Moving an element
const nums = [1, 2, 3, 4, 5, 2, 2, 6, 7, 8, 9, 10]
const output2 = move(nums, 1, 6);
console.log(output2);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

// Exercise 5 - Count Occurences

const count = countOccurrences(nums, 2);

console.log(count);

function countOccurrences(array, searchElement) {
    // let counter = 0;
    // if (array.includes(searchElement)) {
    //     for (let element of array)
    //         if (element === searchElement)
    //             counter++;
    //     return counter;
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}

// Exercise 6 - Get Max
