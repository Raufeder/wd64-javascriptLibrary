/*
*  ***********
! SYNTAX
*  **********

    keyword varName = [...arrayName];
*/

const nameOne = ['Eric', 'Winebrenner'];
const nameTwo = ['Zach', 'Maynard'];
const copiedNames = ['Adam', 'Jayne', ...nameOne, ...nameTwo];
console.log(copiedNames);

const copiedNamesDiff = ['Adam', 'Jayne', nameOne, nameTwo];
console.log(copiedNamesDiff);

/*
    Since the spread operator is pulling out all items of an array, we need to make sure we use the spread operator within a new array. This is so the values that were pulled out gets placed into our new array.

    ...arrName (if not within an array, will throw error)

    -We can add to our original array without altering our copied array
        -Dependent on what data types we are using
*/

nameOne.unshift('Mr');
console.log('Altered: ', nameOne, 'Spread: ', copiedNames);

/*
*  ***********
! NUMBERS
*  **********
*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.49];
console.log(Math.min(prices)); //expects numbers not an array
console.log(Math.min(...prices)); //Spread Op pulls elements out of the prices array to allow you the min method to work

/*
*  ***********
! ... OBJECTS
*  **********
*/

const persons = [
    {
        name: 'Lore',
        species: 'Android'
    },
    {
        name: 'Picard',
        species: 'Human'
    },
];

const copiedPersons = [...persons];
persons.push({name: 'Worf', species: 'Klingon'});
console.log('Obj', persons, 'SO', copiedPersons);
// We are only changing the original array

/*
    -Primitive variable = primitive value
        ex:
            let x = 10;
            let y = 'abc';
            let z = null;

    -JS stores memory to both varibales and values:
        Variables Values
        x           10
        y          'abc'
        z          null

        ex:
        let a = x;
        let b = y;
        console.log(x, y, a, b) -> 10, 'abc', 10, 'abc'

    -Altering one wouldn't affect the previous
        a = 5;
        b = 'xyz'
        console.log(x, y, a, b) - 10, 'abc', 5, 'xyz'
    
    -3 data types that are passed by reference: Array, Functions, Objects
        -technically objects
        -non primitive variables are given a reference to the value - the reference points to the location in memory

        *pretend datatype: address - denoted by < >

        let arr = [];
        arr.push(1);

 */

