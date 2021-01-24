///Capitalize Vowels (a, e, i, o, u,y)

(function(){

    'use strict'
    const input = require('readline-sync');
    var upper;

    var str=input.question(console.log("Please enter a string:"));

    for (var i of str)
        {
            upper=i.toUpperCase();
            if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u' || i=='y')
                str=str.replace(i,upper);    
        }

        console.log(str);

})();