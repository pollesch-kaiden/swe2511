## Introduction

The purpose of this assignment is to introduce you to Node.js for writing server-side JavaScript.

For this assignment, you may be asked to answer questions and/or write some code.  Provide complete answers to all written questions:  When asked for examples, be specific.  Submit your answers in a document separate from code.

Include source files for all programs in your submission.  Follow good styling for programming questions and provide complete documentation (comment blocks, inline comments for complicated code, etc.).

Work on the assignment is to be done with ***your assigned group***.  You are welcome to collaborate with class members, but the submitted assignment must be the work of only your group.

## Install Node.js

1. Follow the instructions on the [Node.js: Installation and Setup](https://faculty-web.msoe.edu/lembke/courses/swe2511/InstallNodejs.html)
2. Using a new or existing WebStorm project download and add the [```RunMe.mjs```](src/RunMe.mjs) file.
3. View the source for [```RunMe.mjs```](src/RunMe.mjs).  In your own words, what does this script do?
4. Execute [```RunMe.mjs```](src/RunMe.mjs)
5. Capture the output and provide a copy as part of your submission

***NOTE:*** All group members should follow the instructions for installing Node.js.  Only one submission for the group is necessary.

## Node.js vs BOM

1. Previously you were able to use the ```window.prompt``` function to retrieve input form the user and ```window.alert``` to send a pop-up message to the user.<br/>
   Write a script that uses ```window.prompt``` asking the user for their name, then send a message using ```window.alert``` greeting the user by name.  Does this work?  Why or why not?

2. Node.js provides a different mechanism for retrieving user input.
   - Read through the "Working with Input" in the following tutorial: [https://www.codecademy.com/article/getting-user-input-in-node-js](https://www.codecademy.com/article/getting-user-input-in-node-js) to become familiar with the [```readline```](https://nodejs.org/api/readline.html) package.
   - Using the [```readline```](https://nodejs.org/api/readline.html) packages, write the correct Node.js code to prompt the user for his/her name and print out a greeting.   Include the source in your submission.<br/>
         What is different about the way that readline works over ```window.prompt``` and ```window.alert```?

***NOTE:*** When including packages for node.js make sure you are using the ECMA Script Module (ESM) method.  For example:

```javascript
import * as readline from 'node:readline';
```

***NOTE:*** To use force Node.js to interpret your file as an ECMA Script Module (ESM), make sure the file has the extension ```.mjs```.

## Parse a URL with Node.js

Node.js is a popular language used to write web servers, which send HTTP responses to HTTP requests.  Part of each HTTP request includes a requested resource field.  The requested resource often includes additional information known as a query string: [https://en.wikipedia.org/wiki/Query_string](https://en.wikipedia.org/wiki/Query_string).

1. Research the query string - be sure to cite your sources
   1. What information does it contain?
   2. Give an example of what a query string is used for?

2. Research documentation for the [```url```](https://nodejs.org/api/url.html) package.  What does this package provide?

3. Using the ```url``` package write a Node.js script that:
   1. Prompts the user to input a URL
   2. Parses the URL to retrieve the query string
   3. Print query string parameter keys and values to the console.

***NOTE:*** When including packages for node.js make sure you are using the ECMA Script Module (ESM) method.  For example:

```javascript
import url from 'node:url';
```

***NOTE:*** To use force Node.js to interpret your file as an ECMA Script Module (ESM), make sure the file has the extension ```.mjs```.

## Accessing the File System in Node.js

Servers written in Node.js often have to access the file system to send a file in the body of an HTTP response.

1. Research the documentation for the [```fs```](https://nodejs.org/api/fs.html) package.

2. Using the ```fs``` package, write a Node.js script that:
   1. Prompts the user for a file name
   2. Reads the contents of the file and prints the contents to the console
      1. If the file does not exist, print an error to the console
      2. If the file size is greater than 50 bytes, print out only the first 50 bytes and then print an ellipsis (...)

***NOTE:*** When including packages for Node.js make sure you are using the ECMA Script Module (ESM) method.  For example:

```javascript
import * as fs from 'node:fs';
```

***NOTE:*** To use force Node.js to interpret your file as an ECMA Script Module (ESM), make sure the file has the extension ```.mjs```.

## Third Party Packages

Node.js allows for the installation and use of packages written by others outside the Node.js developers.  One popular repository for third party use the "Node Package Manager" (npm) to access [https://npmjs.org](https://npmjs.org) which consists of over [1 million packages](https://blog.npmjs.org/post/615388323067854848/so-long-and-thanks-for-all-the-packages).

Search the npm website and find 2 packages that you find interesting.  Document there name and use as part of your submission.  Be sure to cite your sources.

## Express

Express is a third party package for Node.js that simplifies the creation of a web server to provide responses to HTTP requests.

Express is a third party library provided in the npm repository.  To install third party libraries, you must prepare a Node.js module project.  This can be performed by setting up an ```es6``` project using ```npm```.  The ```es6``` project informs Node.js to create a new ECMA Script Module that will utilize third party libraries.

1. Using npm install express
   1. Open the terminal in your WebStorm project (it's at the bottom)
   2. Run ```npm init es6``` to initialize your project to use npm<br/>
      ***NOTE:*** Do ***NOT*** forget to include ```es6``` on the command
   3. Install express by running ```npm install express```.
2. Explore the documentation for express, specifically make sure you read the following:
   - [Express Hello World](http://expressjs.com/en/starter/hello-world.html)
   - [Express Basic Routing](http://expressjs.com/en/starter/basic-routing.html)
   - [Static Files](http://expressjs.com/en/starter/static-files.html)
   - [Express Routing](http://expressjs.com/en/guide/routing.html) paying specific attention to [route parameters](http://expressjs.com/en/guide/routing.html#route-parameters)
3. Create a static web server script to serve pages in your project's ```public``` directory.  Add at least one HTML file and at least one image file to the directory.  Make sure your HTML file references your image.
4. What is the difference between a query parameter and a route parameter?
5. How do you retrieve the query and route parameters using express?  Provide a code example of each.

## Using Express to Build an API

In addition to serving web pages, often our web servers provide a means for a client to retrieve data or process some computation.  For example, we used the National Weather Service application programming interface (API) to retrieve the current weather forecast for Milwaukee and displayed the data in a table.

### Arithmetic API

Using your knowledge of express, routing, and query parameters, create an HTTP server in Node.js for a math API.  Your HTTP server will not return files but send data back to the caller as JSON.  Your API should support the following routes (also often referred to as end-points):

- http://localhost:3000/add?a=X&b=Y <br>
  Takes two parameters ('a' and 'b').  'X' and 'Y' are replaced with the values<br>
  Returns a JSON response with the two values added together (a + b)<br>

- http://localhost:3000/subtract?a=X&b=Y <br>
  Takes two parameters ('a' and 'b).  'X' and 'Y' are replaced with the values<br>
  Returns a JSON response with the result of subtracting b from a (a – b)

- http://localhost:3000/mulitply?a=X&b=Y <br>
  Takes two parameters ('a' and 'b).  'X' and 'Y' are replaced with the values<br>
  Returns a JSON response with the two values multiplied together (a * b)

- http://localhost:3000/divide?a=X&b=Y <br>
  Takes two parameters ('a' and 'b).  'X' and 'Y' are replaced with the values<br>
  Returns a JSON response with the result of a divided by b (a / b)

NOTE: Input values are ***query*** parameters and must be numbers (floating point is valid) and can be greater than, less than or equal to zero.

The resulting JSON sent back to the client as the result of an operation must be formatted as follows:

```json
{
    "a": X,
    "b": Y,
    "result": VALUE,
}
```

The values for 'a' and 'b' are sent back to the user as well as the value of the result.

If the user specifies an invalid value or some other error occurs, then respond with an error response:

```json
{
    "a": X,
    "b": Y,
    "error": ERROR,
}
```

Send the input values back to the user and an error message indicating what happened.

### Additional Requirements and Tips

- Use express to set up routes for each endpoint

- If the user sends a request to a route something other than the 4 above, your HTTP server needs to send back a 404 not found HTTP response.

- While add and multiply are associative, subtract and divide are not.  Always perform your operations with ```a``` first followed by ```b```.  For example: a / b

- You can't divide by zero so your end-point for ```/div``` should check for this and send back an error response with an appropriate message if b is zero

- Both parameters ```a``` and ```b``` are required.  If either are not specified, make sure to send back an error response with an appropriate message.

- The express response.json API: [https://expressjs.com/en/api.html#res.json](https://expressjs.com/en/api.html#res.json) makes creating a JSON string from a JavaScript object easy.

- You do not need to serve a web page for the server API.  To test you can send a request directly through the URL.  For example:

   ```text
   http://localhost:3000/add?a=10&b=15.2
   ```

### Additional Request and Response Examples

- Request: http://localhost:3000/add?a=10&b=17.2 <br>
  Response:

   ```json
   {
      "a": 10,
      "b": 17.2,
      "result": 27.2
   }
   ```

- Request: http://localhost:3000/divide?a=10&b=11 <br>
  Response:

   ```json
   {
      "a": 10,
      "b": 11,
      "result": 0.9090909090909091
   }
   ```

- Request: http://localhost:3000/multiply?a=cdef&b=11 <br>
  Response:

   ```json
   {
      "a": "cdef",
      "b": 11,
      "error": "Invalid input value"
   }
   ```

- Request: http://localhost:3000/multiply?a=10.4 <br>
  Response:

   ```json
   {
      "a": 10.4,
      "error": "Parameter b is required"
   }
   ```

- Request: http://localhost:3000/asdfafdsafs?a=10&b=11 <br>
  Response: HTTP 404 Not Found

## Deliverables

When you are ready to submit your assignment prepare your repository:

- Make sure your name, assignment name, and section number are in comments on ALL HTML, CSS, and JS file(s).
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
- (10 Points) Code Structure
  - Readable code/file structure
  - Code is well documented
- (10 Points) Completion of Install Node.js
- (10 Points) Completion of Node.js vs BOM
- (10 Points) Completion of Parse a URL with Node.js
- (10 Points) Completion of Accessing the File System in Node.js
- (10 Points) Completion of Third Party Packages
- (10 Points) Completion of Express
- (20 Points) Completion of Using Express to Build an API
  - Correct retrieval of the query parameters (a and b)
  - Correct response for valid input
  - Correct response for invalid input
  - Correct response for an invalid operation
