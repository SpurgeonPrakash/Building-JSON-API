const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req,res) => {
  res.json({message: "Hello From Express!!"});
});

app.listen(port, () => {
  console.log("Server is Up & Running!!");
})
