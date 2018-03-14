function changeCard(card) {
  card.suit = "Clubs";
}

let card = {
  suit: "Hearts",
  value: "Queen"
};

changeCard(card);

console.log(card.suit);