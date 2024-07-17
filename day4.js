// Day 4 : LOOPS

// -----------------------------------------------------------------------------------------------------------------------------

                                                  // Activity 1: For Loop

// TASK 1: WAP to print numbers from 1 to 10 using a for loop

 for (let i = 1; i <=10; i++) {
    console.log(i);
    
 }

// TASK 2: WAP to print multiplication table of 5 using for loop

for (let i = 1; i <=10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
    
 }

                                                   // Activity 2: While Loop

// TASK 3: WAP to calculate sum of  numbers from 1 to 10 using a while loop
let i = 1
let sum = 0
while (i<=10) {
    sum += i;
    i++
}
console.log(`Sum is : ${sum}`);

// TASK 4: WAP to print numbers from 10 to 1 using a while loop

let n = 10;

while(n >= 1){
    console.log(n);
    n--
}


                                                   // Activity 3: Do  While Loop

// TASK 5: WAP to print numbers from 1 to 5 using a  do while loop

let p = 1
do {
    console.log(p);
    p++
} while (p<5);

// TASK 6: WAP to calculate factorial of a number  using do  while loop

let number = 4
let factorial = 1
let j = 1
do {
   factorial = factorial*j 
   j++
} while (j <= number);

console.log(`Factorial is : ${factorial}`);


                                                   // Activity 4: Nested Loop


// TASK 7: WAP to print pattern using loop

// let rows = 5
// for (let i = 1; i<= rows; i++) {
//     for (let j = 0; j <= i ; j++) {
//         // console.log("*");
//     }
//     console.log("*");
    
// }

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}

                                                   // Activity 5: Loop control statements


// TASK 8: WAP to print numbers from1 to 10 , but skip number 5 using continue statement 

for (let i = 1; i<=10; i++) {
    if(i === 5){
        continue
    }
    console.log(i);
    
}


// TASK 9: WAP to print numbers from1 to 10 , but stop loop  when number is 7 using break statement 

for(let i = 1; i<=10; i++){
    if(i===7){
        break
    }
    console.log(i);
}