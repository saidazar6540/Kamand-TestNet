const express = require("express");
const app = express();

app.get("/faucet", (req, res) => {
  res.json({ status: "ok", message: "Faucet active" });
});

app.listen(8092, () => console.log("Faucet on 8092"));
