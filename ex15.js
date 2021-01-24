(function(){
    'use strict'
    const input = require('readline-sync');

    let arr1,arr2,joinedArr;
    let first,second;

    first=input.question("Please enter first string:");
    second=input.question("Please enter second string:");

    arr1=first.split(" ");
    arr2=second.split(" ");

    joinedArr=arr1.concat(arr2);
    console.log(arr1);
    console.log(arr2);
    console.log(joinedArr);

}());