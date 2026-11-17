import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Jens" },
  { id: 2, name: "Alan" },
  { id: 3, name: "Karin" },
];

// HOME PAGE
// METHOD: GET
// URL: http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

// GET ALL USERS
// METHOD: GET
// URL: http://localhost:3000/api/users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET ONE USER BY ID
// METHOD: GET
// URL: http://localhost:3000/api/users/1
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user.name);
});

// ADD A NEW USER
// METHOD: POST
// URL: http://localhost:3000/api/users/add
// inside BODY : select RAW then: { "name": "Peter" }
app.post("/api/users/add", (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// REPLACE A USER
// METHOD: PUT
// URL: http://localhost:3000/api/users/update/1
// BODY: { "name": "John" }
app.put("/api/users/update/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id,
    name: req.body.name,
  };

  res.json(users[index]);
});

// UPDATE PART OF A USER
// METHOD: PATCH
// URL: http://localhost:3000/api/users/edit/1
// BODY: { "name": "Johnny" }
app.patch("/api/users/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (req.body.name !== undefined) {
    user.name = req.body.name;
  }

  res.json(user);
});

// DELETE A USER
// METHOD: DELETE
// URL: http://localhost:3000/api/users/delete/1
app.delete("/api/users/delete/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  users = users.filter((user) => user.id !== id);

  res.status(200).json({
    message: "User deleted successfully",
  });
});

// GET TOTAL NUMBER OF USERS
// METHOD: GET
// URL: http://localhost:3000/api/user-count

app.get("/api/user-count", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User Count</title>
        </head>
        <body>
            <p>Total registered users: ${users.length}</p>
        </body>
        </html>
    `);
});

// OPTIONS - SHOW ALLOWED METHODS
// METHOD: OPTIONS
// URL: http://localhost:3000/api/users
app.options("/api/users", (req, res) => {
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
  res.status(204).end();
});

// START SERVER
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
