// Game Of War

(function(){

    'use strict'
    const input = require('readline-sync');

    class Cards{
        constructor(cNum, cSuit,cName,cBet){
        this.name=cName;
        this.bet=cBet;
        this.cardNum=cNum;
        this.cardSuit=cSuit;
        this.Money=50;
        }
    }

    const min=1, max=12;
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const player1=new Cards();
    const player2=new Cards();
   
    console.log("*^*^*^*^*^*^*^*^*^*^Welcome To WAR*^*^*^*^*^*^*^*^*^*^");
    player1.name=input.question("Player 1 Please enter your name:");
    console.log("Hello", player1.name, "You currently have", player1.Money, "ILS");

    player2.name=input.question("Player 2 Please enter your name:");
    console.log("Hello", player2.name, "You currently have", player2.Money, "ILS");


    while(1)
    {
            player1.bet=input.questionInt(console.log(player1.name,"place your bet for the next round (1 to",player1.Money,"):"));
            if(checkBet()==0){
                break;
            }
            player2.bet=input.questionInt(console.log(player2.name,"place your bet for the next round (1 to",player2.Money,"):"));

            if(checkBet()==0){
                break;
            }

            player1.cardNum=randomInteger(min,max);
            player2.cardNum=randomInteger(min,max);
            player1.cardSuit=randomSuits(suits);
            player2.cardSuit=randomSuits(suits);
           
            if(player1.cardNum>player2.cardNum){
                player1.Money+=player2.bet;
                player2.Money-=player2.bet;
             }

            if(player1.cardNum<player2.cardNum){
                player2.Money+=player1.bet;
                player1.Money-=player1.bet;
            }
        
            if(player1.Money<=0){//check to see if the player runs out of money, print a message and finish the game
                console.log(player1.name,"card is", player1.cardNum,player1.cardSuit, "And",player2.name,"card is", player2.cardNum,player2.cardSuit);
                console.log( player1.name,"You lost",player1.bet,"ILS And now you have",player1.Money,"ILS");
                console.log("You are broke... Bye Bye");
                console.log( player2.name,"You won",player1.bet,"ILS And now you have",player2.Money,"ILS");
                break;
            }

            if(player2.Money<=0){//check to see if the player runs out of money, print a message and finish the game 
                console.log(player1.name,"card is", player1.cardNum,player1.cardSuit, "And",player2.name,"card is", player2.cardNum,player2.cardSuit);
                console.log( player2.name,"You lost",player2.bet,"ILS And now you have",player2.Money,"ILS");
                console.log("You are broke... Bye Bye");
                console.log( player1.name,"You won",player2.bet,"ILS And now you have",player1.Money,"ILS");
                break;
            }

            if(anotherRound()==2){ 
                console.log("",player1.name,"got",player1.Money,"ILS\n",player2.name,"got",player2.Money,"ILS Bye Bye");
                break;
            }

   }


   function checkBet(){ // function that verify if the player entered a valid bet

    if(player1.bet<=0 || player1.bet>player1.Money){
        console.log("I said between 1 to",player1.Money,"and you typed",player1.bet,"!!!");
        console.log("We don't play with liars!!! Bye");
        return 0;
        }

    if(player2.bet<=0 || player2.bet>player2.Money){
        console.log("I said between 1 to",player2.Money,"and you typed",player2.bet,"!!!");
        console.log("We don't play with liars!!! Bye");
        return 0;
        }     
    }


        function randomSuits(arr){// function that return a random card suit

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


    function randomInteger(min, max) { // function return a random card number
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }



    function anotherRound(){ // function that check the case of a draw and then ask the players if they want another round and after every round ask if to continue for another round or end the game.
 
        var chosenOption;

        console.log(player1.name,"card is", player1.cardNum,player1.cardSuit, "And",player2.name,"card is", player2.cardNum,player2.cardSuit);

        if(player1.cardNum==player2.cardNum){
        
                console.log("There is a draw");
                
            }
                chosenOption=input.questionInt("What would you like to do? \n 1.Play another round  \n 2.Leave with the money\n ");

        if(player1.cardNum>player2.cardNum) {
            console.log(player1.name,"won", player2.bet, "ILS !! And now he have", player1.Money,"ILS");
            chosenOption=input.questionInt("What would you like to do? \n 1.Play another round  \n 2.Leave with my money\n ");
        }

        if(player1.cardNum<player2.cardNum){
            console.log(player2.name,"won", player1.bet, "ILS !! And now he have", player2.Money,"ILS");
            chosenOption=input.questionInt("What would you like to do? \n 1.Play another round  \n 2.Leave with the money\n ");

        }

        while(chosenOption!=1 & chosenOption!=2)
                {
                    chosenOption=input.questionInt("Please enter your choise (1 or 2):");
                }

        return chosenOption;

    }


})();
