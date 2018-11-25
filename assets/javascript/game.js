// execute this after DOM has fully loaded
$(document).ready(function(){

// load Javascript After Document is ready
var randomResult;
var wins;
var lose;

// Chooses Random Number to reach to win game. 
randomResult = Math.floor(Math.random() * 100 + 20)
$("#result").html('Number to Win: ' + randomResult);
console.log(randomResult);


// Set connection with 4 crystals and declare random result for a win
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 12) + 1;
    console.log(random);
$('.crystalArea').append('<div class="crystals"></div');

};

// each crystal needs a randomly generated Number between 1-12
// crystal score needs to add on to the previous score
// each new game, crystals should reset and be a new vaule between 1-12
// set winning score between 19-120
// check win === total score
// check loose (goes over Score)

// reset crystal/winning score after win or loose
$("#newGameBtn").click(function (){
    random = random;
    randomResult = randomResult;
});
});

