//Method 1: short
function getCount(str) {
  let strLow = str.toLowerCase();
  let count = 0;
  if ("aeiou".includes(strLow.includes())) {
    count++;
  }
  console.log(count);
}

///// method 2: long

function getCount(str) {
  let strLow = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < strLow.length; i++) {
    if (
      strLow[i] === "a" ||
      strLow[i] === "e" ||
      strLow[i] === "i" ||
      strLow[i] === "o" ||
      strLow[i] === "u"
    ) {
      count = count + 1;
    }
  }
  console.log(count);
}
