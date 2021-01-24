// Game Of War

(function(){

    'use strict'
    const input = require('readline-sync');

    class Cards{
        constructor(cNum, cSuit){
        this.cardNum=cNum;
        this.cardSuit=cSuit;
        this.Money=50;
        }
    }

    var name;
    var bet;
    const min=1, max=12;
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const user=new Cards();
    const comp=new Cards();
   
    console.log("*^*^*^*^*^*^*^*^*^*^Welcome To WAR*^*^*^*^*^*^*^*^*^*^");
    name=input.question("Please enter your name:");
    console.log("Hello", name, "You currently have", user.Money, "ILS");

    while(1)
    {
            bet=input.questionInt(console.log("place your bet for the next round (1 to",user.Money,"):"));
            if(checkBet()==0){
                break;
            }

            user.cardNum=randomInteger(min,max);
            comp.cardNum=randomInteger(min,max);
            user.cardSuit=randomSuits(suits);
            comp.cardSuit=randomSuits(suits);
           
            if(user.cardNum>comp.cardNum){
                user.Money+=bet;;
             }

            if(user.cardNum<comp.cardNum){
                user.Money-=bet;
            }
        
            if(user.Money<=0){
                console.log("You lost",bet,"And now you have",user.Money);
                console.log("You are broke... Bye Bye");
                break;
            }

            if(anotherRound()==2){
                console.log("You got",user.Money,"ILS Bye Bye");
                break;
            }

   }


   function checkBet(){

    if(bet<0 || bet>user.Money){
        console.log("I said between 1 to",user.Money,"and you typed",bet,"!!!");
        console.log("I don't play with liars!!! Bye");
        return 0;
        }
    }


        function randomSuits(arr){

            var s = (arr[Math.floor(Math.random() * arr.length)]);
            var ascii_char;

            switch(s){

            case 'Diamonds':
            ascii_char = '♦';
            break;
            
            case 'Hearts':
            ascii_char='♥';
            break;
            
            case 'Spades':
            ascii_char='♠';
            break;

            case 'Clubs':
            ascii_char='♣'; 
            break;    
        }
        return ascii_char;
    }


    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }



    function anotherRound(){

        var chosenOption;

        console.log("Your card is", user.cardNum,user.cardSuit, "And my card is", comp.cardNum,comp.cardSuit);

        if(user.cardNum==comp.cardNum){
        
                console.log("There is a draw");
                chosenOption=input.questionInt("What would you like to do? \n 1.Play another round  \n 2.Leave with the money\n ");
                
            }

        else if(user.cardNum>comp.cardNum) {
            console.log("You won", bet, "ILS !! And now you have", user.Money,"ILS");
            chosenOption=input.questionInt("What would you like to do? \n 1.Play another round  \n 2.Leave with my money\n ");
        }

        else{
            console.log("You lost", bet, "ILS !! And now you have", user.Money,"ILS");
            chosenOption=input.questionInt("What would you like to do? \n 1.Play another round  \n 2.Leave with the money\n ");

        }

        while(chosenOption!=1 & chosenOption!=2)
                {
                    chosenOption=input.questionInt("Please enter your choise (1 or 2):");
                }

        return chosenOption;

    }


})();
