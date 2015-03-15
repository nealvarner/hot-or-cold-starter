var guessMe;

$(document).ready(function(){
    guessMe = $('#guessButton').data('guessMe');
    if (!guessMe) {
        guessMe = $('#guessButton').data('guessMe', genRandomInt(0, 100));
    }
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    //process a guess
    $('#guessButton').click(function(){
        //get userGuess
        userGuess = $('#userGuess').val();
        console.log(userGuess);
        response = process_guess(userGuess, lastGuess, guessMe);
        //set last guess
        lastGuess = userGuess;

        var count = $('#count').val();
        $('#count').text(count++);
    });
});

// function startGame() {
//     // generate random number to be guessed
//     guessMe = getRandomInt(0, 100);
//     //set text input to blank
//     userGuess = $('#userGuess').val('');

//     return guessMe;
// }



function genRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function process_guess(userGuess, lastGuess, guessMe) {
    var response = '';
    //change display to respond with hot or cold
    if (userGuess < guessMe) {
        response = 'less than';
    }
    else if (userGuess > guessMe) {
        response = 'greater than';
    }
    else {
        response = 'correct';
    }
    return response;
}