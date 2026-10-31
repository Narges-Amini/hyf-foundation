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
    return `Nice to meet you ${name}!`;
  } else if (command.toLowerCase() === "what is my name?".toLowerCase()) {
    return name;
  }

  //2nd dialogue
  else if (
    command.toLowerCase().startsWith("add ") &&
    command.toLowerCase().endsWith(" to my todo")
  ) {
    let task = command.slice(4, -11);
    let taskCap = task.charAt(0).toUpperCase() + task.slice(1);
    todos.push(taskCap);
    return `${taskCap} added to your todos!`;
  }
  //3rd dialogue
  else if (
    command.toLowerCase().startsWith("remove ") &&
    command.toLowerCase().endsWith(" from your todo")
  ) {
    let start = command.indexOf("remove ") + 8;
    let end = command.toLowerCase().indexOf(" from your todo");
    let item = command.slice(start, end);
    let itemCap = item.charAt(0).toUpperCase() + item.slice(1);
    let index = todos.indexOf(itemCap);
    if (index !== -1) {
      return `${itemCap} removed from your todos!`;
    } else {
      return `${itemCap} was not found in your todos!`;
    }
  }

  //4th dialogue
  else if (command.toLowerCase() === "What day is it today?".toLowerCase()) {
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let assignToMonth = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };
    return `${day}. of ${assignToMonth[month]} ${year}`;
  }

  //5th dialogue
  else if (
    command.toLowerCase().startsWith("what is ") &&
    !/[0-9]/.test(command)
  ) {
    return `There are no numbers!`;
  } else if (command.toLowerCase().startsWith("what is ")) {
    let numbers = command.match(/-?\d+(?:\.\d+)?/g).map(Number);
    let operator = command.match(/[+*/-]/)?.[0];
    if (!numbers || numbers.length !== 2 || !operator) {
      return `Invalid calculation`;
    } else if (operator === "+") {
      result = numbers[0] + numbers[1];
    } else if (operator === "-") {
      result = numbers[0] - numbers[1];
    } else if (operator === "*") {
      result = numbers[0] * numbers[1];
    } else if (operator === "/") {
      result = numbers[0] / numbers[1];
    }
    return result;
  }

  //6th dialogue
  else if (
    command.toLowerCase().startsWith("set a timer for") &&
    command.toLowerCase().endsWith("minutes")
  ) {
    if (/[0-9]/.test(command)) {
      let timeTimer = Number(command.match(/[0-9]+/));
      setTimeout(
        () => {
          console.log("Timer done!");
        },
        timeTimer * 60 * 1000,
      );
      return `Timer set for ${timeTimer} minutes!`;
    } else {
      return "A number was found!";
    }
  } else if (command.toLowerCase() === "my brain has logged out") {
    return "Take a coffee 💀";
  } else {
    return "Review your text!";
  }
}

//console.log(getReply("Hello my name is Narges"));
// console.log(getReply("Add reading to my todo"));
// console.log(getReply("Remove reading from your todo"));
// console.log(getReply("What day is it today?"));
// console.log(getReply("what is Hello World?"));
// console.log(getReply("What is 12 + 5"));
//console.log(getReply("Set a timer for 1 minutes"));
//console.log(getReply("My brain has logged out"));
