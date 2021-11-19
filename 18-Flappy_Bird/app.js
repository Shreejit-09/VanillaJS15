let gravity = 2;
let birdBottom = 200;
let birdLeft = 400;
$("body").on("click" , function(){
    setInterval(Gravity , 20);
    $(document).keypress(toGoUpDownLeftRight);
});
function Gravity(){
     birdBottom +=gravity;
     if(birdBottom >525){
         birdBottom = 525;
     }
     else{
        birdBottom +=gravity;
     }
     $(".bird").css("top", birdBottom+"px");

}
function toGoUpDownLeftRight(e){
       if(e.keyCode = 37){
           birdLeft-=50;
       }
       else if(e.keyCode = 38){
           birdBottom -= 50 ; 
       }
       else if(e.keyCode = 38){
        birdLeft +=50 ; 
       }
    else if(e.keyCode = 38){
        birdBottom += 50 ; 
    }
    else{
        $(".sky").text("Press up, down, right or left to move the bird");
    }
    $(".bird").css("top", birdBottom+"px");
    $(".bird").css("left", birdLeft+"px");
       }

