'use strict'

const readline = require('readline');
var i;
var oddArr=[];

for(i=0; i <=100; i++)
{
    if(i%2==1)// check if the number is odd
            oddArr.push(i);  
}

console.log(oddArr);