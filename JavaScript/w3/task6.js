//Log out notes
const notes = [
  { content: "Pick up groceries!", id: 1 },
  { content: "Check you calendar!", id: 2 },
];
let textToShow = "";
function logOutNotesFormatted(notes) {
  for (let i = 0; i < notes.length; i++) {
    textToShow = `${textToShow} The note with ${notes[i].id}, has the following note text: ${notes[i].content}`;
  }
  return textToShow;
}

console.log(logOutNotesFormatted(notes));
