### What is the difference between a query parameter and a route parameter?
- Query parameters, are parameters that are appended to the URL after a question mark (?). They are typically used to filter or sort data.
- Route parameters, are parameters that are part of the URL path. They are used to capture values at specific position in the URL

### How do you retrieve the query and route parameters using express? Provide a code example of each.
```js
//This is an example for query parameters using req.query
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Name: ${name}, Age: ${age}`);
});

//This is an example for route parameters using req.params
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});
```