/*=====================================
        DEPENDENCIES
======================================*/
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let path = require("path");
let routes = require('./routes/routes');
let app = express();


//hardcoded mongodb collections in a json file
let profilesJSON = require('./data/profiles.json');
console.log(profilesJSON, '.......the profilesJSON..')
let cardsJSON = require('./data/cards.json');

//mongoose models
let Profile = require('./models/profileModel.js');
let Card = require('./models/cardModel.js');


/*==========================================
        MONGOOSE CONNECTION
==========================================*/

// Connect to mongodb
mongoose.connect('mongodb://localhost/Bradley_seedProject2', {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

mongoose.connection.once('open', function () {

        console.log('Connection has been made, now make fireworks...');

        //These cards and profiles are hardcoded to the database for when you recieve my project.
        //Collections get removed first to make sure there are no repeat inserts.
        Card.deleteMany(function (err) {

                console.log("The card collection has been removed");
        });

        Card.insertMany(cardsJSON, true, function (error, docs) {
                console.log("The cards have been inserted from the json file");
        });


        Profile.deleteMany(function (err) {

                console.log("The profile collection has been removed");
        });

        Profile.insertMany(profilesJSON, true, function (error, docs) {
                console.log("The profiles have been inserted from the json file");
        });

}).on('error', function (error) {
        console.log('Connection error:', error);
});


app.use(bodyParser.urlencoded({ extended: true, keepExtensions: true }));
app.use(bodyParser.json({ extended: false }));

/*=====================================
        VIEW ENGINE
======================================*/
app.engine('html', require('ejs').renderFile);
app.set("views", path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');
app.enable("view cache");



app.use(express.static("./public"));

routes(app)
module.exports = app;