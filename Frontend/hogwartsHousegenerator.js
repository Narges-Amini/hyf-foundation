const hogwartsHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const submitBotton = document.getElementById("submit");
submitBotton.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  console.log(name);
  const house = hogwartsHouse[Math.floor(Math.random() * 4)]; // a random number between 0, 4 (0 inclusive and 4 exclusive)
  console.log(`${name} belongs in ${house}!`);
});
