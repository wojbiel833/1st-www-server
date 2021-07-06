const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.show("index.html");
});

app.get("/home", (req, res) => {
  res.show("home.html");
});

app.get("/about", (req, res) => {
  res.show("about.html");
});

app.get("/contact", (req, res) => {
  res.show("contact.html");
});

app.get("/info", (req, res) => {
  res.show("info.html");
});

app.get("/history", (req, res) => {
  res.show("history.html");
});

app.get("/user/settings", (req, res) => {
  res.send("This site is only for users, please log in!");
});

app.get("/user/panel", (req, res) => {
  res.send("This site is only for users, please log in!");
});

app.use((req, res) => {
  res.status(404).show("404.html");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
