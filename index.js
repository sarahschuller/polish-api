const express = require("express");
const morgan = require("morgan");
     fs = require('fs'),
     path = require('path');
const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})
const bodyParser = require('body-parser'),
    methodOverride = require('method-override');

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

// initialize morgan and set up logger
app.use(morgan('combined', {stream: accessLogStream}));

// Route all requests for static files to their corresponding files within the public folder
app.use(express.static('public'));

// Get Requests
app.get('/', (req, res) => {
    res.send('Welcome to my polish library!')
});

app.get('/secreturl', (req, res) => {
    res.send('This is a secret url with super top-secret content');
});

app.get('/documentation', (req, res) => {
    res.sendFile('publish/documentation.html', { root: __dirname});
});

app.get('/polish', (req, res) => {
    res.json(polishes);
});

// Error Handling Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
    // logic here
});

// listening for requests
app.listen(8080, () => {
    console.log('The app is listening on port 8080');
});