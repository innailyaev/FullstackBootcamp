//Palindrome

(function(){

    'use strict'
    const input = require('readline-sync');

    var str=input.question(console.log("Please enter a string:"));

    if(palindrome(str)==true)
        console.log("I'ts a palindrome")

    else
      console.log("NOT palindrome")


    function palindrome(str) {
        var re = /[\W_]/g;
        str = str.toLowerCase().replace(re, '');
        str = str.trim();
        var len=str.length;

        for (var i = 0; i < len/2; i++) {
          if (str[i] !== str[len - 1 - i]) {
              return false;
          }
        }
        return true;
       }


})();