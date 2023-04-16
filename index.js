const express = require("express"); 
const app = express();

let polishes = [
    {
        name: 'The Stranger',
        brand: 'Mooncat',
        colorFamily: 'Green',
        finish: 'Creme',
    },

    {
        name: 'When Hell Freezes Over',
        brand: 'Mooncat',
        colorFamily: 'Blue',
        finish: 'Flakey',
    },

    {
        name: 'Not Today Satan',
        brand: 'Mooncat',
        colorFamily: 'Pink',
        finish: 'Holographic',
    },

    {
        name: 'Midnight Drive',
        brand: 'Mooncat',
        colorFamily: 'Purple',
        finish: 'Creme',
    },
];

// Get Requests

app.get('/', (req, res) => {
    res.send('Welcome to my polish library!')
});

app.get('/documentation', (req, res) => {
    res.sendFile('publish/documentation.html', { root: __dirname});
});

app.get('/polish', (req, res) => {
    res.json(polishes);
});

// listening for requests
app.listen(8080, () => {
    console.log('The app is listening on port 8080');
});