let gardenSizeInM2 = 100
let nameOfCustomer = prompt ('Enter the name of the customer!');
let wide = prompt ('Enter the width of the house');
let height = prompt ('Enter the height of the house');
let deep = prompt ('Enter the depth of the house');
let volumeInMeters = wide * height * deep;
const peterHousePrice =  2500000;
const juliaHousePrice = 1000000;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (nameOfCustomer === 'Peter' && housePrice < peterHousePrice){
    console.log('Peter you are paying too much!')
}else if (nameOfCustomer === 'Peter' && housePrice >= peterHousePrice){
    console.log('Perter you are paying too little!')
}else if(nameOfCustomer === 'Julia' && housePrice < juliaHousePrice){
    console.log('Julia you are paying too much!')
}else if (nameOfCustomer === 'Julia' && housePrice >= juliaHousePrice){
    console.log('Julia you are paying too little!')
}else{
    console.log('Error in inputs!')
}