const express = require("express");
const app = express();
const connectToDb = require("./db/Database");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://172.22.16.1:3000",
      "http://frontend:3000",
    ],
    credentials: true,
  })
);

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  connectToDb();
});
