const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" })); //for dev
// app.use(cors({ origin: "link-deployed" })); //for production
app.listen(port, () =>
  console.log(`DevConnector app listening on port ${port}!`)
);

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/auth", require("./routes/api/auth"));

//Connect DB
connectDB();
