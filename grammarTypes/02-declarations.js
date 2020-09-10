/*
*  **********
!  VARIBALES
*  **********
*/

console.log('hello');
// It is a debugging tool

let a = 2;

/*
- let: is our KEYWORD
- a: is our NAME of our variable
- =: is our ASSIGNMENT OPERATOR
- 2: is our variable VALUE
*/

let b = 1;

console.log(a + b);

//! RESTRICTIONS
/* 
    a variable must begin with a letter, underscore, or a dollar sign

    numbers may follow the above characters, BUT cannot come first

    javascript IS case sensitive - 'hello' and 'Hello' are different variables
    no sapces are aloud in variable names

    camelCase is best practice for names
    ex:
        let myName = 'Eric';
        is easier to read than
        let myname = 'Eric';
*/

/*
* KEYWORDS

var, let, and const

    - var: 'old' keyword for variable. ** We won't be using it as often but is stil a viable one to use

    - let: 'new' keyword for variable. (introduced with ES6 *newest version of ECMAScript, which is a standardization of JS)

    - const: 'new' keyword that declares an UNCHANGABLE, or constant, variable
*/

var variable = 'var variable';
let letVariable = 'let variable';

// let function = 1; cannot use reserved words within a variable name - *function is a reserved word

/*
*  **********
!  DECLARATIONS & INITIALIZATIONS
*  **********
*/
// Declarations are the LEFT SIDE of the assignment operator
// let x;

// Initializations are the RIGHT SIDE of the assignment operator
// let x = 10;

// 10 is out initalization

let y;
console.log('declaration:', y);

y = 10;
console.log('initialization: ', y);
 
y = 33;
console.log('initialization 2: ', y);
// var y

//we've set our variablwe with our let keyword. With each iteration, we have redeclared what it is.

//? const

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa);

today = 'Awesome!';
console.log(today, efa);

// efa = 'Super!';
console.log(today, efa);
// const allows us to make a variable that we don't want to change.