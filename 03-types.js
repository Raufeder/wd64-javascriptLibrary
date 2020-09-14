/*
*  **********
!  TYPES
*  **********

? Data and Structure types
*  ************
    -Primitive Data Types:
        -boolean
        -undefined
        -number
        -string
            -bigInt*
            -symbol*
        -null
        -object
        -function
*/

//? BOOLEANS
//* ***********

// A boolean has two possibler values: true and false

let on = true;
let off = false;

console.log(on);


//? NULL
// A null vlaue is an empty value. Think of it as an empty container that has space to fill.

let empty = null;
console.log(empty);

//? UNDEFINED
// No vlaue has been assigned to a container

let undef = undefined
console.log(undef);
let password;
console.log(password);

/*
    -Null is like a container with nothing to it
    -Undefined is when a variable has never been sent, or hasn't been created yet
*/

//? NUMBERS

let degrees = 90;
console.log(degrees);

let percise = 999999999999999; //15 9's
console.log(percise)

let rounded = 9999999999999999; //16 9's
console.log(rounded);
// JS gives us sopace for 15 9's before rounding up

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds to a certain number, so if math is needed, be aware

let whatIf = (0.2 *10 + 0.1 *10);
console.log(whatIf);
let numbersAreHard = (0.2 *10 + 0.1 *10) / 10;
console.log(numbersAreHard);
//console.log('.' + whatIf);

//? STRINGS

// Strings represent text and are wrapped in either '' or ""

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception, singleQ);

//? Number vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);
// Analogy... writing 1050 on one sticky note and writing 100 on another and placing them next to each other

console.log(typeof addThese);
console.log(typeof addTheseAlso);
// We can use an operator called 'typeof' that returns a string that tells us exctly what our variable 'type' is

let stringToNumber = Number('1150');
console.log(stringToNumber);
console.log(typeof stringToNumber);

//const log = console.log; //We can reduce our typing by setting console log to a variable that doesn't change

//log('test');

//? OBJECTS
/*
    -Objects are used to store many values instead of a singular value
    -Consider these as a collection of various properties
    -denoted by curly brackets; {}
*/

let frodo = {
    race: 'hobbit', //string
// (1)    (2)
    rings: 1, //number
    strings: true, //boolean
}

console.log(frodo);
console.log(typeof frodo);
//1: Key
//2: Value

let obj = {
    key: 'value'
};

console.log(obj);

//? ARRAYS
/*
    -Continers that hold a list of items
    -Denoted by square brackets: []
    -All items are within the square brackets
    -Regardless of datatype, each item is seperated by a comma
*/

let arrayList = ['pos 1', 'pos 2', 'pos 3']
console.log(arrayList);
let anotherExample = [1, 2, 'three', true]
console.log(anotherExample);

console.log(typeof anotherExample);
// JS classifies arrays as objects and not a datatype of their own

//? ADDITION vs CONCATENATION
/*
    -JS sees the '+' symbol in two different ways
        -When combined with nubmers, uses built-in math functionality
        when combined with strings, it ignores the math and concats the two strings
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof contactDiff);

/*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/
let personalInfo = {
    firstName: 'Derek',
    lastName: 'Raufeisen',
    houseNumber:'5956' ,
    aptNumber: null,
    street: 'Keensubrg Drive',
    city: 'Indianapolis',
    state: 'Indiana',
    zipcode: '46217',
    }
    
    console.log(personalInfo);
    
let firstName= 'Derek';
let lastName= 'Raufeisen';
let houseNumber= '5956';
let street= 'Keensubrg Drive';
let city= 'Indianapolis';
let state= 'Indiana';
let zipcode= '46228';
    
console.log(lastName + ', ' + firstName + ' ' + houseNumber + ' ' + street + ', ' + city + ', ' + state + ' ' + zipcode);

//? String: Properties

/*
    -strings have properties, or the qualities associated with that string
    -the legnth of a string is a property
*/

let myName = 'Derek';
console.log(myName.length);

//? String: Methods
/*
    -methods are tools that hekps us maniuplate our data
*/

let myNameIs = 'Derek';
console.log(myNameIs.toUpperCase()); // this is a method that changes a string to uppercase
console.log(myNameIs.toLowerCase()); // this is a method that changes a string to lowercase

let myHome = 'My home is Broadripple';
console.log(myHome.includes('Broadripple'));