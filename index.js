const dotenv = require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

//APIs don't Receive data, just provide so no need for request. _ is placeholder

app.use("/api/*", (_, res) => {
  res.json({ data: "THE API LIVES" });
});
app.listen(port, () => {
  console.log(`Server is alive on port ${port}`);
});
