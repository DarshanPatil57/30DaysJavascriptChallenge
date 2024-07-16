// Day 3: Day 3: Control Structures

// -----------------------------------------------------------------------------------------------------------------------------

                                                  // Activity 1: Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num1 = 0;

if (num1 > 0) {
  console.log("Positive");
} else if (num1 < 0) {
  console.log("Negative");
} else if (num1 === 0) {
  console.log("Zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 18;

if (age >= 18) {
  console.log("Person can vote");
} else {
  console.log("Person cannot vote");
}

                                                    // Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a = 100;
let b = 20;
let c = 100;

let largest;

if (a >= b && a >= c) {
  console.log("A is largest");
} else if (b >= a && b >= c) {
  console.log("B is largest");
} else {
  console.log("C is largest");
}

                                                    // Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid Day");
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 92;
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'F';
        break;
    default:
        grade = 'Invalid score';
}

console.log(`Your grade is: ${grade}`);


                                                        // Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number = 5

console.log(number % 2 == 0 ? "Even" : "Odd");

                                                        // Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2020

if((year % 4 ===0 && year % 100 !==0 ) || ( year % 400 ===0)){
    console.log(`${year} is a leap year`);
} else{
    console.log(`${year} is not a leap year`);
}