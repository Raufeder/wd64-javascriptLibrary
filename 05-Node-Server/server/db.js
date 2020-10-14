const Sequelize = require('sequelize');

const sequalize = new Sequelize('workoutlog', 'postgres', 'Letmeow1234!', {
    host: 'localhost',
    dialect: 'postgres'
});

sequalize.authenticate().then(
    function() {
        console.log('Connected to workoutlog postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequalize;