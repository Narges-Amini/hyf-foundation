const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }
  if (class07Students.length < 6 || studentName === "Queen of Denmark") {
    class07Students.push(studentName);
  } else {
    console.log("Cannot add more students to class 07");
  }
}
function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("A");
addStudentToClass("B");
addStudentToClass("C");
addStudentToClass("D");
addStudentToClass("E");
addStudentToClass("F");
addStudentToClass("Queen of Denmark");
addStudentToClass("G");
addStudentToClass("");

console.log(class07Students);
console.log(getNumberOfStudents());
