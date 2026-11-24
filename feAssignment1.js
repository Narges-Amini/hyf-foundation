//Remove the first and last letters of a string and return the remaining

function removeChar(str) {
  const strArr = str.split("");
  if (strArr.length > 2) {
    const result = strArr.slice(1, -1);
    const answer = result.join("");
    console.log(answer);
  } else if (strArr.length === 2) {
    console.log("");
  }
}

//Solution 2: note that slice directly works on strings
function removeChar(str) {
  return str.slice(1, -1);
}
