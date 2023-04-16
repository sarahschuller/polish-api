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

];

// Get Requests

app.get('/', (req, res) => {
    res.send('Welcome to my polish library!')
})