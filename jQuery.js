//variables
var play = false;
var score = 0;
var time = 60;
var trialsLeft;
var fruits =['apple','grapes','lemon','orange','papaya','peach',
                'pear', 'watermelon'];

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

            startAction();
            
        }
    });
    
    function addHearts(){
        for(i=0; i<trailsLeft; i++){
            $("#trailsLeft").append("<img src='images/heart1.png' class = 'life'>");
        }
    }

    function startAction(){
        //$("#fruitContainer").append("<img src='images/apple.png' class = 'fruit'>");
        $("#fruit1").show();
        chooseFruit();
        $("#fruit1").css({ left: Math.round(550 * Math.random()), top: -50 });
    }
    

    function chooseFruit(){
        $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +
         '.png');
    }
});






