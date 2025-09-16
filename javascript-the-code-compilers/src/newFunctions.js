/*
 * Course SWE2511 111
 * Fall 2024
 * Lab 3 - JavaScript
 * Names: Kaiden Pollesch & Matthew Schulz
 * Created: 9/18/2024
 */


//This function is for the first point in the lab.
function countNotMultiples(k, n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (i % k !== 0) {
            count++;
        }
    }

    return count;
}

//This function is for the second point in the beginning of the lab.
function arrayOfNotMultiples(k, n) {
    let array = [];

    for (let i = 1; i <= n; i++) {
        if (i % k !== 0) {
            array.push(i);
        }
    }
    return array;
}

function nthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            count++;
        }
        num++;
    }
    return num - 1;
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true
}

arr = [
    [ 'abc', 'def', 'hij' ],
    [ 'aad', 'abc', 'efg' ],
    [ 'ppp', 'sed', 'abc' ],
    [ 'up', 'in', 'down' ]
];

function functionFour(arr, str) {
    return arr.map(innerArr =>
    innerArr.filter(word => !word.includes(str))
    );
}