let suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
let values = [
  "King", "Queen", "Jack", "Ten",
  "Nine", "Eight", "Seven", "Six",
  "Five", "Four", "Three", "Two", "Ace"
];

function createDeck() {
  let deck = [];

  for(let sIdx = 0; sIdx < suits.length; sIdx++) {
    for(let vIdx = 0; vIdx < values.length; vIdx++) {
      deck.push(values[vIdx] + " of " + suits[sIdx]);
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