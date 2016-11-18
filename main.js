console.log("JS file is connected to HTML! Woo!")

//Array of cards.
var cards  = ["queen", "queen", "king", "king"]

//
var cardsInPlay = [];

//Create the score variable. 
var score = 0;
//Fetch the score element. 
var displayscore = document.getElementById('score');

//Retrieve the board element so cards can be pushed to it. 
var gameBoard = document.getElementById('game-board');

//function that creates the cards. 
var createCards = function() {
	//Loops through four cards. 
	for(var int = 0; int < 4; int++) {
		//Creates a new div element for each iteration and stores them in variable newCard. 
		var newCard = document.createElement('div');
		//Gives each card a class name of card, takes on card attributes. 
		newCard.className = 'card';
		//Set card's 'data-card' to be the element of the array it's assigned to, ie king or queen. 
		//'data-' attributes are meant to store data about an element that isn't tied to a style. 
		newCard.setAttribute('data-card', cards[int]);
		//Add an event listener- when card clicked execute isTwoCards. 
		newCard.addEventListener('click', isTwoCards);
		//Append the card to the game board. 
		gameBoard.appendChild(newCard);
	}
};

//Function to check if two cards in play are the same. 
function isTwoCards() {
	//push a clicked card into cardsInPlay. 
	cardsInPlay.push(this.getAttribute('data-card'));
	//Fetch the data-card(king, queen) for the clicked card. 
	console.log(this.getAttribute('data-card'));
	//check whether fetched attribute is a king or queen, and assign relevant picture. 
	if(this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img class ='cardimg' src = 'king-hearts.png'>";
	}
	else {
		this.innerHTML = "<img class = 'cardimg' src = 'queen-spades.png'>";
	}
	//Check num cards in play equates to 2, execute isMatch if true. 
	if(cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		
	}
}
//Tests the two cards in play for a match, alerts user to result. 
var isMatch = function (cards) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("Congratulations, you found a match!");
		score++;
		document.getElementById('score').innerHTML = "Your Score is = " + score;
	}

	else {
		alert("Unlucky, try again!");
	}
	cardsInPlay = [];
	//When all cards played, reset board... 
	if(score = 2) {
	}


};
//Call the create cards function on load. 
createCards();






