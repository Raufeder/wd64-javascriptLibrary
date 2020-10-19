const { Router, response } = require ("express");

const testControllerRouter = Router();

testControllerRouter.get ('/', (request, repsonse) => {
    let message = "Hello from the test controller!"
    response.send(message);
});

module.exports = testControllerRouter;