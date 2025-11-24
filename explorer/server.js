const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Explorer running");
});

app.listen(8080, () => console.log("Explorer on 8080"));