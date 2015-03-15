var guessMe;
var lastGuess;
var count;

$(document).ready(function() {
    if (!guessMe) {
        guessMe = genRandomInt(0, 100);
    }
	/*--- Display information modal box ---*/
  	$(".what").click(function() {
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function() {
  		$(".overlay").fadeOut(1000);
  	});

    $('.new').click(function() {
        guessMe = startGame();
    });

    //process a guess
    $('#guessButton').click(function(e) {
        //get userGuess
        userGuess = $('#userGuess').val();
        console.log(userGuess);
        if (!isNaN(parseInt(userGuess))) {
            response = process_guess(userGuess, lastGuess, guessMe);
            $('#feedback').text(response);
            //set last guess
            lastGuess = userGuess;
            count = $('#count').text();
            count++;
            $('#count').text(count);

            $('#guessList').append('<li>'+userGuess+'</li>');
        }
        else {
            alert("please enter a number")
        }
        $('#userGuess').val('');
        e.preventDefault();
    });
});

function startGame() {
    // generate random number to be guessed
    var guessMe = genRandomInt(0, 100);
    //set text input to blank
    $('#userGuess').val('');
    $('#guessList').empty();
    $('#feedback').text("Make you Guess!");
    $('#count').text(0)
    return guessMe;
}



function genRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function process_guess(userGuess, lastGuess, guessMe) {
    var response = '';
    //change display to respond with hot or cold
    // freezing, really cold,
    if (userGuess < guessMe) {
        response = 'Too Low!';
    }
    else if (userGuess > guessMe) {
        response = 'Too High!';
    }
    else {
        response = 'Right On!';
    }
    return response;
}