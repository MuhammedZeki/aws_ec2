const express = require("express");
const app = express();
const connectToDb = require("./db/Database");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  connectToDb();
});
