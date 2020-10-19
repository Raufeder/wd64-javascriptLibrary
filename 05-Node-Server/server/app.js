require('dotenv').config();

let express = require('express');
let app = express();
let test = require('./controllers/testcontroller')
let authTest = require('./controllers/authtestcontroller')
let user = require('./controllers/usercontroller')
let sequelize = require('./db');

sequelize.sync(); //tip: {force: true} for resetting tables
app.use(express.json());
app.use(require('./middleware/headers'));
/*****************
 * EXPOSED ROUTES
******************/
app.use('/test', test);
app.use('/api/user', user);

/*****************
 * PROTECTED ROUTES
******************/

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.listen(4000, function(){
    console.log('App is listening on 4000.');
});

app.use('/api/test', function(req, res){
    res.send("this is data from the /api/test endpoint. It's from the server.");
});

app.use('/test/about', function(req, res) {
    res.send('This is an about route');
});

