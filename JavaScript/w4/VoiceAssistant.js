//Voice Assistant
let name = "we have not been introduced!";
let todos = [];
let a = 10;
let b = 2;
let result;
let seconds = 4 * 60 * 1000; //JSavaScript timers use ms
function getReply(command) {
  //1st dialogue
  if (command.toLowerCase().startsWith("hello my name is ")) {
    command = command.split(" ");
    name = command.at(-1);
    name = name[0].toUpperCase() + name.slice(1);
    console.log(`Nice to meet you ${name}!`);
  } else if (command.toLowerCase() === "what is my name?".toLowerCase()) {
    console.log(`${name}`);
  }

  //2nd dialogue
  else if (command.toLowerCase() === "Add fishing to my todo".toLowerCase()) {
    todos.push("fishing");
    console.log(`fishing added to your todos!`);
  } else if (
    command.toLowerCase() ===
    "Add singing in the shower to my todo".toLowerCase()
  ) {
    todos.push("singing in the shower");
  }
  //3rd dialogue
  else if (
    command.toLowerCase() === "Remove fishing from my todo".toLowerCase()
  ) {
    todos.pop("fishing");
    console.log(`Removed fishing from your todo!`);
  } else if (command.toLowerCase() === "What is on my todo?".toLowerCase()) {
    console.log(`You have ${todos.length} todos: ${todos.join()}`);
  }
  //4th dialogue
  else if (command.toLowerCase() === "What day is it today?".toLowerCase()) {
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let assignToMonth = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    console.log(`${day}. of ${assignToMonth[month]} ${year}`);
  }

  //5th dialogue
  else if (command.toLowerCase().startsWith("what is ")) {
    let numbers = command.match(/-?\d+(?:\.\d+)?/g).map(Number);
    let operator = command.match(/[+*/-]/)?.[0];
    if (!numbers || numbers.length !== 2 || !operator) {
      console.log("Invalid calculation");
      return;
    } else if (operator === "+") {
      result = numbers[0] + numbers[1];
    } else if (operator === "-") {
      result = numbers[0] - numbers[1];
    } else if (operator === "*") {
      result = numbers[0] * numbers[1];
    } else if (operator === "/") {
      result = numbers[0] / numbers[1];
    }
    console.log(result);
  }

  //6th dialogue
  else if (
    command.toLowerCase() === "Set a timer for 4 minutes".toLowerCase()
  ) {
    setTimeout(
      () => {
        console.log("Timer done");
      },
      4 * 60 * 1000,
    );
  } else if (
    command.toLowerCase() === "My brain has logged out".toLowerCase()
  ) {
    console.log("Take a coffee 💀");
  }
}

// getReply("Add fishing to my todo");
// getReply("Add singing in the shower to my todo");
//getReply("What is 12 + 5");
// getReply("Set a timer for 4 minutes");
//getReply("My brain has logged out");
//
