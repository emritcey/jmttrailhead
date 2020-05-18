const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/index');

// Middleware
const GetAllFromGear = require("./Middleware/GetAllFromGear");
const MapGearList = require("./Middleware/MapGearList");
const ConnectToDB = require("./Middleware/ConnectToDB");
const CheckDBForGoogleUser = require("./Middleware/GoogleAuth/CheckDBForGoogleUser");
const RegisterGoogleUser = require("./Middleware/GoogleAuth/RegisterGoogleUser");

let user = {};

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

//Google Strategy
passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientId,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  })
);

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());


app.use("/static", express.static(path.resolve(__dirname, "../build/static")));

app.get('/packing_list', ConnectToDB, GetAllFromGear, MapGearList, (req, res) => {
    res.send({
        data: res.locals.data,
        node: 200,
     });
});

app.get('/auth/google', passport.authenticate("google", {
  scope: ["profile", "email"],
}));

app.get('/auth/google/callback', passport.authenticate("google"), ConnectToDB, CheckDBForGoogleUser, RegisterGoogleUser, (req, res) => {
  user = {...res.locals.user}
  res.redirect('/profile'); // this might not work and go to /auth/facebook
});

app.get("/user", (req, res) => {
  res.send(user);
});

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
