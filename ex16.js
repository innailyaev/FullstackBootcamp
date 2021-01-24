(function(){
    'use strict'
    const input = require('readline-sync');

    let myArr=[];

    for(var i=0;i<=10;i++){

        myArr.push(i);

    }
    console.log(myArr);
    console.log("Reversed array:\n",myArr.reverse());

}());