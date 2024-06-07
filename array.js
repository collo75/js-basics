console.log("Hello World!");

const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(4, 0, 'a', 'b');

console.log(numbers);

// Finding an element
console.log(numbers.indexOf(1));

numbers.splice(7, 0, 1)

// Finding last element of
console.log(numbers.lastIndexOf(1));

// Check if element exists
console.log(numbers.includes(9));

// Finding reference type elements
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'},
]

const course = courses.find(function (course) {
    return course.name === 'b';
})

console.log(course);

// A cleaner way of doing the same find - with Arrow function
const course1 = courses.find(course => course.name === 'a');

console.log(course1);

// Removing elements
const digits = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9,10,11,12,13,14,15];
console.log(digits);

// End
const last = digits.pop();
console.log(digits);
console.log(last);

// Beginning
const first = digits.shift();
console.log(digits);
console.log(first);

// Middle
const middle = digits.splice(3, 1);
console.log(digits);
console.log(middle);

// Emptying an array
//numbers = []; // Okay, but if another array references this one, it will not be removed from memory

numbers.length = 0;
console.log(numbers);

// Combining and slicing arrays
const one = [1, 2, 3];
const two = [4, 5, 6];

combined = one.concat(two);
console.log(combined);

const slice = combined.slice(1, 4)
console.log(slice);

const slice2 = combined.slice(3)
console.log(slice2);

// Combine using spread operator
const joined = [...one, ...two];
console.log(joined);

// Copy using spread operator
const copy = [...joined];
console.log(copy);

// Iterating an array
for (let digit of digits)
    console.log(digit);

// Or use a callnack function which allows more than one parameter
digits.forEach((digit, index) => console.log(index, digit));

// Joining array elements
const joined2 = digits.join('|');
console.log(joined2);

// Splitting strings into an array and combining them
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined2 = parts.join('-');
console.log(combined2);

// Sorting arrays
const num = [3, 1, 2]
num.sort();
console.log(num);

num.reverse();
console.log(num);

// Sorting objects in arrays
const subjects = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javascript'},
];

subjects.sort(function (a, b) {
    
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(subjects);

//Testing the elements of an array
const newnumbers = [1, 2, 3, -4, 4, 5]
const allPositive = newnumbers.every(function (value) {
    return value >= 0;
});

console.log(allPositive);

const atLeastOnePositive = newnumbers.some(function (value) {
    return value >= 0;
});

console.log(atLeastOnePositive);


// Filtering an array
const filtered = newnumbers.filter(n => n >= 0);

console.log(filtered);

// Mapping an array
const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

const labels = filtered.map(n => ({ value: n }));
console.log(labels);

// Chaining filter and map together

const items2 = newnumbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }));

console.log(items2);

// Reducing an array
const sum = digits.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);

