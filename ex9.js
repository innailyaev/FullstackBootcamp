// prime numbers

(function(){

'use strict'
const input = require('readline-sync');

var i,n;
var primeArr=[];

n=input.questionInt("Please choose a number larger than 1:")

while(n<=1)
    {
    n=input.questionInt("Please choose a number LARGER than 1:");
    }

    for(i=1;i<=n;i++)
    {
        if((primeNum(i))==true)
           primeArr.push(i);
    }

    console.log(primeArr);



    function primeNum(num)// function that check if the number is prime (returns true) or not (returns false)
    {
        var x;
        var isPrime=true;

        if(num==1)
            isPrime=false;

        for ( x = 2; x < num; x++) {
            if (num % x == 0) {
                isPrime = false;
                break;
            }
        }
        return(isPrime);  
    }
})();
