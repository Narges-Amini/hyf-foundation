function booWho(arg) {
  if (typeof arg === "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ a: 1 }));
console.log(booWho(NaN));
console.log(booWho(true));
