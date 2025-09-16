/*
 * Class: SWE2511 - Calculator
 * Name: Kaiden Pollesch
 * Class Section: 111
 * Calculator math functions
 */

import { isDefined } from './utilities.js';

/**
 * arithmeticOperations - object of operations for arithmetic
 * @type {{minus: (function(*, *): *), plus: (function(*, *): *), divide: (function(*, *): *), multiply: (function(*, *): *)}}
 */
const arithmeticOperations = {
    plus: (a, b) => { return a + b; },
    minus: (a, b) => { return a - b; },
    multiply: (a, b) => { return a * b; },
    divide: (a, b) => { return a / b; }
}

/**
 * doArithmetic - performs an arithmetic operation
 * @param a - value for the operation
 * @param b - value for the operation
 * @param op - operation (string) to perform
 * @returns {*} - the result
 * @throws an error if the operation does not exist
 */
export const doArithmetic = (a, b, op) => {
    if(isDefined(arithmeticOperations[op])) {
        return arithmeticOperations[op](a, b);
    }
    throw new Error(`Operation ${op} is not defined`);
}

/**
 * computeDiscriminant - computes the discriminant of the quadratic formula
 * @param a
 * @param b
 * @param c
 * @returns {number} the discriminant result
 */
const computeDiscriminant = (a, b, c) => {
    return b * b - 4 * a * c;
}

/**
 * doQuadratic - computes the quadratic formula
 * @param a
 * @param b
 * @param c
 * @returns {number[]|undefined} - array of solutions or undefined if there is no real solution
 */
export const doQuadratic = (a, b, c) => {

    const discriminant = computeDiscriminant(a, b, c);
    if(discriminant < 0) {
        return undefined;
    }

    const solA = (-1 * b + Math.sqrt(discriminant)) / (2 * a);
    const solB = (-1 * b - Math.sqrt(discriminant)) / (2 * a);

    if(solA === solB) {
        return [solA];
    }
    return [solA, solB];
}

/**
 * computeGCD - computes the greatest common divisor
 * @param a
 * @param b
 * @returns {number} - the greatest common divisor
 * @throws an error if a or b are not positive integers
 */
export const computeGCD = (a, b) => {
    while(b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

/**
 * computeFactorial - computes the factorial of a non-negative integer
 * @param n - non-negative integer
 * @returns {number} - the factorial of n
 * @throws an error if n is not a non-negative integer
 */
export const computeFactorial = (n) => {
    if(n === 0 || n === 1) {
        return 1;
    }
    return n * computeFactorial(n - 1);
}