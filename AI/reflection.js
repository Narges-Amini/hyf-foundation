const helloButton = document.querySelector("#hello-button");
const greeting = document.querySelector("#greeting");

helloButton.addEventListener("click", () => {
  greeting.textContent = "Thanks for visiting my page!";
});