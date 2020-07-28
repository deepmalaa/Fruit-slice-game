//variables
var play = false;
var score = 0;

var trialsLeft = 3;
var fruits =['apple','grapes','lemon','orange','papaya','peach',
                'pear', 'watermelon'];
var step; 
var action;               

$(function(){
    //checking if playing or not
    $("#set").click(function(){
        if (play == true){
            location.reload();
        }

        else{
            play = true;
            score = 0;
            $("#scoreValue").html(score);
            $("#set").html("Reset Game");
            $("#trailsLeft").show();
            trailsLeft = 3;

            addHearts();

            $("#gameOver").hide();
            $("#set").html("Reset Game");

            startAction();
            
        }
    });
    
    function addHearts(){
        //empty trail left box
        $("#trailsLeft").empty();
        for(i=0; i<trailsLeft; i++){
            $("#trailsLeft").append("<img src='images/heart1.png' class = 'life'>");
        }
    }

    function startAction(){
        //$("#fruitContainer").append("<img src='images/apple.png' class = 'fruit'>");
        $("#fruit1").show();
        chooseFruit();
        $("#fruit1").css({ left: Math.round(550 * Math.random()), top: -50 });

        //generate random step
        step = 1 + Math.round(5*Math.random());

        //move fruit downby on step every 10 secs
        action = setInterval(function(){
            $("#fruit1").css('top', $("#fruit1").position().top + step);

        //check if fruit is low
        if($("#fruit1").position().top > $("#fruitContainer").height()){
            if(trialsLeft > 1){
                $("#fruit1").show();
                chooseFruit();
                $("#fruit1").css({ left: Math.round(550 * Math.random()), top: -50 });

                //generate random step
                step = 1 + Math.round(5*Math.random());
                //decreasing trials left
                trailsLeft--;
                addHearts();
            }
            else{
                play = false;
                $("#set").html("Start Game");
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your Score is ' + score +'</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
        }

        

        },10);

        
    }
    

    function chooseFruit(){
        $("#fruit1").attr('src' , 'images/' + fruits[Math.round(7*Math.random())] +
         '.png');
    }

    function stopAction(){
        clearInterval(action);
        $("#fruit1").hide();
    }

});






