let email = "";

function maskEmail(email) {
  let masked = email.slice(0, email.indexOf("@"));
  masked = masked.split(""); //converts a string to an array
  for (let i = 1; i < masked.length - 1; i++) {
    masked[i] = "*";
  }
  return `${masked.join("")}${email.slice(email.indexOf("@"))}`; // masked.join("") converts an array to a string
}

console.log(maskEmail("apple.pie@example.com"));
console.log(email);
