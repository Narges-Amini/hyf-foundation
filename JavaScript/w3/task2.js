//When will we be there??
function travelTime(speed, destinationDistance) {
  const time = speed / destinationDistance;
  const hours = Math.floor(time);
  const minutes = (time % 1) * 60;
  return `${hours} hours and ${minutes} minutes`;
}

console.log(travelTime(50, 432));
