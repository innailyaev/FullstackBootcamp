// strings

(function(){

    'use strict'
    const input = require('readline-sync');

    let userString=input.question("Please enter a string:");
   // console.log(userString.split(' ').join('*'));// without using loop, first we split the string by space char into array and then we make join and put *. 

   for(var i=0; i<userString.length;i++)
    {
        userString=userString.replace(' ','*');
    }

    console.log(userString);

})();