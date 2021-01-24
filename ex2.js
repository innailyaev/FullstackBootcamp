
sum();

function sum(){
    'use strict'
    const input = require('readline-sync');
    var num1= input.questionFloat("Please enter first number:");// float because it can also be (3.5+6.5)
    var num2= input.questionFloat("Please enter second number:");
    if(num1+num2==10)
        console.log("Makes 10");
    else
        console.log("nope");
    
}
