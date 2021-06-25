const express = require("express");
const mongoose = require("mongoose");
const app = express();
const user = require("./routes/user");
const auth = require("./routes/authRoute");

mongoose
  .connect("mongodb://localhost/advanced_node", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("database started succesfully");
  })
  .catch((err) => {
    console.log("connection failse", err);
  });

//middleware
app.use(express.json());

app.use("/api/user", user);
app.use("/api/auth", auth);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("3000 port is ready...");
});
