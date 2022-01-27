const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const connectDB = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
