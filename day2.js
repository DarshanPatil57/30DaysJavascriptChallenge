// Day 2: Operators

// -----------------------------------------------------------------------------------------------------------------------------

                                                         // Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

let add1 = 2
let add2 = 3
console.log("Addition of two is :" + (add1+add2));

// Task 2: Write a program to subtract two numbers and log the result to the console.

let sub1 = 3;
let sub2 = 2
console.log("Subtraction of two is :" + (sub1-sub2));

// Task 3: Write a program to multiply two numbers and log the result to the console.

let mul1 = 2;
let mul2 = 3;
console.log("Multiplaction of two is :" +( mul1*mul2));

// Task 4: Write a program to divide two numbers and log the result to the console.

let div1 = 2;
let div2 = 3;
console.log("Division of two is:" + (div1/div2));

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let rem1 = 2 ;
let rem2 = 3;
console.log("Remainder of two is :" + (rem1%rem2));

// -----------------------------------------------------------------------------------------------------------------------------

                                                          // Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let a = 5;
let b = 5;
console.log("Add with += :" + (a+=b));

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let c = 5;
let d = 5;
console.log("Sub with -= :" + (c-=d));

// -----------------------------------------------------------------------------------------------------------------------------

                                                        // Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

var p= 10;
var q= 20
console.log("> : "+ (p > q));
console.log("< : "+ (p < q));

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

console.log(">= : "+ (p >= q));
console.log("<= : "+ (p <= q));

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

console.log("== : "+ (p == q));
console.log("=== : "+ (p === q));


// -----------------------------------------------------------------------------------------------------------------------------

                                                        // Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
var x = 10;
var y = 20;
var z = 15;
console.log("&& : " + ((x < y) && (y > z))); 

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log("|| : " + ((x > y) || (y > z))); 

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

var res = (x > y);
console.log("! : " + (!res)); 

// -----------------------------------------------------------------------------------------------------------------------------

                                                       // Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let num = 5;
console.log(num > 0 ? "positive" : "negative");
