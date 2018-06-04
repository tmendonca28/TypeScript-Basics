class Person {
    firstName : string;
    lastName : string;
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    // constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        console.log("Hey there!");
    }
}

// Extending class Person
class Programmer extends Person {
    greet() {
        console.log("Hello world!");
    }

    greetLikeNormalPeople() {
        // super calls the method implementation of the parent class
        // this calls the method implementation of that instance
        super.greet();
    }
}

var aPerson = new Person("Anthony", "Mendonca");
console.log(aPerson.getFullName());

var aProgrammer = new Programmer("Jackie", "Chan");
aProgrammer.greetLikeNormalPeople();