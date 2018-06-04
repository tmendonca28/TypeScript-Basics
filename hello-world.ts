// arrow function
var fn = () => 'response';

// type declaration is a postfix declaration
// var sth: type;
var a: number;
var b: boolean;
var c: string;

a = 10;
b = false;
c = 'Hello';

// Arrays and tuples
// array of only numbers
var myArr: number[];
myArr = [];
myArr = [1,2];

// arrays with flexibility i.e strings and numbers
// use a tuple
var thisArr: [number, boolean];

thisArr = [100, false];

// typing with functions
// to add an optional 3rd arg follow it with a ? or = 0 to give it a default value
function add (a: number, b: number, c = 0) :number {
    return a + b + c;
}

function greet() : string {
    return "Good morning";
}

var greeting = greet();

// any type
var d;

// union type . Suppose e needs to be only a number or boolean
var e: number | boolean;