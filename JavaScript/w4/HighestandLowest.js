function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  let highest = numbers[0];
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
