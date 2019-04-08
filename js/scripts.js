//defining global variables
$().ready(function () {
    var diceRoll1 = 0;
    var diceRoll2 = 0;
    var totalScore1 = 0;
    var totalScore2 = 0;
    //Hide player 2 buttons, Player 1 will be hidden when player 2 turn ends
    $("#roll2").hide()
    $("#end2").hide()
    //button click event
    $("#roll1").click(function () {
        //generate random number between 1 and 6
        event.preventDefault();
        var randomNum = Math.floor(Math.random() * 6) + 1;
        //check if random number generated == 1
        if (randomNum === 1) {
            alert("You have rolled 1. Your turn ends!");
            $("#roll1").hide()
            $("#end1").hide()
        }
        //Output random number if it's not one
        else {
            diceRoll1 = diceRoll1 + randomNum;
            $(".rollOutput1").text(randomNum);
            $(".turnOutput1").text(diceRoll1);
        }
    });
    $("#end1").click(function () {
        totalScore1 = totalScore1 + diceRoll1
        $(".scoreOutput1").text(totalScore1);
        //Reset diceRoll1 to 0
        diceRoll1 = 0
        $(".turnOutput1").text(diceRoll1);
        $("#roll1").hide()
        $("#end1").hide()
    });
})