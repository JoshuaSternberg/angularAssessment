var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/heroesdb');
mongoose.model(
    'Hero',
    new Schema({
            "alias": String,
            "first_name": String,
            "last_name": String,
            "city": String,
            "primary_power": String
        },
        {
            collection: 'Heroes'
        }
    ));

var Hero = mongoose.model('Hero');

app.post('/hero', function(req, res) {
    var addHero = new Hero({
        "alias": req.body.alias,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "city": req.body.city,
        "primary_power": req.body.primary_power
    });

    addHero.save(function(err, data) {
        if(err) {
            console.log('ERROR:', err);
        }

        Hero.find({}, function(err, data) {
            if(err) {
                console.log('ERROR:', err);
            }

            res.send(data);

        });
    });
});

app.get('/hero/:primary_power', function(req, res) {
    Hero.findById({"_id": req.params.primary_power}, function(err, data) {
        if (err) {
            console.log('ERROR:', err);
        }
        res.send(data);
    });
});

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});