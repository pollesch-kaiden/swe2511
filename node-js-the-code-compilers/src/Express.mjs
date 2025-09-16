//

import express from "express";
import path from 'node:path';

const app = express();
const port = 3000;

const filePath = path.resolve(process.cwd(), 'public');
app.use(express.static(filePath));

//Method taken from the Express API documentation
//This is an example for query parameters using req.query
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Name: ${name}, Age: ${age}`);
});

//Method taken from the Express API documentation
//This is an example for route parameters using req.params
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});