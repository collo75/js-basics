console.log("Hello World!");


console.log(biggestNumber(124, 89));
function biggestNumber(a, b) {
    return (a > b) ? a : b;
}



console.log(isLandscape(800,400))
function isLandscape(width, height) {
    return (width > height);
}

// FizzBuzz
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a Number'


const output = fizzBuzz(24);
console.log(output);

function fizzBuzz(input) {
    if (isNaN(input)) 
        return NaN

    if (input % 3 == 0 && input % 5 == 0) 
        return "FizzBuzz";

    if (input % 3 == 0) 
        return "Fizz";

    if (input % 5 == 0) 
        return "Buzz";

    return input;
}

// checkSpeed
// Speed limit = 70
// 5km over => 1 point
// Math.floor(1.3)
// 12 points = suspended

const warning = checkSpeed(85);
console.log(warning);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        return "You're doing fine";
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        return "You're suspended";
    
    return "You're speeding at " + speed + "km/h, and now you have "
        + points + " points on your licence"
}



// showNumbers
// Display all numbers up to "limit" and state if ODD or EVEN

showNumbers(8);

function showNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        const message = (i % 2 !== 0) ? "ODD" : "EVEN";
        console.log(i, message)
    }
}


// countTruthy
// Truthy or Falsy

const array = [1, 2, 3, true];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
}


// showProperties
// List all propoerties of an object that have the type 'string'

const movie = {
    Title: 'Braveheart',
    ReleaseYear: 1996,
    Rating: 9,
    Director: 'Mel Gibson'
}

showProperties(movie);
function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}


// sum function
// add all the multiples of 3 and 5 up to the specified limit

console.log(sum(20));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}


// Average Grade
// take the average grade and give it a symbol A, B, C etc
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [90, 80, 98, 2, 90, 80, 98, 95]
console.log(calculateGrade(marks))

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    return "A";
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}



// Show stars exercise
showStars(6);

function showStars(rows) {
    for (let row = 0; row <= rows; row++) {
        console.log("*".repeat(row))
    }
}




// showPrimes
// List all prime numbers up to the limit provided

showPrimes(30);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}