//! ASYNC/AWAIT

/*
    -Allows us to program in a synchronous manner while still allowing code to run in the background
    -Makes our site as responsive as possible
*/

//? Async Function (syntax)
/* 
    -Allows us to make a normal function asynchronous. can be "await"
    -Must use the async keyword at the beginning of the function declaration
*/

async function myFn() {
     //await...
}

const myAsyncFn = async () => {
     //await...
}

const newFn = () => {
     // await (provides a syntax error becasue async is not decalred)
}

fn().then(console.log);

fn().then(dataFromAsyncFun => {
    console.log(dataFromAsyncFun)
})

//? Await
// pauses at each await expression

fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(json => console.log(json))
    .then(err => console.log(err));

    // -Chaining .then() together returns a promise (resolve/reject) and is known as method chaining

    const request = async () => {
        const response = await fetch('https://random.dog/woof.json');
        const json = await response.json();
        return json;
    }

    request().then(json => {
        console.log(json);
    })
