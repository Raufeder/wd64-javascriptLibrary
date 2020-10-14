let express = require('express');
let router = express.Router();
let sequelize = require('../db');

/*******************************************
 * Controller Method #1: Simple Response
*******************************************/

router.post('/one', function(req, res){
    res.send("Test 1 went through!")
});

module.exports = router;

router.get('/', function(req, res) {
    res.send('Hey!!! This is a test route!');
});

router.get('/test/about', function(req, res) {
    res.send('This is an about route');
});

router.get('/contact', function(req, res) {
    res.send({user: "kenn", email: 'kenn@beastmode.com'});
});

router.get('/projects', function(req, res) {
    res.send(['Project 1', 'Project 2']);
});


router.get('/mycontacts', function(req, res) {
    res.send([
        {user: "kenn", email: 'kenn@beastmode.com'},
        {user: "aaron", email: 'aaron@beastmode.com'},
        {user: "quincy", email: 'quincy@beastmode.com'},
        {user: "tom", email: 'tom@beastmode.com'}


    ]);
});

module.exports = router;