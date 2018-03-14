class Card {
  constructor(suit,name,value) {
    this.suit = suit;
    this.name = name;
    this.value = value;
  }

  toString() {
    return this.name + " of " + this.suit;
  }
}

let suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
let values = [
  "King", "Queen", "Jack", "Ten",
  "Nine", "Eight", "Seven", "Six",
  "Five", "Four", "Three", "Two", "Ace"
];

let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click', function() {
  textArea.innerText = 'Started';
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
});

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = [],
    playerScore = [],
    deck = [];

function createDeck() {
  let deck = [];

  for(let sIdx = 0; sIdx < suits.length; sIdx++) {
    for(let vIdx = 0; vIdx < values.length; vIdx++) {
      deck.push(new Card(suits[sIdx],values[vIdx],Math.min(10,vIdx)));
    }
  }

  return deck;
}

function getNextCard() {
  return deck.shift();
}

function shuffle(deck) {
  for(let i = deck.length-1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));

    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

let deck = createDeck();
let i = 0;
while (i++ < 5) { shuffle(deck); }

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to blackjack!");
console.log("You are dealt...");
console.log("\t" + playerCards[0]);
console.log("\t" + playerCards[1]);