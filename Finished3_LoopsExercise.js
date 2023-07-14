// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let wholeNumber = 1;
while (wholeNumber <= 5) {
console.log(wholeNumber);
wholeNumber++;
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let wholeNumberTwo = 1;
do {
console.log(wholeNumberTwo);
wholeNumberTwo++;
} while (wholeNumberTwo <= 5);
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let wholeNumberThree = 1; wholeNumberThree <= 5; wholeNumber++) {
    console.log(wholeNumberThree);
    }
// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// 'while' loop
let wholeNumberA = 10;
while (wholeNumberA >= 1) {
console.log(wholeNumberA);
wholeNumberA--;
}

// 'do while' loop
let wholeNumberB = 10;
do {
console.log(wholeNumberB);
wholeNumberB--;
} while (wholeNumberB >= 1);

// 'for' loop
for (let wholeNumberC = 10; wholeNumberC >= 1; wholeNumberC--) {
    console.log(wholeNumberC);
    }


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// 'while' loop
let wholeNumberFiveA = 7;
while (wholeNumberFiveA<= 27) {
console.log(wholeNumberFiveA);
wholeNumberFiveA++;
}
// 'do while' loop
let wholeNumberFiveB = 7;
do {
console.log(wholeNumberFiveB);
wholeNumberB++;
} while (wholeNumberB <= 27);

// 'for' loop
for (let wholeNumberFiveC = 7; wholeNumberFiveC <= 27; wholeNumberFiveC++) {
    console.log(wholeNumberFiveC);
    }

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// 'while' loop
let wholeNumberSixA = 10;
while (wholeNumberSixA <= 100) {
console.log(wholeNumberSixA);
wholeNumberSixA += 10;
}
// 'do while' loop
let wholeNumberSixB = 10;
do {
console.log(wholeNumberSixB);
wholeNumberSixB += 10;
} while (wholeNumberSixB <= 100);

// 'for' loop
for (let wholeNumberSixC = 10; wholeNumberSixC <= 100; wholeNumberSixC += 10) {
    console.log(wholeNumberSixC);
    }

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let wholeNumberFour = 1;
while (wholeNumberFour >= -100) {
console.log("HELP ME!");
wholeNumberFour--;
}
// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
const myFavoriteNumber = 7;
for (let i = 0; i <= favoriteNumber; i++) {
console.log(i);
}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
const favoriteNumber = 42;
for (let i = 0; i <= 100; i++) {
if (i === favoriteNumber) {
console.log(i + " my favorite number!");
} else {
console.log(i + " not my favorite number");
}
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//             Answer

//You would use a while loop when you don't know the exact number of iterations in advance and want to continue looping until a certain condition is no longer true.
//You would use a do-while loop when you want to ensure that the code inside the loop is executed at least once, regardless of the condition.
//You would use a for loop when you have a clear idea of the number of iterations.
// I guess it all depends on the complexity of the problem and what you are more comfortable with.



// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideNumber = 0; outsideNumber <= 3; outsideNumber++) {
    console.log("counting down from", outsideNumber);
    for (let insideNumber = outsideNumber; insideNumber >= 1; insideNumber--) {
    console.log("inside", insideNumber);
    }
    console.log("***********************************");
    }

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I did find it a bit hard had to look out resources videos as well as I asked ChatGPT for help in understating solving and the solution to the problem.

// Email your file to us or commit your file to GitHub and email us a link.