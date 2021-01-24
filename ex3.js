
numToWords()

function numToWords(){
    'use strict'
    const input = require('readline-sync');
    const numberToWords = require('number-to-words');
    var number=input.question("Please enter a number between 0-9:");
    console.log(numberToWords.toWords(number));
}
