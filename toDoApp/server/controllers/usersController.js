const { Router, response } = require("express");
const bcrypt = require("bcrypt");

const { user } = require('../models/index');

const usersControllerRouter = Router();

// CRUD-DY CODE FOR USERS
// C - Create a user by registration (url): "/register"
// R - Read the user profile         (url): "/profile" , "login"
// U - Update user information       (url): "/update"
// D - Delete the user               (url): "/terminate"

// Kinds of Requests:
// POST - Create new info, insert info into db
// GET - Retrieve information, or pull information from db (give me an HTML doc)
// PUT - Modify existing information
// DELETE - Exterminate data from the db

usersControllerRouter.post('/register', (request, repsonse) => {
    // PROCESS:
    // Retrieve the data from the body of the text
    // Use the data to craft a USER
    // Save the USER to the db
    // Respond with the status of the action

    let { email, password } = request.body; 
    let newUser = user.build({ 
        email: email,
        password: bcrypt.hashSync(password, 12),
    });

    newUser.save()
        .then(() => {
            console.log('[server]: The new user was created');
            response.json({
                message: 'User successfully created!'
            });
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({
                message: 'Failed to create user'
            });
        });

    // response.json({
    //     message: "Hello form the user Register route!",
    // })
});

usersControllerRouter.post('/login', (request, response) => {
    // PROCESS
    // Retrieve the data from the body of the request
    // Verify the user exists and the data matches what is in the record
    // If so: return with a token
    // If not: respond with 'Get off my lawn!!'

    response.json({
        message: "Hello form the user Login route!",
    })
});

// TODO: Impliment the following rules: "profile", "update", "terminate"

module.exports = usersControllerRouter;

