//Get a note
const notes = [
  { content: "Pick up groceries", num: 1 },
  { content: "Check you calendar!", num: 2 },
];
function getNote(id) {
  for (i = 0; i < notes.length; i++) {
    if (notes[i].num === id) {
      return notes[i];
    } else {
      return "Error";
    }
  }
}
console.log(getNote(1));
