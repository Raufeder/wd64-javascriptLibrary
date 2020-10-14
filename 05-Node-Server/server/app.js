let express = require('express');
let app = express();
let test = require('./controllers/testcontroller')

let sequelize = require('./db');

sequelize.sync();

app.use('/test', test)

app.listen(4000, function(){
    console.log('Hey man!!!');
});

app.use('/api/test', function(req, res){
    res.send("this is data from the /api/test endpoint. It's from the server.");
});

app.use('/test/about', function(req, res) {
    res.send('This is an about route');
});

