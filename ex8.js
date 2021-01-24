'use strict'

    const input = require('readline-sync');
    var i;
    var digits = []
    
     for(i=1;i<=100;i++)
    {
        if(((i%7)==0) || (splitNumber(i)==true))
            digits.push("BOOM")
        else digits.push(i);

    }
    console.log(digits);


    function splitNumber(num)
    {
        var bool=false;

        while (num > 0) {

            if((num%10)==7)
                {
                    bool=true;
                }
            num = parseInt(num / 10);
            }

    return(bool);
    }