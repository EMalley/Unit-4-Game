// execute this after DOM has fully loaded
$(document).ready(function () {

    // load Javascript After Document is ready
    var randomResult;
    var wins = 0
    var lose = 0

    // Chooses Random Number to reach to win game. between 19-120
    randomResult = Math.floor(Math.random() * 100 + 20)
    $("#result").html('Number To Win: ' + randomResult);
    console.log(randomResult);

    // Set connection with 4 crystals (between 1-12) and declare random result for a win
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);
        $('.crystalArea').append('<div class="crystals"></div');
        $(".crystals").attr({
            "data-random": random
        });
    };
    // assign onclick data to each crystal box
    $('.crystals').click(function () {
        console.log($(this).attr('data-random'));
    });
    console.log("--------------------------")

    // crystal score needs to add on to the previous score

    // check win === total score

    // check loose (goes over Score)

    // reset crystal/winning score after win or loose
    // each new game, crystals should reset and be a new vaule between 1-12
    $("#newGameBtn").click(function () {
        // reset crystals
        for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * 12) + 1;
            console.log(random);
            $('.crystalArea').attr('<div class="crystals"></div');
        };
        // reset Winning Number
        randomResult = Math.floor(Math.random() * 100 + 20)
        $("#result").html('Number To Win: ' + randomResult);
        console.log(randomResult);
        console.log("--------------------------");
    });
});

