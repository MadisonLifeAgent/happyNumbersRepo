"use strict";

// get usernumber
let userNumberString = prompt("enter a number", "125");

let newArray = splitStringUp(userNumberString);

// split up string in to an array
function splitStringUp(userString){
    let justANumber = "";
    let justAnArray = [];

    // take each string and put into an array
    for(let i = 0; i < userString.length; i++){
        justANumber = userString.charAt(i);
        justAnArray.push(justANumber);
    }
    return justAnArray;
}

// convert Array String elements into numbers
let nowNumberArray = stringToNumber(newArray);

function stringToNumber(anotherArray){
    let justAnotherArray = [];
    let noLongerAString = 0;

    // take each array element (string) and convert to a number
    for (let i = 0; i < anotherArray.length; i++){
        let justAnotherNumber = anotherArray[i];
        
        // convert string to number
        noLongerAString = parseInt(justAnotherNumber);

        // push to new array
        justAnotherArray.push(noLongerAString);
    }

    return justAnotherArray;
}

// multiply numbers in number array to each other
let productsArray = multiplyTheNumbers(nowNumberArray);

function multiplyTheNumbers(numberArray) {
    let productsArray = [];
    for (let i = 0; i < numberArray.length; i++){
        let productNumber = numberArray[i] * numberArray[i];
        productsArray.push(productNumber);
    }
    
    return productsArray;
}

// CONTINUE FROM HERE FUE
// ADD UP PRODUCTS TO SEE IF THEY ARE HAPPY OR UNHAPPY
    // IF THEY EQUAL 1 THEN THEY ARE HAPPY
    // IF THEY EQUAL 4 THEY ARE NOT
    
// debug line
console.log(productsArray);