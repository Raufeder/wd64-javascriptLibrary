/*
*  ***********
! LOOPS
*  **********
 - Loops help us repeat a process without writing a lot of code

    We need to:
        1) Create an index
        2) Run a condition
        3) Change the indexing variable (execuution of condition)

*/

for(let i = 0; i <= 10; i++){
    console.log(i);
}

/*
    We state our loop with a 'four'
    Within this function, we are injecting some parameters that JS will run against you
        (index; condition; change index -> result)

        for(<create index variable>; <run condition>; <change index>) {
            <return results>
            *will continue until run codntition is met.

        }
*/
/*
let x = 20
let i = 10

for(i; i<= x; i++){
    console.log(i);
}
*/

//! CHALLENGE:
//* Using a for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration

for(let i = 2; i >= -10; i -= 4){
    console.log(i);
}

let word = 'supercalifragilisticexpialidocius'
for(let i = 0; i < word.length; i++){
    console.log(i,word[i]);
}

/*
*  ***********
! FOR IN LOOPS
*  **********
*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
};

for(info in city) {
    console.log(info)
    console.log(city[info])
}

/*
    for(variable IN object){
        <statement>
    }
*/

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list) {
    console.log(item);
    console.log(list[item]);
}

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let fullName;

for(char in name){
    //let lowChar = name[char].toLowerCase();
    //console.log(lowChar);
    char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();

}
console.log(fullName);

/*
*  ***********
! FOR OF LOOP
*  **********
    -in order to run a FOR OF loop, the 'thing' must be num ered like an array.

    let object = {
        key: value
        key: value
        key: value

    };

    for(o of objects) {
            <breaks>
    }
*/

let indexArr = ['spot 1', 2, true, 'four'];

for(values of indexArr) {
    console.log(values);
}

/*
? QUICK RECAP
    for loop: loops through a block of codde until the counter reaches a sepcific nubmer
    for in loops: loops through properties of an object
    for of loops: loops through iterable objects such as arrays and strings *strings can be accessed much in the same way as arrays
*/