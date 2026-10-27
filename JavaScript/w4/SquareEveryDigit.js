function squareDigits(num) {
  let square = "";
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    square += num[i] ** 2 + "-";
  }
  return square.slice(0, -1);
}
console.log(squareDigits(81));
