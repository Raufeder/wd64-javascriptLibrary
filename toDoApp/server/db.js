const Sequelize = require('sequelize');

const applicationSequelizeObject = new Sequelize(
    "todo-db", 
    "postgres", 
    "Letmeow1234!", 
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);

module.exports = applicationSequelizeObject;