 // Day 5: Functions
 
                                                  //  Activity 1: Function Declaration

//  Task 1: Write a function to check if a number is even or odd and log the result to the console.
function CheckEvenOdd (num){
    if(num % 2 == 0){
        console.log("even");
    } else {
        console.log("odd");
    }
}

CheckEvenOdd(10)


//  Task 2: Write a function to calculate the square of a number and return the result.
 
function SquareNumber(number){
    let res = number * number
    return res
}

console.log(SquareNumber(10))


                                                    // Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const MaximumNumber = (a,b) => {
    if(a > b){
        console.log("A is max");
    }
    else{
        console.log("B is max");
    }
    if(a === b ){
        console.log("Both are equal");
    }
}
MaximumNumber(-1,10)

// Task 4: Write a function expression to concatenate two strings and return the result

const concatStr = (str1,str2) => {
    return str1 + str2
}

const result = concatStr("Hello, ", "World")
console.log(result);



                                                 // Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const SumOfTwo = (a,b) =>{
    return a+b
}
console.log( "Sum is : ",SumOfTwo(5,10));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const check = (str,char)=> {
  return  str.includes(char)
}
console.log(check("Hello","H"));


                                                // Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.


function productOfNum(p,q = 5){
    return p * q
}

console.log(productOfNum(1))


// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function PersonName(name,age=21){
    return `Hello ${name} , Thanks for Loging . Your age is ${age} hence you can vote .`
}

console.log(PersonName("David"));


                                               // Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const Hoc = (func,time) => {
    for(let i= 0 ; i<time ; i ++){
        func()
    }
}
const Hello = () => console.log("Hello");

Hoc(Hello, 2);


// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
