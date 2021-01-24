// HANGMAN
(function(){
'use strict'
const input = require('readline-sync')
var figlet = require('figlet');
var randomWords = require('random-words');

var ranWord,hidden,letter,flag=0;
let count=10;
var arr,hidenArr;

ranWord=(randomWords());
ranWord=ranWord.toLowerCase();
//console.log(ranWord);
hidden=ranWord.replace(/\S/gi,'*');
hidenArr=hidden.split('');
arr=ranWord.split('');

designedWord('Hang Man','Flower Power');



while(count>=1){

    console.log(" You have",count,"guesses");
    console.log(" The word is:\n",hidden);
    var chosenOption=input.questionInt("What would you like to do? \n 1.guess the letter  \n 2.guess the entire word\n ");
    while(chosenOption!=1 & chosenOption!=2)
                {
                    chosenOption=input.questionInt("Please enter your choise (1 or 2):");
                }

    if(chosenOption==2){
              var x = entireWord();
    }
    else{
        letter=input.question("What is your guess?");
        if(checkLetter()==false){
            count--;
        }
    }

    
        hidden=hidenArr.join('');
        

        if((ranWord.localeCompare(hidden)==0) || (x==1)){
            hidden=ranWord;
            console.log(" The word is:\n",hidden);
            console.log("Well done, you guessed the word !!!");
            designedWord('Excellent','Big');
            flag=1;
            break;
        }
  }


    if(flag==0){
        console.log("You run out of attempts, you did not guess the word :(")
        console.log("The word is:",ranWord);
        designedWord('Game Over','Big');
    }


    
    function checkLetter(){ //function that check the input from the user and return true if the letter is in the word

        var temp=false;

        while((/[^a-zA-Z]/.test(letter)) || letter.length==0 || letter.length>1){

            if(letter.length>1){
                console.log("Please enter only one character");
                console.log(" You have",count,"guesses");
                console.log(" The word is:\n",hidden);
                letter=input.question("What is your guess?");
                
            }
            else{
                console.log("Invalid input");
                letter=input.question("What is your guess?");
            }
        }
        letter=letter.toLowerCase();

        for(var i=0;i<arr.length;i++){

            if(arr[i]==letter){
                hidenArr[i]=letter;
                temp=true;
                }
        }

        return temp;
    }

    function designedWord(word,fontW){// function for the figlet design

        console.log(figlet.textSync(word, {
            font: fontW,
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 150,
            whitespaceBreak: false
        }));


    }

    function entireWord(){// function if the user want to guess the entire word

    var flag2=0;
    var word1=input.question("What is your guess for the word?");
        
        if(ranWord.localeCompare(word1)==0){
            flag2=1;
        }
        else{
            console.log("Wrong guess");
        }

    return flag2;     
}

})();