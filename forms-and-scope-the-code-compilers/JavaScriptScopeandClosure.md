1. Scope and Closure
   - JavaScript Scope - https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/, Scope in JavaScript – Global vs Local vs Block Scope Explained, Adekola Olawale 
   - JavaScript Closure - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures, Closures, Mozilla Dev Group
2. Variable scope is where a variable is accessible or visible by the other code. 
```javascript
let globalVar = "global variable";

function exampleFunction() {

let functionVar = "function-scoped variable";
console.log(globalVar);
console.log(functionVar);
}

exampleFunction();

console.log(globalVar);
```

3. Is the access to 'myValue' on line 7 allowed without error? Why or why not?
   - Yes, the access to ```myValue``` on line 7  is allowed without error. It is because the argument passed the function and it references ```myObject```
   - The code will print 3 to the console in line 12. This is because within the function, the property of the ```myObject``` is modified from ```2``` to ```3```