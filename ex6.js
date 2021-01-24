'use strict'

    const input = require('readline-sync');
    var num;

    num=input.questionInt("Please choose a number larger than 10:");
    console.log("User answer:"+num);

    while(num<=10)
    {
    num=input.questionInt("Please choose a number LARGER than 10:");
    console.log("User answer:"+num);

    }

console.log("Thank you")