//defining global variables
$().ready(function () {
    var diceRoll1 = 0;
    var diceRoll2 = 0;
    var totalScore1 = 0;
    var totalScore2 = 0;
    //Hide player 2 buttons, Player 1 will be hidden when player 2 turn ends
    $("#roll2").hide()
    $("#end2").hide()
    //button click event for player 1
    $("#roll1").click(function () {
        //generate random number between 1 and 6
        event.preventDefault();
        var randomNum = Math.floor(Math.random() * 6) + 1;
        //check if random number generated == 1
        if (randomNum === 1) {
            alert("You have rolled 1. Your turn ends!");
            $("#roll1").hide()
            $("#end1").hide()
            $("#roll2").show()
            $("#end2").show()
        }
        //Output random number if it's not one
        else {
            diceRoll1 = diceRoll1 + randomNum;
            $(".rollOutput1").text("Dice Roll: " + randomNum);
            $(".turnOutput1").text("Turn Total:" + diceRoll1);
        }
    });
    $("#end1").click(function () {
        totalScore1 = totalScore1 + diceRoll1
        $(".scoreOutput1").text("Total Score: " + totalScore1);
        //Reset diceRoll1 to 0
        diceRoll1 = 0
        $(".turnOutput1").text("Turn Total: " + diceRoll1);
        $("#roll1").hide()
        $("#end1").hide()
        $("#roll2").show()
        $("#end2").show()
         //Determines the winner and alerts the winning score of the player
         if(totalScore1 >=100){
            alert("Congratulations!!! You are the winner!")
         }
    });
    //button click event for player 2
    $("#roll2").click(function () {
        //generate random number between 1 and 6
        event.preventDefault();
        var randomNum2 = Math.floor(Math.random() * 6) + 1;
        //check if random number generated == 1
        if (randomNum2 === 1) {
            alert("You have rolled 1. Your turn ends!");
            $("#roll2").hide()
            $("#end2").hide()
            $("#roll1").show()
            $("#end1").show()
        }
        //Output random number if it's not 1
        else {
            diceRoll2 = diceRoll2 + randomNum2;
            $(".rollOutput2").text("Dice Roll: " + randomNum2);
            $(".turnOutput2").text("Turn Total: " + diceRoll2);
        }
    });
    $("#end2").click(function () {
        totalScore2 = totalScore2 + diceRoll2
        $(".scoreOutput2").text("Total Score: " + totalScore2);
        //Reset diceRoll1 to 0
        diceRoll2 = 0
        $(".turnOutput2").text("Turn Total: " + diceRoll2);
        $("#roll2").hide()
        $("#end2").hide()
        $("#roll1").show()
        $("#end1").show()
        //Determines the winner and alerts the winning score of the player
        if(totalScore2 >=100){
            alert("Congratulations!!! You are the winner!")
        }
    });
})