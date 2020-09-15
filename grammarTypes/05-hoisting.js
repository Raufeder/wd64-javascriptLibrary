/*
*  ***********
! HOISTING
*  **********

    What is hoisting?
        - JS pulls all variables and functions calls to the 'top' of their respecrivescope prior to being executed
        - Only the declaration is pulled up, NOT the assignment
*/

// console.log(hoistedVar);

// console.log('How JS see hoistedVar: ', typeof hoistedVar);
// var hoistedVar = 'using var'
// let hoistedVar = 'using let';

// console.log(npVariable);

var declaration; // without assignment
console.log(usage);

declaration = 10; //assigning our varaible
console.log(usage);

var usage = declaration + 10;

console.log(usage);

//? Hoisting in a function
// This process is considered the same within a function. On the first pass, it reads it, then pushes the declarations to the top and then executes them in the order they are written

function testHoist() {
    becomesGlobal = 'not declared, it becomes part of the global scope';
    console.log('Prior to declaring ', insideFunc);
    var insideFunc = 'Rules still apply here';
    console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS declare variables regardless of whether they are in a function or a global scope. This makes it clear how it should be handled

//? Using LET
// The keyword 'let' is block scoped and not function scoped

console.log(letVariable);
let letVariable = 'Using Let';
// This throws a ReferenceError due to ES6 not accepting undeclared variables. This is to ensure we ALWAYS decalre our varaible FIRST

//? Hoisted Function
// Function Declarations:

hoistedFunc();

function hoistedFunc() {
    console.log('This is a hoisted function');
}

// Function Expressions :
// These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
    console.log('Works?');
}