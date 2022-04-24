const computerchoicedisplay= document.getElementById("computer-choice");
const userchoice = document.getElementById("user-choice");
const result= document.getElementById("result");
const possiblechoices = document.querySelectorAll("button");
let userChoice
let ComputerChoice

possiblechoices.forEach(possiblechoice=> possiblechoice.addEventListener('click',(e)=>{     // (e) means event and => with (e) means the function that should occur when the event is triggered
   userChoice= e.target.id; //The targetted ID when the event occurred get captured by e.target.id
   userchoice.innerHTML= userChoice;
   GenerateComputerChoice();
   Results();
   
}))

function GenerateComputerChoice(){
    const randomnumber= Math.floor(Math.random() * 3) + 1 ;//Or put possiblechoices.length() insted of 3 , since both are same here that's why we use 3
    //math.floor used because to get an integer
    //We add +1 because we will be getting number from 0 to 2 without it because we will be counting indexes
    console.log(randomnumber);


    if(randomnumber==1){
        computerchoicedisplay.innerHTML='Rock'
    }
    if(randomnumber==2){
        computerchoicedisplay.innerHTML='Paper'
    }
    if(randomnumber==3){
        computerchoicedisplay.innerHTML='Scissors'
    }

    //The code from line 22 to 30 can't be written out of this function because the scope of randomnumber is limited to this function only
    
}

function Results(){
    if(computerchoicedisplay.innerHTML != userchoice.innerHTML){
        result.innerHTML= "Lose";
    }
    else{
        result.innerHTML= "Win";
    }
}







