var rightAnswer;
var yourAnswer;
var numberOfGuesses = 0;

function reset(){
	rightAnswer = Math.floor(Math.random()*(100-0+1));
}

reset();

function yourGuess(){
	yourAnswer = document.getElementById("yourAnswer").value;
	if(yourAnswer < 0 || yourAnswer > 100){
		$(".guess").append("<p>Please pick a number between 0 and 100</p>");
	}
	else if(rightAnswer > yourAnswer){
		$(".guess").append("<p>" + yourAnswer +" is too low</p>");
		numberOfGuesses++;
	}
	else if(rightAnswer < yourAnswer){
		$(".guess").append("<p>" + yourAnswer +" is too high</p>");
		numberOfGuesses++;
	}
	else if(rightAnswer == yourAnswer){
		numberOfGuesses++;
		$(".guessWrapper").remove();
		$(".guess").append("<p>" + yourAnswer +" was the right number. You win! You used " + numberOfGuesses + " guesses.</p>");
		$(".guess").append("<a href='index.html'>Want to try again?</a>");
	}
	else{
		$(".guess").append("<p>Please pick a valid number between 0 and 100</p>");
	}
}
