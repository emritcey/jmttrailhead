const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

// Middleware
const GetAllFromGear = require("./Middleware/GetAllFromGear");
const MapGearList = require("./Middleware/MapGearList");
const ConnectToDB = require("./Middleware/ConnectToDB");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/static", express.static(path.resolve(__dirname, "../build/static")));

app.get('/packing_list', ConnectToDB, GetAllFromGear, MapGearList, (req, res) => {
    res.send({
        data: res.locals.data,
        node: 200,
     });
});

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
