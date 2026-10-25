let dogYearOfBirth = 2017; 
let dogYearFuture = 2027;
let dogYear = 7 * (dogYearFuture - dogYearOfBirth);
let shouldShowResultInDogYears = prompt("Show dog years? (true/false)");
if (shouldShowResultInDogYears === 'true') {
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`)
} else {
    console.log(`Your dog will be ${dogYear / 7} human years old in ${dogYearFuture}`);
}

