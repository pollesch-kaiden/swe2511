## Introduction

The purpose of this assignment is to introduce you to HTML forms as well as JavaScript events and variable scope.

For this assignment, you may be asked to answer questions and/or write some code.  Provide complete answers to all written questions:  When asked for examples, be specific.  Submit your answers in a document separate from code.

Include source files for all programs in your submission.  Follow good styling for programming questions and provide complete documentation (comment blocks, inline comments for complicated code, etc.).

Work on the assignment is to be done with ***your assigned group***.  You are welcome to collaborate with class members, but the submitted assignment must be the work of only your group.

## W3Schools Tutorial and Exercises

### HTML Forms

Complete the following HTML exercise sections and read through their corresponding tutorials from W3Schools [https://www.w3schools.com/html/exercise.asp](https://www.w3schools.com/html/exercise.asp):

- HTML Forms
- HTML Form Attributes
- HTML Form Elements
- HTML Input Types
- HTML Input Attributes

### HTML IFrame

Complete the following HTML iframes exercise section and read through the corresponding tutorial from W3Schools:
- Tutorial: [https://www.w3schools.com/html/html_iframe.asp](https://www.w3schools.com/html/html_iframe.asp)
- Exercises: [https://www.w3schools.com/html/exercise.asp](https://www.w3schools.com/html/exercise.asp):

Then complete these activities/questions:

1. Describe the HTML iframe in your own words.  Give an example (include an HTML code file in your submission) of a use for an iframe.

2. Research HTML iframes specifically focusing on security.  What is one potential security vulnerability/concern with using an iframe?

3. Research the following attributes for an iframe.  What does each attempt so solve from a security perspective.   Describe (no code required) a use for each attribute.
   - allow
   - referrerpolicy
   - sandbox

## JavaScript Scope and Closure

1. Research JavaScript variable scope and closure.  Provide the name (e.g., URL, title of article with author, etc.) for a resource that you found particularly interesting for both.

2. Define the term variable scope as it relates to JavaScript in your own words.  Give a code example of two different types of variable scope in JavaScript.

3. Consider the following JavaScript code:

    ```javascript
    const myObject = {
        myValue: 'Hello',
        myOtherValue: 2
    };
    	
    const myFunction = (input) => {
        console.log(input.myValue);
        input.myOtherValue = 3;
    };
    
    myFunction(myObject);
    console.log(myObject.myOtherValue);
    ```
   
    ***TIP:*** The files [src/scope_q3.html](src/scope_q3.html) and [src/scope_q3.js](src/scope_q3.js) contain the source code if you want to run it in your browser.

    1. Is the access to 'myValue' on line 7 allowed without error?  Why or why not?
    2. What does the code print to the console on line 12?  Why?

4. To control access to property values in a JavaScript object a programmer writes the following:

    ```javascript
    const getMyObject = () => {
        return  {
            myValue: 'Hello'  
        };
    }
    	
    const myFunction = (input) => {
        console.log(input.myValue);
    };
    
    myFunction(getMyObject());
    ```

   ***TIP:*** The files [src/scope_q4.html](src/scope_q4.html) and [src/scope_q4.js](src/scope_q4.js) contain the source code if you want to run it in your browser.

   Does the code succeed in preventing access to 'myValue' on line 8?  Why or why not?

5. Define closure as it relates to JavaScript in your own words.  Give one advantage ***AND*** one disadvantage of using closure in JavaScript.

6. What is printed to the console when the following code is executed?  Explain how the code works?

    ```javascript
    const generateCounter = () => {
        let count = 0;
        const incrementCount = () => {
            count += 1;
            return count;
        }
        return incrementCount;
    }
    
    const counter = generateCounter();
    
    console.log(counter());
    console.log(counter());
    console.log(counter());
    ```

    ***TIP:*** The files [src/scope_q6.html](src/scope_q6.html) and [src/scope_q6.js](src/scope_q6.js) contain the source code if you want to run it in your browser.

7. What is printed to the console when the following code is executed?  Explain how the code works?  Why does the value of 'myValue' differ from 'getMyValue' when printed to the console?

    ```javascript
    const myObject = {
        getMyValue: () => {
            return this.myValue;
        },
        setMyValue: (v) => {
            this.myValue = v;
        }
    }
    
    console.log(myObject.myValue);
    console.log(myObject.getMyValue());
    
    myObject.setMyValue(10);
    console.log(myObject.myValue);
    console.log(myObject.getMyValue());
    ```

    ***TIP:*** The files [src/scope_q7.html](src/scope_q7.html) and [src/scope_q7.js](src/scope_q7.js) contain the source code if you want to run it in your browser.
   
    ***TIP:*** the ```this``` object when used in fat arrow functions follows a particular behavior.  Research how ```this``` behaves and cite your sources in your answer.

## Deliverables

When you are ready to submit your assignment prepare your repository:

- Make sure your name, assignment name, and section number are in comments on all submitted file(s).
- Make sure you have completed all activities and answered all questions.
- Make sure you cite your sources for all research.
- Make sure your assignment code is commented thoroughly.
- Include in your submission, a set of suggestions for improvement and/or what you enjoyed about this assignment.
- Make sure all files are committed and pushed to the main branch of your repository.

***NOTE***: Do not forget to 'add', 'commit', and 'push' all new files and changes to your repository before submitting.

### Additional Submission Notes

If/when using resources from material outside what was presented in class (e.g., Google search, Stack Overflow, etc.) document the resource used in your submission.  Include exact URLs for web pages where appropriate.

NOTE: Sources that are not original research and/or unreliable sources are not to be used.  For example:

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
- (10 Points) HTML Forms Exercises
- (20 Points) HTML Iframe Exercises
- (60 Points) JavaScript Scope and Closure Exercises
  - (5 Points) Question 1
  - (5 Points) Question 2
  - (10 Points) Question 3
  - (10 Points) Question 4
  - (10 Points) Question 5
  - (10 Points) Question 6
  - (10 Points) Question 7
