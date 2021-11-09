 let userScore= 0;
 let compScore = 0;
 const userScore_span = document.getElementById("user-score");
 const compScore_span = document.getElementById("computer-score");
 const result = document.querySelector(".result");

 const rockBtn = document.getElementById("r");
 const paperBtn = document.getElementById("p");
 const scissorsBtn = document.getElementById("s");
 const btns = document.querySelectorAll(".image");

 

 function computerChoice(){
     const choice =[ "r" , "p" ,"s"];
     var compChoice = Math.floor(Math.random()*choice.length);
     return choice[compChoice];
 }

 btns[0].addEventListener("click", function(){
     let compChoice = computerChoice();
     if(compChoice == "p"){
         compScore++;
         result.innerHTML = "Computer wins";
         compScore_span.innerHTML = compScore;
         
     }
     else if(compChoice == "s"){
        userScore++;
        console.log(`user wins:${userScore}`);
        result.innerHTML = "User wins";
        userScore_span.innerHTML = userScore;
     }
     else {
         console.log("It is a tie");
     }
 });

 btns[1].addEventListener("click", function(){
    let compChoice = computerChoice();
    if(compChoice == "s"){
        compScore++;
        result.innerHTML = "Computer wins";
        compScore_span.innerHTML = compScore;
    }
    else if(compChoice == "r"){
       userScore++;
       result.innerHTML = "User wins";
       userScore_span.innerHTML = userScore;
    }
    else {
        console.log("It is a tie");
    }
});

btns[2].addEventListener("click", function(){
    let compChoice = computerChoice();
    if(compChoice == "r"){
        compScore++;
        result.innerHTML = "Computer wins";
        compScore_span.innerHTML = compScore;
    }
    else if(compChoice == "p"){
       userScore++;
       result.innerHTML = "User wins";
       userScore_span.innerHTML = userScore;
    }
    else {
        console.log("It is a tie");
    }
});
