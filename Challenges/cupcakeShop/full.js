//What should a cupcake have?
//Icing, Cake, Price

class Cupcake {
    constructor(icing, cake, price) {
        this.icing = icing;
        this.cake = cake;
        this.price = price;
    }

    getDescription() {
        console.log(`A ${this.icing} tipped ${this.cake} cupcake for $${this.price}`);
    }
}

/*
APIE
A- Abstraction: Hide complicated detail behind an easy interface
P- Polymorphism: One interaction, with many implementations (String.legnth, Array.legnth)
I- Inheritence: Class heirarchy that sahres functionality and attributes
E- Encapsulation: Data and functionality to manipulate that data are bundled together
*/

// module.exports = cupcake;




const Cupcake = require('./cupcake');

class Shop {
    constructor(location, owner) {
        this.location = location;
        this.owner = owner;
    }

    getLocation() {
        console.log(`This shop is at: ${this.location}`);
    }

    getOwner() {
        console.log(`THis shop is owned by: ${this.owner}`);
    }

    changeOwner(newOwner) {
        this.owner = newOwner;
    }
}

class CupcakeShop extends Shop {
    constructor (location, owner, name) {
        super(location, owner)
        this.name = name;
        this.inventory = [];
        this.cash = 0;
    }

    bakebatch(count, batter, icing, price) {
        //Make COUNT cupcakes,add them into inventory
        for (let i = 0; i < count; i++) {
            let newCupcake = new Cupcake(icing, batter, price);
            this.inventory.push(newCupcake);
        }
    }

    sellCupcake(){
        //remopve cupcake from inventopry, and accept cash for the cupcake = to price
        let soldCupcake = this.inventory.pop();
        this.cash += soldCupcake.price;
    }
}

let myShop = new CupcakeShop('Broad Ripple', 'Derek', "D's Small Cakes");
myShop.bakebatch(12, 'vanilla', 'buttercream', 2.50);
myShop.sellCupcake();
myShop.sellCupcake();
myShop.sellCupcake();