const toDay = new Date().getDay();
const listOfDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getEventWeekday(daysFromToday) {
  const eventDay = (toDay + daysFromToday) % 7;
  return listOfDays[eventDay];
}
console.log(getEventWeekday(10));
