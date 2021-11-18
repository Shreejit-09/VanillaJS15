let gamePattern = [];
const buttonColours = ["red" , "blue" , "green" , "yellow"];
let userClickedPattern = [];
let level = 0;
let started=false;

// for automatic generation of pattern
function nextSequence(){
    userClickedPattern = [];
    level++; 
    $(".message").text("Level "+ level);
    let randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    if(level>1){
        $(".instruction").text("Remember the previous color sequence.");
    }
    else{
        $(".instruction").text("");
    }
    playSound(randomChosenColour);
   
   
}



// for buttons pressed by users
$(".button").click(function(){
   let userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
//    $("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length - 1);
});
//------------------------------------
function playSound(name){
    let audio = new Audio("sounds/"+name+".mp3");
    
    audio.play();

}


// fn for fadein&out of button pressed by user
function animatePress(currentPress){
     
       $("#"+ currentPress).addClass("pressed");
       setTimeout(function(){
        $("#"+ currentPress).removeClass("pressed");
       },100);
     
}

$(document).on("keypress" , function(){
    if(!started){
        $(".message").text("Level "+ level);
        nextSequence();
        started =true;
    }
});


    function checkAnswer(currentLevel){
        if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
            if(userClickedPattern.length === gamePattern.length){
                setTimeout(nextSequence , 1000);
                userClickedPattern = []; 
            }
        }
        else{
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);
            $(".message").text("Game Over, Press Any Key to Restart");
            startOver();
        }
    }


    function startOver(){
            level = 0;
            gamePattern = [];
            started = false;
    }
    $(".restartBtn").click(function(){
        startOver()
        nextSequence();
    });