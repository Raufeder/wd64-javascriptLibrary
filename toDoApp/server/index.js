const Express = require('express');

const expressApplicationObject = new Express();

expressApplicationObject.get('/', (request, response) => {
    console.log('[server]: Root GET request recieved');
    console.log('TYPE:', request.method);
    console.log('URL:', request.url);
    console.log('[server]: Response being dispatched ->');
    response.send('Root Route Hit, hello from the todo server');
});

expressApplicationObject.use(Express.json());
expressApplicationObject.post('/challenge', (request, response) => {
    let data = request.body;
    let message = data.age >= 18 ? `${data.name}, you are an adult!` : `${data.name}, you will be an adult soon!`;

    response.send(message);
});

expressApplicationObject.listen(9001, () => {
    console.log('[server]: App is listening on port 9001');
});

