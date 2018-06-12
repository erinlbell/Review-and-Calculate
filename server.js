var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
var port = 27017;
var url = 'mongodb://lvdpssdev/askLWDB';
 
// Configuration
mongoose.connect(url, {useMongoClient: true});
 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
// Models
var Review = mongoose.model('Review', {
    title: String,
    description: String,
    rating: Number
}, 'review');

var Compute = mongoose.model('Compute', {
	_firstString: any,
	_secondString: any,
	_firstNumber: any,
	_secondNumber: any,
	_solution: any
}, 'computation');
 
// Routes
 
    // Get reviews
    app.use('/api/reviews', function(req, res) {
 
        console.log("Getting all the reviews in the database");
        // use mongoose to get all reviews in the database
        Review.find(function(err, reviews) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(reviews); // return all reviews in JSON format
        });
    });
	
	 app.use('/api/computations', function(req, res) {
 
        console.log("Getting all the computations in the database");
        // use mongoose to get all reviews in the database
        Compute.find(function(err, computations) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(computations); // return all reviews in JSON format
        });
    });
 
    // create review and send back all reviews after creation
    app.post('/api/reviews', function(req, res) {
        console.log("creating review");
        // create a review, information comes from request from Ionic
        Review.create({
            title : req.body.title,
            description : req.body.description,
            rating: req.body.rating,
            done : false
        }, function(err, review) {
            if (err)
                res.send(err);
 
            // get and return all the reviews after you create another
            Review.find(function(err, reviews) {
                if (err)
                    res.send(err)
                res.json(reviews);
            });
        });
 
    });
 
	  app.post('/api/computations', function(req, res) {
 
        console.log("creating computation");
        // create a review, information comes from request from Ionic
        Compute.create({
            _firstString: any,
			_secondString: any,
			_firstNumber: any,
			_secondNumber: any,
			_solution: any,
            done : false
        }, function(err, compuation) {
            if (err)
                res.send(err);
 
            // get and return all the reviews after you create another
            Compute.find(function(err, computations) {
                if (err)
                    res.send(err)
                res.json(computations);
            });
        });
 
    });
    // delete a review
    app.delete('/api/reviews/:review_id', function(req, res) {
        Review.remove({
            _id : req.params.review_id
        }, function(err, review) {
 
        });
    });
	
	 app.delete('/api/computations/:computation_id', function(req, res) {
        Compute.remove({
            _id : req.params.computation_id
        }, function(err, computation) {
 
        });
    });
 
 
// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port 27017");