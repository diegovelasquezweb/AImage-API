const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()

const routes = require("./routes/AImage");
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/openai", routes);

app.get("/openai/images", (req, res) => {
  let status = 200;
  let error = null;
  res.status(status).send({ success: status === 200, error });
});

app.get("/:universalURL", (req, res) => {
  res.send("404 URL Not Found");
});

app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`)
});