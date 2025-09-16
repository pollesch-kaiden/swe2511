## Introduction

The purpose of this assignment is to introduce you to the JavaScript programming language.

For this assignment, you may be asked to answer questions and write some code.  Provide complete answers to all written questions:  When asked for examples, be specific.  Submit your answers in a document separate from code.

Include source files for all programs in your submission.  Follow good styling for programming questions and provide complete documentation (comment blocks, inline comments for complicated code, etc.).

Work on the assignment is to be done with ***your assigned group***.  You are welcome to collaborate with class members, but the submitted assignment must be the work of only your group.

## Background and References

In this assignment you will be researching and using JavaScript.  The standard is maintained by the European Computer Manufacturers Association (ECMA).  In addition to what was discussed in class the following resources may be helpful:

- European Computer Manufacturers Association (ECMA) home page - [https://www.ecma-international.org/](https://www.ecma-international.org/)
- JavaScript/ECMAScript Specification - [https://www.ecma-international.org/publications-and-standards/standards/ecma-262/](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- W3Schools JavaScript Tutorial - [https://www.w3schools.com/js/](https://www.w3schools.com/js/)
- Tutorials Point JavaScript Tutorial - [https://www.tutorialspoint.com/javascript/index.htm](https://www.tutorialspoint.com/javascript/index.htm)

## W3Schools Tutorial and Exercises

The JavaScript interpreter on many browsers is 'forgiving' in the errors that it presents the users.  This is both good and bad to a programmer.

- Good - Mistakes like missing semicolons and variable initialization don't cause errors
- Bad - If mistakes go unnoticed they can escalate into serious logic problems

However, it is always good programming practice (citation needed) to ensure that our JavaScript code is well written despite 'forgiving' browsers.

Complete the following JavaScript exercise sections and read through their corresponding tutorials from W3Schools [https://www.w3schools.com/js/exercise_js.asp](https://www.w3schools.com/js/exercise_js.asp):

- JS Variables
- JS Operators
- JS Data Types
- JS Functions
- JS Objects
- JS Events (optional)
- JS Strings
- JS String Methods
- JS Arrays
- JS Array Methods
- JS Array Sort
- JS Dates
- JS Math
- JS Comparisons
- JS Conditions
- JS Switch
- JS For Loops
- JS While Loops
- JS Break Loops
- JS HTML DOM (optional)

***NOTE:*** Those labeled with 'optional' are optional

When you have completed the exercises, create a screen capture, or other method to show proof of completion,  and include this in your submission.

## JavaScript Programming

### Creating Functions

Using your knowledge of JavaScript write the JavaScript code to perform the following:

1. Write a function that takes two input parameters ('k' and 'n') and returns the ***count*** all the numbers from 1 through 'n' (inclusive) that are ***not*** multiples of 'k' (e.g. k=3, n=14: |{1,2,4,5,7,8,10,11,13,14}| = 10).<br/>
   NOTE: Only return the count of the numbers, not the numbers themselves.</br>
   You can assume that both 'k' and 'n' are integers and >= 1

2. Write a function that takes two input parameters ('k' and 'n') and returns an array of all the numbers from 1 through 'n' (inclusive) that are ***not*** multiples of 'k' (e.g. k=3, n=14: {1,2,4,5,7,8,10,11,13,14}).</br>
   You can assume that both 'k' and 'n' are integers and >= 1

3. Write a function that takes a single input 'n' and returns the 'nth' prime number. (2 is the 1st prime number).

4. Write a function that takes two input parameters (an array 'arr' and a string 'str').  Each element in the array (arr) is an ***array of strings*** (NOTE: the input is an array of arrays).
    - The function will return an array - each element in the returned array will be the elements of the input array where the strings containing 'str' are removed
    - For example:

      ```javascript
      arr = [
         [ 'abc', 'def', 'hij' ],
         [ 'aad', 'abc', 'efg' ],
         [ 'ppp', 'sed', 'abc' ],
         [ 'up', 'in', 'down' ]
      ];
      str = 'abc';
 
      return_value = [
         [ 'def', 'hij' ],
         [ 'aad', 'efg' ],
         [ 'ppp', 'sed' ],
         [ 'up', 'in', 'down' ]
      ];
      ```
      
### Manipulating Arrays

The [src/arrays.js](src/arrays.js) script contains code to generate an array of random numbers.

Write JavaScript to complete the arrays.js file to create several additional variables:

- filtered_array - contains only the elements if 'array' that are greater than 8
- tripled_array - contains the elements of 'filtered_array' multiplied by 3
- sum - contains the sum of all the elements of 'tripled_array'

The arrays.js script already prints out the variables.  All you have to do is complete the code to assign the correct value(s) to each variable.

You are also given a [src/arrays.html](src/arrays.html) which contains a blank HTML document that includes the quad.js script.  You can use this HTML document to execute your JavaScript in the browser.

Include your modified arrays.js in your submission.

### Quadratic Function

The [src/quad.js](src/quad.js) script contains code to prompt the user for the a, b, c values used for a quadratic equation as well as a 'count' that is greater than 0:

```
a*x^2 + b*x + c = 0
```

You can assume all input values are actual numbers, however a, b, and c may be floating point numbers, positive, or negative.  The value of count will always be an integer with value > 0.

1. Write JavaScript to determine the possible x values of the equation<br/>
   The solutions for x can be found using the quadratic formula:

   ```
   -b ± √(b^2 - 4*a*c)
   -------------------
           2a 
   ```
   
   Once you have found the possible values for x print them out to the console.<br/>
   If both values are the same print out both.
   <br/></br>
   ***NOTE:*** Recall that ```b^2 - 4*a*c``` is the discriminant and if it is less than zero, there is no 'real' solution to the equation.  If this happens print out ```no real solution``` to the console.

2. After printing the solution to the quadratic equation, evaluate the following equation for each integer value of x from 0 until the 'count' input (include the count input as a value for x):

   ```
   y(x) = a*x^2 + b*x + c
   ```

An example output for the values a=1, b=5, c=6, and with a count of 10 would be:

```
x = -2
x = -3
y(0) = 6
y(1) = 12
y(2) = 20
y(3) = 30
y(4) = 42
y(5) = 56
y(6) = 72
y(7) = 90
y(8) = 110
y(9) = 132
y(10) = 156
```

You are also given a [src/quad.html](src/quad.html) which contains a blank HTML document that includes the quad.js script.  You can use this HTML document to execute your JavaScript in the browser.

Include your modified quad.js in your submission.

## Deliverables

When you are ready to submit your assignment prepare your repository:

- Make sure your name(s), assignment name, and section number are in comments on ALL HTML, CSS, and JavaScript file.
- Make sure you have completed all activities and answered all questions.
- Make sure you cite your sources for all research.
- Make sure your assignment code is commented thoroughly.
- Include in your submission, a set of suggestions for improvement and/or what you enjoyed about this assignment.
- Make sure all files are committed and pushed to the main branch of your repository.

***NOTE***: Do not forget to 'add', 'commit', and 'push' all new files and changes to your repository before submitting.

### Additional Submission Notes

If/when using resources from material outside what was presented in class (e.g., Google search, Stack Overflow, etc.) document the resource used in your submission.  Include exact URLs for web pages where appropriate.

***NOTE:*** Sources that are not original research and/or unreliable sources are not to be used.  For example:

- Wikipedia is not a reliable source, nor does it present original research: [https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_is_not_a_reliable_source](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia_is_not_a_reliable_source)
- ChatGPT is not a reliable source: [https://thecodebytes.com/is-chatgpt-reliable-heres-why-its-not/](https://thecodebytes.com/is-chatgpt-reliable-heres-why-its-not/)

For more information, please see the [MSOE CS Code of Conduct](https://msoe.s3.amazonaws.com/files/resources/swecsc-computing-code-of-conduct.pdf).

To submit, copy the URL for your repository and submit the link to Canvas.

## Grading Criteria

- (5 Points) Submitted files follow submission guidelines
  - Only the requested files were submitted
  - Files are contain name, assignment, section
  - Sources outside of course material are cited
- (5 Points) Suggestions
  - List of suggestions for improvement and/or what you enjoyed about this assignment
- (20 Points) JavaScript W3Schools Exercises
- (70 Points) JavaScript Programming Exercises
  - (30 Points) Creating Functions
  - (20 Points) Manipulating Arrays
  - (20 Points) Quadratic Function