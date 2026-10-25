//Log out notes
const notes = [
  { content: "Pick up groceries!", id: 1 },
  { content: "Check you calendar!", id: 2 },
];
function logOutNotesFormatted(num) {
  for (let i = 0; i < notes.length; i++) {
    if (num == notes[i].id) {
      return `The note with ${num}, has the following note text: ${notes[i].content}`;
    } else {
      return `The note with ${num}: has no note text`;
    }
  }
}

console.log(logOutNotesFormatted(5));
