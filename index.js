const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const productRouter = require('./routes/products');

app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});