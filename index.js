const express = require("express");

const app = express();

app.listen(3000, () => console.log("API running on port 3000"));
app.use("/", async (req, res) => {
  res.send("Greeting from the API!");
});
