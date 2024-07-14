// Day 1: Variables and Data Types

//=>>>>>>>>>>>>> Activity 1: Variable Declaration

// Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var value = 10 ;
console.log(value);


// Task 2: Declare a variable using let , assign it a string, and log the value to the console.
let value2 = 'JavaScript'
console.log(value2);

// =>>>>>>>>>>>>> Activity 2: Constant Declaration

// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
const value3 = true
console.log(value3);


// =>>>>>>>>>>>>>  Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable

let v1 = 30
console.log(v1);
let v2 = 'JavaScript'
console.log(v2);
let v3 = true
console.log(v3);
let v4 = {
    day1:true
}
console.log(v4);
let v5 = [1,2,3,4,5]
console.log(v5);


// =>>>>>>>>>>>>>  Activity 4: Reassigning Variables
// Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console
let value4 = 30
 value4 = 20
console.log(value4);


// =>>>>>>>>>>>>>  Activity 5: Understanding const 
// Task 6: Try reassigning a valriable declared with const and observe the error

const value5 = 100
//  value5 = 200


// Feature request 
// 1. Variable type console log: Write a script that declares variables of different data type and logs both values and type of each variable to the console

let a1 = 30
console.log(a1, typeof(a1));
let a2 = 'JavaScript'
console.log(a2, typeof(a2));
let a3 = true
console.log(a3, typeof(a3));
let a4 = {
    day1:true
}
console.log(a4, typeof(a4));
let a5 = [1,2,3,4,5]
console.log(a5, typeof(a5));

// 2.Reassignment demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment

let l=20
 l=30
console.log(l);

const l1 = 20
l1 =30
console.log(l1);