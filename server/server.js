const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use("/static", express.static(path.resolve(__dirname, "../build/static")));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
