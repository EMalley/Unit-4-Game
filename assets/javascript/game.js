// execute this after DOM has fully loaded
$(document).ready(function () {

    // load Javascript After Document is ready
    var randomResult;
    var currentScore = 0
    var wins = 0
    var lose = 0
    var winSound = document.createElement("audio");
    winSound.setAttribute("src", "assets/Sounds/TaDa.mp3");

    // Chooses Random Number to reach to win game. between 19-120
    randomResult = Math.floor(Math.random() * 100 + 20)
    $("#result").html('Number To Win: ' + randomResult);
    console.log(randomResult);

    // Set connection with 4 crystals (between 1-12) and declare random result for a win
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);

        var id = "#crystal-" + (i + 1);
        $(id).attr({
            "data-random": random
        });
    };

    // assign onclick data to each crystal box
    $("#currentScore").html('Current Score: ' + currentScore)
    $('.crystals').click(function () {
        console.log($(this).attr('data-random'));
        console.log("------------------------------");

        // crystal score needs to add on to the previous score
        if (currentScore < randomResult) {
            currentScore = parseInt($(this).attr("data-random")) + currentScore
            $("#currentScore").html("Current Score: " + currentScore);
        }

        // check win === total score
        $("#wins").text("Wins: " + wins);
        if (randomResult === currentScore) {
            $("#currentScore").html("Current Score: " + currentScore);
            wins++;
            winSound.play();
            alert("You Win!");
        };
        // check loose (goes over Score)
        $("#losses").text("Losses: " + lose).show();
        if (currentScore > randomResult) {
            lose++;
            alert("Too bad, So sad! You loose!");
        };

    });

    // each new game, crystals should reset and be a new vaule between 1-12
    $("#newGameBtn").click(function () {
        // reset crystals
        currentScore = 0
        for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * 12) + 1;
            console.log(random);
            var id = "#crystal-" + (i + 1);
            $(id).attr({
                "data-random": random
            });
        };
        console.log("--------------------------");
        // reset Winning Number
        randomResult = Math.floor(Math.random() * 100 + 20)
        $("#result").html('Number To Win: ' + randomResult);
        console.log(randomResult);
        console.log("--------------------------");

        // set Current Score To 0
        $("#newGameBtn").click(function () {
            currentScore = 0
        });
        $("#currentScore").html("Current Score: 0")
    });
});


// $("ID").hide() and .show()