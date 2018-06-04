var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // constructor
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.greet = function () {
        console.log("Hey there!");
    };
    return Person;
}());
// Extending class Person
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello world!");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        // super calls the method implementation of the parent class
        // this calls the method implementation of that instance
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var aPerson = new Person("Anthony", "Mendonca");
console.log(aPerson.getFullName());
var aProgrammer = new Programmer("Jackie", "Chan");
aProgrammer.greetLikeNormalPeople();
