//Series duration of my life
//https://tiii.me/
//**************Initialization*****************/
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 2,
    hours: 20,
    minutes: 8,
  },
  {
    title: "The Vampire Diaries",
    days: 7,
    hours: 22,
    minutes: 41,
  },
  {
    title: "Lost",
    days: 15,
    hours: 9,
    minutes: 11,
  },
];

const lifeSpan = 80; // in years

//**************Function*****************/
function logOutSeriesText() {
  let total = 0;
  let text = "";
  let seriesSpan = [];
  for (let i = 0; i < seriesDurations.length; i++) {
    seriesSpan[i] =
      seriesDurations[i].days / 365 +
      seriesDurations[i].hours / 8760 +
      seriesDurations[i].minutes / 525600;
    total = total + seriesSpan[i];
    text += `${seriesDurations[i].title} took ${(seriesSpan[i] / lifeSpan) * 100}% of my life\n`;
  }
  text += `In total that is ${(total / lifeSpan) * 100}% of my life`;
  return text;
}
console.log(logOutSeriesText(seriesDurations));
