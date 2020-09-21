/*
*  ***********
! ARRAYS
*  **********

-synchronus programming is code read line by line
-Asyncchronus programming allows a program to do mroe than one thing at a time
-Makes it possible to run long-running actuons without stopping the program to wait for a response
*/

//? Synchronus Sample: Execution Stack
const secondSync = () => {
    console.log('Second Hello')
}

const firstSync = () => {
    console.log('First Hello')
    secondSync();
    console.log('End');
}

firstSync();
// "First Hello" - then "Second Hello" - then "End". Once the before is completed, the next will execute

//? Asynchronus Sample
const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code')
    }, 2000); // setTimeout has two arguemtns: callback 9our console.log), and time measured in ms (milliseconds)
};
console.log('Hello World');
networkRequest();
console.log('The end');

//Event Loop: looks into the call stack and determines if it is empty or not. If empty, it considers if there is any waiting callback that needs to be executed (our console.log('Async Code'))

//! API

/*
    API: Application Program Interface

    -NOT a database or server
    -Allows us to access points in a server
        -Comes in the form of ENDPOINTS
        -Endpoints directs us to set of data

    ? REST API
    -REpresentational State Transfer
        -creates an object requested data by the client, send values in response to user
    - Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)
*/

//! FETCH()
/* 
  -The fetch() method is an asynchronus method. Part of the browser - not JS
  -The fetch() method starts the process of 'fetching' a resource. Will return a peromise and responds ONCE that promise is fulfilled
    Promise:
        -An unknown value when created
        -Represents the eventual fulfilled value or rejetion (error)
    *Promises always one of these states
        1. Pending: Inital state, neither fulfilled or rejected
        2. Fulfilled: Meaning the operation completed successfully
        3. Rejected: Meaning the operation failed
    
   
*/