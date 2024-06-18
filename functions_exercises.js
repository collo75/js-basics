// Exercise one - Sum of Arguments
// Works if numbers are passed in an array too

console.log(getSum(1,2,3,4,5,6,7,8,9));

function getSum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}


// Exercise two - Area of a Circle

const circle = {
    radius: 5,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.area);


// Exercise Three - Error handling


// try
try {
    const nums = [1, 2, 3, 4, 6, 1, 2, 2, 2];
    const count = countOccurrences(nums, 2);
    console.log(count);
}

//catch
catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}