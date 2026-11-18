import express from "express";

const app = express();
const port = 2000;
app.use(express.json());

const imageUrls = [
  "https://images.dog.ceo/breeds/finnish-lapphund/img_3801.jpg",
  "https://images.dog.ceo/breeds/spitz-japanese/beet-001.jpg",
  "https://images.dog.ceo/breeds/schipperke/n02104365_725.jpg",
  "https://images.dog.ceo/breeds/cavapoo/lulu2.jpg",
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_11811.jpg",
];

const images = imageUrls.map((imageUrl) => ({
  imageUrl: imageUrl,
  breed: imageUrl.split("breeds/")[1].split("/")[0],
}));

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.get("/images", (req, res) => {
  const dogPictures = images
    .map((dog) => {
      return `
      <div>
        <h2>${dog.breed}</h2>
        <img src="${dog.imageUrl}" width="300" alt="${dog.breed}">
      </div>
    `;
    })
    .join("");

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Dog Pictures</title>
    </head>
    <body>
      <h1>My Dog Pictures</h1>
      ${dogPictures}
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
