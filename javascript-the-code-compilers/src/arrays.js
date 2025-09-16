/*
 * Course SWE2511 111
 * Fall 2024
 * Lab 3 - JavaScript
 * Names:Kaiden Pollesch & Matthew Schulz
 * Created: 9/18/2024
 */

const ARRAY_LENGTH = 100;
const MAX_RANDOM = 20;

// Generate an array of random numbers
const array = Array.from(Array(ARRAY_LENGTH))
    .map(x => Math.floor(MAX_RANDOM*Math.random()));

// Print the numbers to the console
console.log(array);

// Create 'filtered_array' that contains only the elements of 'array' that are greater than 8
const filtered_array = array.filter(value => value > 8);

// Print the numbers in 'filtered_array'
console.log(filtered_array);

// Create a 'tripled_array' that contains the elements of 'filtered_array' multiplied by 3
const tripled_array = filtered_array.map(value => value * 3);

// Print the numbers in 'tripled_array'
console.log(tripled_array);

// Compute the sum of all elements in 'tripled_array'
const sum = tripled_array.reduce((accumulator, currentValue) => accumulator + currentValue)

// Print the sum
console.log(sum);
