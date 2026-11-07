let count = 0;
function cardCounter(card) {
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count += 1;
  } else if (card === 7 || card === 8 || card === 9) {
    count += 0;
  } else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count -= 1;
  }
  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

console.log(cardCounter(2));
console.log(cardCounter("J"));
console.log(cardCounter(9));
console.log(cardCounter(2));
console.log(cardCounter(7));
