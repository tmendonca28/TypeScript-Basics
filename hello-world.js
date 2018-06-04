// arrow function
var fn = function () { return 'response'; };
// type declaration is a postfix declaration
// var sth: type;
var a;
var b;
var c;
a = 10;
b = false;
c = 'Hello';
// Arrays and tuples
// array of only numbers
var myArr;
myArr = [];
myArr = [1, 2];
// arrays with flexibility i.e strings and numbers
// use a tuple
var thisArr;
thisArr = [100, false];
// typing with functions
// to add an optional 3rd arg follow it with a ?
function add(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
var sum = add(1, 2);
console.log(sum);
