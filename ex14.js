(function(){

    'use strict'
    const input = require('readline-sync');
    let arrSize;
    let array=[];
    let min,max;
    
    arrSize=input.questionInt("Please enter a number:");

    while(arrSize<=0){
        arrSize=input.questionInt("Please enter a positive larger then 1 number:");

    }

    array.length=arrSize;

    for (var i=0;i<array.length;i++){

        array[i]=randomInteger();

    }

    array.sort(function(a,b)
    {
        return a-b;
    });

    console.log(array);
    min=array[0];
    max=array[array.length-1];



    //min=Math.min(...array);
    //max=Math.max(...array);

    console.log("Min is:",min);
    console.log("Max is:",max);


    function randomInteger() {
        return Math.floor(Math.random() * 50) + 1;
      }


}());