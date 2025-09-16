# Working with the Discography Server
## The Discography Client Interface
1.1) The interface added a dropdown menu for you to select the criteria of which you are searching.
The interface also adds a search box to allow for text input to search by.

1.2) There were 10 entries in the table after searching for albums released in 1977.

1.3) It gives you an error message that says "Nothing matches your search criteria" and populates the table with
all the items within the database.

2.1) This block uses sticking positioning to keep the table, table head, table rows, and the cells in the table head
from scrolling off the top of the display.

2.2) This limits the total height of the table and sets the y overflow of the table to auto. It is only applied to
the div that holds the table.

2.3) The .header block is applied to the header on the top of the page that contains the MSOE logo and the words
"Prof. Jones Discography". It makes it a flex display and center aligns the items within the div.

3.1) The sticky property is what causes it to behave the way that it does.

3.2) This property works by fixing it in relation to its parent container based on the specified margin, in this case
0 from the top.

## The Discography Client Code
1.1) It needs to be assigned to window.onload as it utilizes what is loaded in the window and if the function attempted
to utilize them before they are loaded by the browser, issues and errors would happen.

1.2) It sets the on action events for different document elements as well as loads the albums in the database.

1.3) If the function was not there, either those aforementioned things would either not be assigned, or they might be
assigned before the elements to which they are assigned  or to which they affected were attempted to be utilized before
they are loaded by the browser.

2.1 ) The function gets the values for the new entry from the text input fields populated by the user that are made
visible after the user selects add album.

3.1) It returns the value of the currently selected option from the search type dropdown menu. It knows which value to
return as it is specified for each option in the select.

3.2) "year=1977" is what is saved in the requestData variable. It is added as a param to the URL when the GET request
is called.

3.3) The searchType const is added to the end of the server const to from the part of the URL specifying the server
end-point, i.e. the part before the params.

## The Discography Server Code

1) Lines 10-13
   1) The code is about setting up an Express.js application and starting a server on port 3000. It also logs a message to the console indicating that the server is running
2) Lines 14-15
   1) The code is about configuring the middleware for the Express.js application. 14 - servers static files from the public directory. If a request is made to the root URL, 15 - add middleware to parse incoming JSON requests, making the parsed data available in req.body
3) Lines 17-25
   1) The code is about connecting to MongoDB, error handling, defining the schema and creating the model. It first tries to connect to the MongoDB local server. If it fails then an error is logged and it exits. Then line 24 defines the schema for the albums collection. Then line 25 then creates the model for the disography collection using the schema.

## Cross Site Scripting (XSS)

1. Cross-Site Scripting (XSS) Attack Steps 
2. Go to the "Add Album" section of the application. 
3. In the "Title" field, enter the following string: <script>alert('XSS')</script>. 
4. In the "Artist" field, enter any valid artist name (e.g., Artist Name). 
5. In the "Year" field, enter any valid year (e.g., 2023). 
6. Submit the form.