
'use strict'
    const input = require('readline-sync');
    var num;

    while(num=input.questionInt("How many people are you going with?:")<=0)// A loop that checks if the number received from the user is higher than 0.
        console.log("Please enter a positive number greater than 0,")
    

    var kosher=input.question("Should it be Kosher?(y/n):");
   
    if(kosher=='y'){
        var kosherM=input.question("should it be Kashrut Lemehadrin?(y/n):");
    } 

    if((!(isNaN(kosher))) || (!(isNaN(kosherM))) || (isNaN(num)))// i can also add a check here if the number is small equal to zero then we throw a error . 
    {
        throw new Error ("stop execution"); 
    } 

    const index = input.keyInSelect(['Vegan','Italian','Fish','Meat'],'What kind of food do you want?:');

    var rest=chosenRestaurant(num,kosher,kosherM,index); // call the function
    console.log("Recommended restaurant:",'\n' + rest);

  
function chosenRestaurant(num,kosher,kosherM,index){

    var selected;
    if(kosher=='y' & kosherM=='y')
    {
        if(index==3)//meat restaurant
            selected ="l'entrecote restaurant";
        if(index==2)//fish restaurant
            selected ="Deca restaurant";
        if(index==1 || index==4)// italian restaurant or defult 
            selected ="Little Napoli restaurant";

    }
    
    if(kosher=='y' & ((kosherM=='y' || kosherM=='n') & index==0)) // vegan restaurant
    selected ="Kiki restaurant";

    if(kosher=='n')
    {
        if(index==1 || index==2 ||index==3 || index==4)// italian, fish or meat restaurant
            selected ="Ernesto restaurant";
        if(index==0)// vegan restaurant
             selected ="OPA restaurant";

    } 
    
    if((kosher=='y' & kosherM=='n' & (index==3 || index==2)))//kosher not Lemehadrin  fish or meat restaurant
        selected ="Avazi restaurant";

    if(kosher=='y' & kosherM=='n' & index==1)// kosher not Lemehadrin italian restaurant
    selected ="Panika restaurant";

   return(selected);

}
    

