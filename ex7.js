//factorial number

'use strict'

    const input = require('readline-sync');
    var num;
    num=input.questionFloat("Please enter a positive number:");

    while(num<0)
    {
    num=input.questionFloat("Please enter a POSITIVE number:");
    }

    console.log("Thank you")

    
        if (num % 1 === 0)
            console.log(num+"! = "+calcFactorial(num));

        else
            console.log(num+"! = "+Factorial(num));



    function calcFactorial(fNum)
    {
        var i;
        var fSum=1;
        for(i=1;i<=fNum;i++)
        {
            fSum*=i;
        }

        return(fSum);
    }


    function Factorial(z) {// gamma function, Lanczos approximation: Gamma (z+1)={\sqrt {2\pi }}{\left(z+g+{\tfrac {1}{2}}\right)}^{z+1/2}e^{-(z+g+1/2)}A_{g}(z)}

        var g = 7;
        var C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
        var x = C[0];
      
        for (var i = 1; i < g + 2; i++)
            x += C[i] / (z + i);
      
        var t = z + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
      }