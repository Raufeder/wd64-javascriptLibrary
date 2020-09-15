/*
*  **********
!CONDITIONALS
*  **********

? FALSY VALUES:
    -false
    -0
    - "", '', ``
    -null
    -undefined
    -NaN (not a number)

    When JS is expecting a boolean value and it is returned with one of these 6 values, it is evaluated as "falsy"

*/

/*
*  **********
! IF
*  **********

    -if something is true, do 'this thing'

*/


let light = 'on';
if(light == 'on'){
    console.log('The light is on');
};

let weather = 68;

if(weather < 70){
    console.log('wear a jacket');
};

let rain = true;

if(weather < 70 && rain != false){ // rain == true
    console.log('It is a little chilly and will possibly rain.');
};

/*
*  ***********
! IF ELSE
*  **********
    If/else statements allow us the ability to write about a chain of events
*/

let today = 75

if(today < 70){
    console.log("It is" + today + ", wear a jacket.")
} else{
    console.log("It is" + today + ", No jacket needed.")
}

/*
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = 'Eric'

if (name == 'Derek'){
    console.log(name);
}else{
    console.log('Hello, what is your name?');
};

if (name == 'Derek'){
    console.log('Hello, my name is ' + name);
}else{
    console.log('Hello, is your name ' + name + '?');
};

/*
*  ***********
! ELSE IF
*  **********
    This is a condition that would be checked if the above statement was not met
*/

let cookTime = 40;

if(cookTime === 45){
    console.log('Let us Feast!');
} else if(cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutes.`);
} else if(cookTime >= 20) {
    console.log(`It has only been ${cookTime} minutes. Wait another 10-25 minutes.`);
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`);
}

// The end of the ELSE IF statement should have a simple "else" to finish it

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 22

if(age >= 25) {
    console.log(`You can rent a car!`);
} else if(age >= 21) {
    console.log(`You can drink!`);
} else if(age >= 18) {
    console.log(`You can vote!`);
} else {
    console.log(`Sorry, you're too young to do anything`)
}


/*
*  ***********
! TERNARIES
*  **********
    This is a quick way of considering an if/else statment. we are capable of writing out our conditional in a simple line
*/

let myName = 'Tina'
/*
if(myName == 'Tina'){
    console.log(c ` + myName + `.`);
} else {
    console.log( `Hello, is your name ` + myName + `?`);
}
*/
//? condition ? if true : else result

//    (1)                   (2)                                         (3)
myName === 'Derek' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);

/*
    1: Condition
    2: True (if true)
    3: False (else)
*/

//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;
/*
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}
*/

lampOn == true && daytime != true ? console.log('The lamp is on during the night') :
lampOn != true && daytime != true ? console.log('The lamp is off during the night') :
lampOn == true && daytime == true ? console.log('The lamp is on during the day') :
lampOn != true && daytime == true ? console.log('The lamp is off during the day') :
console.log('What lamp?');

/* 
*  ***********
! SWITCH
*  **********
    -execute a block of code depending on different cases
*/

let instructor = "Ing";

switch(instructor){
        case "Ing" :
            console.log(`${Instructor} is a part of the Web Dev Team.`);
            break;
            // Once each case has been evaluated vand we return a result, we need to note to "break" out from our switch statement.
        case "Zach" :
            console.log(`${Instructor} is a part of the Web Dev Team.`);
            break;
        case "Josh" :
            console.log(`${Instructor} is a part of the Software Dev Team.`);
            break;
        default:
            console.log(`Sorry, I can't find what ${Instructor} teaches at this time.`);
            //Need to use a default to help us  catch those cases when none are true
}

instructor = 'Amanda';

switch(instructor){
    case 'Ing' :
    case 'Adam' :
    case 'Eric' :
    case 'Zach' :
    case 'Donovan' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh' :
    case 'Amanda' :
    case 'Casey' :
        console.log(`${instructor} is a part of the Software Dev Team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`);
}

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/

grade = 92;

    switch(true) {
        case grade >= 90:
            console.log('A');
            break;
        case grade >= 80:
            console.log('B');
            break;
        case grade >= 70:
            console.log('C');
            break;
        case grade >= 60:
            console.log('D');
            break;
        default:
            console.log('F');
    }
