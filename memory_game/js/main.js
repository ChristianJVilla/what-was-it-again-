console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("user flipped queen");

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("user flipped king");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {	
console.log("You found a match!");	
} else {
	console.log("Sorry, try again.");
}
