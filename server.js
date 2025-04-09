const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/corvus", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const EmailEntry = mongoose.model("Email", new mongoose.Schema({ email: String }));

app.post("/api/waitlist", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });
  await EmailEntry.create({ email });
  res.json({ message: "You've been added to the waitlist!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
