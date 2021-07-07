"use strict";

// get number from user input (1-99 only)

// convert number into a string and store in a new value

// variable to store result from function call (below)

// call a function to check number if it is a happy number
    
    // take number(s) and calculate square answers to see if they become 1
        // split number(s) into array
        // iterate through array to square the number(s)
        // keep looping until you get 1 or 0 (so the loop will actually stop)
            // find out how to stop the loop
                // unhappy numbers end if result is: 4, 16, 37, 58, 89, 145, 42, 20
    // return result to where called
        // result should be whether or not the number is a happy number, not the actual value

// out put result to console



// function happyNumber(){

//     // get number from user
//     let unhappyNumbers = [4, 16, 20, 37, 42, 58, 89, 145];
//     let yourNumberIsHappy = "Your number, is a Happy Number";
//     // let yourNumberIsUnhappy = "Your number, is NOT a Happy Number";
//     let result = "";

//     // check number to make sure it initially isn't already unhappy
//     for (let i = 0; i < unhappyNumbers.length; i++){
//         if (userNumber === unhappyNumbers[i]){
//             result = "Your number, is NOT a Happy Number";
//         } 
        
//         // else {
//            // result = "Your number, is a Happy Number";
//        // }
//     }

//     console.log(result);
// }

// get a number from user and convert user input to a number
function convertNumber(){
    let userString = prompt("Enter a number from 1 to 99", "30");

    let userNumber = parseInt(userString);

    console.log(userNumber);
}

convertNumber(); 
// happyNumber();