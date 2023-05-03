const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Hello3')
}

app.get('/chain', [one, two, three]);

app.listen(PORT, () => {
    console.log(`Server is listen throw ${PORT} port`);
})
