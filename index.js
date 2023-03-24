const express = require('express');
const app = express();
const books = require('./books');
console.log(books);
 

app.get('/api/books', (req, res) => {
    res.json(books);
})

app.listen(3000, () => {
    console.log(`It's working`);
})