const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
//this is creating a path for heroku to get to
app.use(express.static(path.join(__dirname, "client/build")));

//APIs don't Receive data, just provide so no need for request. _ is placeholder

app.use("/api/*", (_, res) => {
  res.json({ data: "THE API LIVES" });
});

app.use("*", (_, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is alive on port ${port}`);
});
