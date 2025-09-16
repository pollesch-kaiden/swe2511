import express from 'express';

const app = express();
const port = 3000;

const validateParams = (a, b) => {
    if (a === undefined || b === undefined) {
        return {error: 'Both a and b are required parameters'};
    }
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return {error: 'Both a and b must be numbers'};
    }
    return {numA, numB};
}

app.get('/add', (req, res) => {
    const {numA, numB, error} = validateParams(req.query.a, req.query.b);
    if (error) {
        res.json({
            a: req.query.a,
            b: req.query.b,
            error});
    } else {
        res.json({
            a: numA,
            b: numB,
            result: numA + numB
        });
    }
});

app.get('/subtract', (req, res) => {
    const {numA, numB, error} = validateParams(req.query.a, req.query.b);
    if (error) {
        res.json({
            a: req.query.a,
            b: req.query.b,
            error
        });
    } else {
        res.json({
            a: numA,
            b: numB,
            result: numA - numB});
    }
});

app.get('/multiply', (req, res) => {
    const {numA, numB, error} = validateParams(req.query.a, req.query.b);
    if (error) {
        res.json({
            a: req.query.a,
            b: req.query.b,
            error});
    } else {
        res.json({
            a: numA,
            b: numB,
            result: numA * numB
        });
    }
});

app.get('/divide', (req, res) => {
    const {numA, numB, error} = validateParams(req.query.a, req.query.b);
    if (error) {
        res.json({
            a: req.query.a,
            b: req.query.b,
            error});
    } else if (numB === 0) {
        res.json({
            a: numA,
            b: numB,
            error: 'Cannot divide by zero' });
    } else {
        res.json({
            a: numA,
            b: numB,
            result: numA / numB
        });
    }
});

app.use((req, res) => {
    res.status(404).json('404: Page not found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

