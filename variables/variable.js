"use strict";
// variables
let count;
let count1;
// arrays
let array = [];
array.push('Timmy');
console.log(array);
let array1 = [];
let array2 = []; // mixed type array
// objects
let object;
let object1 = { objName: 'test', age: 100 };
object1 = {
    objName: 'Timmy',
    age: 10
};
console.log(object1);
//Functions
let add;
add = (a, b, c) => {
    return a + b;
};
let addition = add(3, 4);
console.log('Addition : ' + addition);
let greet; // function prototype
greet = (user) => {
    console.log(`${user.name}  says, Hello!! `);
};
let userObj = {
    name: 'Malitha',
    uid: 'E/13/200'
};
greet(userObj);
