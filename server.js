require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const propertyRoutes = require("./routes/propertyRoutes");

const app = express();

console.log(process.env.MONGO_URI);
console.log(process.env.PORT);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Dream Homes Backend 🚀");
});

app.use("/properties", propertyRoutes);
app.use("/api/users",authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});