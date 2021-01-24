'use strict'
const input = require('readline-sync');
console.log('\n'+'\n'+'Hello! Welcome to the quiz!'+'\n'+ 'Are you the next Bake Off pastry chef?'+'\n');
    
    var i = 1;// index for the question's to know if it's an evan or odd question
    var totalSum=0;// to sum the answers

    qNum('First');
    var index = input.keyInSelect(['Why measure?','Measuring spoons','A random cup from the kitchen','Measuring jug'],"It's Cake Week and you're making your favorite chocolate cake. Which tool do you use to measure the flour?");
    totalResult(i,index);
    i++;
    qNum('Second');
    index = input.keyInSelect(['As a frosting','As decor','As a filling','As a glaze'],"Time for the technical round! you are makeing chocolate ganache for your cake. How do you use it?");
    totalResult(i,index);
    i++;
    qNum('Third');
    index = input.keyInSelect(['Just put cake on cake','Wooden dowels','Frosting between layers','Cake boards'],"You want your cake with six tiers. What are you going to use to support all those tiers?");
    totalResult(i,index);
    i++;
    qNum('Fourth');
    index = input.keyInSelect(['Dry','Moist','Crunchy','Soft'],"In the technical round, you make biscotti. What texture are you going for?");
    totalResult(i,index);
    i++;
    qNum('Fifth');
    index = input.keyInSelect(['Fondant','Royal icing','Gum paste','Marzipan'],"It's time for the showstopper round. you are making a gingerbread house decorated with 3D edible flowers. With what you decorate the cookies?");
    totalResult(i,index);
    i++;
    qNum('Sixth');
    index = input.keyInSelect(['Honey','Whipped cream','Maple syrup','Chocolate'],"It's Pastry Week! you decide to make baklava, What do you put between the pastry layers?");
    totalResult(i,index);
    i++;
    qNum('Seventh');
    index = input.keyInSelect(['Boil them','Fry them','Flambe them','Bake them'],"Now we are making a cannoli. How do you cook the shells?");
    totalResult(i,index);
    i++;
    qNum('Eighth');
    index = input.keyInSelect(['Plastic card','Spoon','Spatula','Knife'],"You decorate a cake with whipped cream, which tool do you use to smooth the whipped cream that will be really smooth on the cake?");
    totalResult(i,index);
    i++;
    qNum('Ninth');
    index = input.keyInSelect(['In any texture','Room temperature','Melted','Hard from the fridge'],"Cookie Week has arrived, you are making butter cookies. In what texture will you add the butter to the flour?");
    totalResult(i,index);
    i++;
    qNum('Tenth');
    index = input.keyInSelect(['Tarte Tatin','Germcnoodle','Macarons','Brownie'],"You've made it to the final round. You need to make a French dessert. What do you make?");
    totalResult(i,index);

    console.log('\n','Quiz results:','\n')
    Result(totalSum);

    
function totalResult(qNum,index)// function that count's the answers sum.
{
    index++;
    if(qNum%2==0){// check if the Question number is enev

        if(index==1)
        totalSum+=4;
        if(index==2)
        totalSum+=1;
        if(index==3)
        totalSum+=3;
        if(index==4)
        totalSum+=2;
        //console.log(totalSum);
    }

    else{// Question number is odd
    
    if(index==1)
    totalSum+=1;
    if(index==2)
    totalSum+=4;
    if(index==3)
    totalSum+=2;
    if(index==4)
    totalSum+=3;
    //console.log(totalSum);
    }
}

function qNum(num){
    console.log('\n'+num+' Question:'+'\n');
}

function Result(Tnum){// function that give the final quiz result. 
    if(Tnum>=30 && Tnum<=40)
        console.log("Congratulations! You're officially the best amateur baker. Your knowledge and skill are unmatched.");
    if(Tnum>=25 && Tnum<30)
        console.log("You're almost there, I might not have approached the bake off competition yet, but there is somewhere to aim for.");

    if(Tnum>=20 && Tnum<25)
       console.log("I would not run the kitchen to make a cake now but study a little more and then definitely try.");
    if(Tnum<20)
        console.log("Get away from the oven, open baking books and cooking programs and start from the beginning. Wishing you lots of success. Everything is possible, do not give up.")
  
    }