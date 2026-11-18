const baseUrl = "https://dog.ceo";

const response = await fetch(`${baseUrl}`);
const text = await response.text();
console.log("Response body:", text);

//Get 5 random dog images (any breed)
//Postman: Get https://dog.ceo/api/breeds/image/random/5
const response1 = await fetch(`${baseUrl}//api/breeds/image/random/5`);
const data1 = await response1.json();
console.log("5 random dog images:", data1);

//List all the dog breeds
//Postman: Get  https://dog.ceo/api/breeds/list/all
const response2 = await fetch(`${baseUrl}/api/breeds/list/all`);
const data2 = await response2.json();
console.log("All dog breeds:", data2);

//Get 3 dog images from the "beagle" breed
//Postman: Get https://dog.ceo/api/breed/beagle/images/random/3
const response3 = await fetch(`${baseUrl}/api/breed/beagle/images/random/3`);
const data3 = await response3.json();
console.log("3 dog images from the beagle breed:", data3);

//List all the sub-breeds of the poodle
//Postman: Get https://dog.ceo/api/breed/poodle/list
const response4 = await fetch(`${baseUrl}/api/breed/poodle/list`);
const data4 = await response4.json();
console.log("all the sub-breeds of the poodle:", data4);

//Get all the dog images from the "toy poodle" sub breed
//Postman: Get https://dog.ceo/api/breed/poodle/toy/images
const response5 = await fetch(`${baseUrl}/api/breed/poodle/toy/images`);
const data5 = await response5.json();
console.log("all the dog images from the toy poodle sub breed:", data5);
