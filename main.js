console.log("JS file is connected to HTML! Woo!")

var card0ne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

/*if (cardTwo === cardFour)
{
	alert("Sorry, try again!");
}

else if (card0ne === cardTwo)
{
	alert("You found a match!");
}

else if(cardThree === cardFour)
{
	alert("You found a match!");
}
else 
{
	alert("Sorry, try again!");
} */

var createCards = function() {
	var gameBoard = document.getElementById('game-board');

	for(var int = 0; int < 4; int++) {
		var newCard = document.createElement('div')
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	};
};





