const express = require("express");
const app = express();
const logger = require("./logger");

// req => middleware => res

app.get("/", logger, (req, res) => {
  res.json({
    name: "John",
    age: 30,
  });
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
