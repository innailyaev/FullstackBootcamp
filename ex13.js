

(function(){

    'use strict'
    const input = require('readline-sync');
    var wordArr=[];
    var re = /[^A-Za-z]+/g;


    var str=input.question(console.log("Please enter a string:"));
    wordArr=str.split(' ');

    var count=0; 
    var longestWord;

    for(var i=0; i<wordArr.length; i++)
    {
        wordArr[i]=wordArr[i].replace(re,'');
        if((wordArr[i].length)>count)
        {
            count=wordArr[i].length;
            longestWord=wordArr[i];

         }
    }  

    console.log(count);
    console.log("The longest word in your sentence:",'"', longestWord,'"')

})();