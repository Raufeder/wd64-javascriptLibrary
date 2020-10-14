/*
*  ***********
! CLASSES
*  **********
    -Classes can be defined by either expression or declaration
    -Classes are functions
    -Classes act as a blueprint for creating objects
        -ex: modelcould be a property of a class of automobile. Each new automobile we create that's a copy of our original classand could be a different valuefor the property model
    -Body of class is between{}
    -Constructor method is a special method for creating and initializing an object that was created with a class
        -There can only be ONE constructor method
        -Can use the keywordm "super"
        -The super keyword is used to access and call functionson on an object parent
    -Introduced in ES5
    -New way to write previous existing prototype based inheritence
    -Closest thing in vanilla JS to OOP
*/

/*
*  ***********
! CLASS DECLARATIONS
*  **********
*/

class automobile {
    constructor(make,model) {
        //Instanced properties must be defined within class methods, like the constructor method.
    this.make = make;
    this.model = model;
    }
}


//Hoisting: Unlike declaration function declarations, class declarations are hoisted. A class declaration needs to be declared before accessing it

/*
*  ***********
! CLASS EXPRESSIONS
*  **********
    -Can be named or unnamed
    -the name given to an unnamed class expression is local in the classes body
        -the name of an named class can be retrieved through the class's name property
*/

//*unnamed
let Vehicle = class{
    constructor(make,model) {
    this.make = make;
    this.model = model;
    }
};
console.log(Vehicle.name);

//*named
let Auto = class Mobile{
    constructor(make,model) {
        this.make = make;
        this.model = model;
        }
};
console.log(Auto.name);

/* 
*  ***********
! METHODS
*  **********
    -Introduced in ES5
        -Prototype methods are shorter for method definitions
*/

// Method Definiton: OLD SYNTAX
const automobile = {
    start: function() {
        //
    },
    stop: function () {
        //
    }
};

//Prototype Method: NEW SYNTAX
const Automobile = {
    start() {
        //
    },
    stop() {
        //
    }
};

class AutoMobile {
    constructor(make,model) {
        this.make = make;
        this.model = model;
    }

    // Method 1:
    start() {
        console.log(`This ${this.make} ${this.model}'s engine started.`)
    }

    // Method 2:
    stop() {
        console.log(`This ${this.make} ${this.model}'s engine stopped.`)
    }
};

/* 
*  ***********
! NEW INSTANCE
*  **********
    -Using the keyword "new" we can create a new object/instance of the AutoMobile class
*/

let hondaCivic = new AutoMobile('Honda', 'Civic');
hondaCivic.start();
hondaCivic.stop();
let fordEscape = new AutoMobile('Ford', 'Escape');
fordEscape.start();
fordEscape.stop();

/* 
*  ***********
! CONSTRUCTOR METHOD
*  **********
    -Helps create and initialize s an object created from a class
    -works along with the 'new' keyword
    -Needs to be included to create new objects and instances of our class
        -set properties
        -passes values for properties
*/

class Cookie {
    constructor(type, icing, shape) {
    // The parameters we will note will be the values we want passed and stored in an object
    this.t = type;
    this.i = icing;
    this.s = shape;

    //LEFT SIDE: assigning keys for the values we pass in
                //RIGHT SIDE: the accept values from our parameters
    }
}

let chocolateChip = new Cookie('Chocolate Chip', false, 'circle');
console.log(chocolateChip.t);
console.log(chocolateChip.i);
console.log(chocolateChip.s);
console.log(chocolateChip);

/* 
*  ***********
! EXTENDS
*  **********
-Keyowrd used in class declarations/expressions to create a new class
-each new class created inherits the properties and methods from the parent class
-can have its own properties or methods
    -also known as subclass
*/

//*PARENT

class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats their food`)
    }
}

//*SUBCLASS
class dog extends Animal {
    constructor(name, breed) {
        super(name); //'super' prior to 'this' keyword - will cause error
        this.type = breed;
    }

    play() {
        console.log(`The ${this.type} named ${this.name} fetches the ball!`);
    }
}

let Fido = new dog('Fido', 'mutt');
Fido.eat();
Fido.play();
// Animal.play(); -breaks, cant access play in dog
method