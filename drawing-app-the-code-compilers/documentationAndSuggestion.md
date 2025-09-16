# Documentation
## Feature 1 - Color Picker
- Give a paragraph description of what it is and how to use it
  - The color picker works by taking the color that is newly selected, or is given values (RGB) and makes the cursor on the canvas that color. 
- How does the function work? 
  - There is an eventListener for when the color is changed and then the updateColor reference is called so that the cursor color is actually updated.
- How do you use the function? 
  - To use this function all that is needed is to select the color picker box right below the canvas, and then choose a new color and then the pointer is updated to the new color.
- What is it useful for?
  - This would be useful so that there is customization for what the user wants, making the user experience better for the end user, and it allows them to be more creative on the canvas.

## Feature 2 - Changing Background Color of Canvas
- Give a paragraph description of what it is and how to use it
  -  Changing the background color of a canvas in an HTML file involves modifying the color property of the canvas element, which is done using JavaScript. This process allows the user to set a specific color to the background of the canvas area, enhancing the visual appeal or clarity of the content displayed on the canvas. 
- How does the function work? 
    - The function works by targeting the canvas element and updating its style attributes with ```document.getElementById()``` to the desired color value. When the color is updated, the browser re-renders the canvas with the new background color
- How do you use the function? 
  -  To use this function, we had to include an identifier for your canvas element in the HTML file. then use JS with the ```backgroundColor``` property and set that to what is picked on the color picker.
- What is it useful for? 
  - This technique is useful for various purposes, such as enhancing the user interface, making specific parts of the canvas more distinguishable, or setting a theme for your canvas-based applications

## Feature 3 - Erasing the Entire Canvas (Clearing it)
- Give a paragraph description of what it is and how to use it
  -  Erasing the entirety of the canvas in our application is done through a button located at the bottom of the webpage. It involves using the ```clearRect``` method with parameters that specify the entirety of the canvas.
- How does the function work? 
  - The function works by specifying a rectangle (typically covering the entire canvas) to clear out. When the clearRect method is called with the dimensions covering the entire canvas (ctx.clearRect(0, 0, canvas.width, canvas.height);), it effectively wipes out all the drawings and sets the canvas to a blank state while maintaining the background color.
- How do you use the function? 
  - To use this function we first access the canvas element and its content using JS ```document.getElementById()``` then clear it out calling ```ctx.clearRect``` all through a function called button press by the user.
- What is it useful for?
  - This technique is useful for applications where you need to continuously update or refresh the canvas content, such as in interactive drawings, games, or animations.

## Feature 4 - Creating a canvas Eraser
- Give a paragraph description of what it is and how to use it
  -  The local eraser acts as one of the 7 "penModes" that final program has. It is able to be chosen via the radio list menu located under color pickers both the pen/pencil and the canvas background.
- How does the function work? 
  - The function works much the same way that regular non-feature drawing. The actual code is near identical with the only major differences between them being ```clearRect``` was called instead of ```fillRect``` and that I expanded the bounds of the rectangle for the clearing.
- How do you use the function? 
  - The function is contained within the standard draw function that was created as part of the first part of the lab. It just uses a conditional statement to check which of the radio items is currently selected before handling the mouse press event.
- What is it useful for?
  - A local eraser is useful for users as it allows them to fix small mistakes that they made without having to start over by clearing the entirety of the canvas.

## Feature 5 - Switching Between Pen and Pencil (Solid Lines versus Boxes/Dots)
- Give a paragraph description of what it is and how to use it
  -  The pen and pencil in combination with the size options that are provided by feature 6 make up 6 of the 7 different "penModes." They are selectable using the same radio list menu as the local eraser from the previous feature.
- How does the function work? 
  - The "pencil" penMode as I coined it is the standard drawing mode that was created as part of the first part of the lab. The "pen" mode as I coined it uses a combination of the ```arc``` function with a radius of 0, and the ```stroke``` method.
- How do you use the function? 
  - The "functions" for both pen and pencil drawing modes are both parts of the general draw method with a combination of a variable holding the currently selected radio item and a set of conditional statements within the draw method that dictates which context functions the method calls.
- What is it useful for?
  -  These options for different drawing modes gives the users significantly greater creative freedom in what they are able to create on the canvas.

## Feature 6 -  Changing the Size of the Pen/Pencil
- Give a paragraph description of what it is and how to use it
  -  You are able to switch between three pre-made sizes for both the pen and pencil drawing modes. The options are small(1px), medium(5px), and large(10px). They are selected via the same radio list menu as the previous two features.
- How does the function work? 
  - These functions expand on the same conditionals as the previous feature, but rather than changing the function that is called by the draw method, it is changes the parameters of the functions to match the larger, or smaller, sizes.
- How do you use the function? 
  - The function is able to be used through a simple mouse click event when with a radio menu selection with the status of a variable the determines the "penMode" which is checked through the aforementioned conditional.
- What is it useful for?
  - Being able to change the size of the pen/pencil allows for a significantly larger amount of detail to be put into drawings the users are putting on the canvas.

# Suggestions / Liked Features
We really liked the freedom that implementing any 6 features. It gave the freedom to explore the parts of using the canvas that we enjoyed. It made the lab significantly more fun than had it been required features to implement.
We did not have any suggestions on improving the lab.