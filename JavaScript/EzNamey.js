let firstWords =['Easy' , 'Awesome', 'Creative', 'Supportive', 'Agile', 'Innovative', 'Universal', 'Available', 'Trustworthy','Modern'];
let secondWords =['Corporation', 'Group', 'Team', 'Firma', 'Stakeholder', 'Fellow', 'Business', 'Organization', 'Enterprise', 'Association'];
const Number1 = Math.floor(Math.random() * 10);
const Number2 = Math.floor(Math.random() * 10);
let startupName = `${firstWords[Number1]}  ${secondWords[Number2]}`;
console.log(startupName)