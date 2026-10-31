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

const humanLifeSpan = 80; // in years

//**************Function*****************/
function logOutSeriesText() {
  let totalSerialDuration = 0;
  let textToShow = "";
  let seriesSpan = [];
  for (let i = 0; i < seriesDurations.length; i++) {
    seriesSpan[i] =
      seriesDurations[i].days / 365 +
      seriesDurations[i].hours / 8760 +
      seriesDurations[i].minutes / 525600;
    totalSerialDuration = +seriesSpan[i];
    textToShow += `${seriesDurations[i].title} took ${(seriesSpan[i] / humanLifeSpan) * 100}% of my life\n`;
  }
  textToShow += `In total watching my favorite movies is ${(totalSerialDuration / humanLifeSpan) * 100}% of my life`;
  return textToShow;
}
console.log(logOutSeriesText(seriesDurations));
