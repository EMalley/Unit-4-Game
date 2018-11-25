// load Javascript after document is ready
    var randomResult;
    var wins;
    var lose;

// Set connection with 4 crystals and declare random result for a win
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12);
    console.log(random);

    var crystal = $("<div>");
        crystal.attr("class", "crystal");
        console.log(crystal)

    $(".crystals").append(crystal);

};

// each crystal needs a randomly generated Number between 1-12
// crystal score needs to add on to the previous score
// each new game, crystals should reset and be a new vaule between 1-12
// set winning score between 19-120
// check win === total score
// check loose (goes over Score)
