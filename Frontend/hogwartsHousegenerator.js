let name = "";
let house = "";

// IMPORT YOUR NAME & VALIDATE INPUT
const submitButtonName = document.getElementById("submit");

submitButtonName.addEventListener("click", function () {
  name = document.getElementById("name").value.trim();
  if (name === "") {
    alert("Please enter your name!");
  } else {
    console.log(name);
  }
});

// HOUSE SELECTION
const submitButtonHouse = document.getElementById("house");
const feedback = document.getElementById("houseFeedback");
const hogwartsHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
function selectHouse() {
  house = hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)];
  console.log(house);
  feedback.textContent = house;

  // RESTART ANIMATION
  feedback.className = "";
  void feedback.offsetWidth;

  // APPLY ANIMATION
  feedback.classList.add("house-reveal");
  feedback.classList.add(house.toLowerCase());
}

submitButtonHouse.addEventListener("click", function () {
  if (name === "") {
    alert("Please enter your name first!");
    return;
  }
  selectHouse();
});

// FEEDBACK ON HOUSE SELECTION
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

yesButton.addEventListener("click", function () {
  if (name === "" || house === "") {
    alert("Please enter your name and select a house first!");
    return;
  }
  console.log(`${name} belongs in ${house}!`);
});

// TRYING AGAIN
noButton.addEventListener("click", function () {
  if (name === "") {
    alert("Please enter your name first!");
    return;
  }
  alert("Let's find you another house!");
  selectHouse();
});
