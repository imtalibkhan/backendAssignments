const express = require("express");

const books = require("./books.json");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(books);
});



app.post("/books", (req, res) => {
  let data = req.body;
  res.send({ ...data, id: books.length + 1 });
});



app.get("/books/:id", (req, res) => {
  let id = req.params.id;
  let data = books.filter((book) => book.id == id);
  res.send(data);
});



app.patch("/books/:id", (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let data = books.filter((book) => book.id == id);
  res.send({ ...data[0], ...body });
});



app.delete("/books/:id", (req, res) => {
  let id = req.params.id;
  let data = books.filter((book) => book.id != id);
  res.send(data);
});



app.listen(9211, () => {
  console.log("listening on porn number 9211");
});