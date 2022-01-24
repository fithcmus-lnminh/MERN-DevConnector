const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`DevConnector app listening on port ${port}!`)
);

//Connect DB
connectDB();
