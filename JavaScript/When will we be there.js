//When will we be there??
function travelTime(speed, destinationDistance) {
  let time = speed / destinationDistance;
  let hours = Math.floor(time);
  let minutes = (time % 1) * 60;
  return `${hours} hours and ${minutes} minutes`;
}

console.log(travelTime(50, 432));
