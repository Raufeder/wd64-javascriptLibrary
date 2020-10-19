const Express = require('express');

const applicationSequelizeObject = require('./db');
const applicationControllers = require("./controllers/index");

const expressApplicationObject = new Express();

expressApplicationObject.use(Express.json());

expressApplicationObject.use("/test", applicationControllers.test);
expressApplicationObject.use("/users", applicationControllers.users);

expressApplicationObject.get('/', (request, response) => {
    console.log('[server]: Root GET request recieved');
    console.log('TYPE:', request.method);
    console.log('URL:', request.url);
    console.log('[server]: Response being dispatched ->');
    response.send('Root Route Hit, hello from the todo server');
});

// expressApplicationObject.post('/challenge', (request, response) => {
//     let data = request.body;
//     let message = 
//         data.age >= 18 
//             ? `${data.name}, you are an adult!` 
//             : `${data.name}, you will be an adult soon!`;

//     response.send(message);
// });





// Startup Procedure:
// Verify the connection to the postgres DB
// Synchronize our Database with our models
// Listen on our specified port

applicationSequelizeObject
    .authenticate()
    .then(() => applicationSequelizeObject.sync())
    .then(() => {
        expressApplicationObject.listen(9001, () => {
            console.log('[server]: App is listening on port 9001');
        });
    })
    .catch((err) => {
        console.log(err);
    });



