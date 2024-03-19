const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Use body-parser middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use built-in express.json middleware for parsing application/json
app.use(express.json());

// MongoDB connection string (replace <username>, <password>, and <dbname> with your MongoDB credentials)
const mongoURI =
  "mongodb+srv://gautamtinker83:Txl1n3E2EkmY9Q66@cluster0.p9ukimr.mongodb.net/mydatabase?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Create a Mongoose schema for emails
const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness of email
  },
  subscribe: {
    type: Boolean,
    default: true, // Set default value to true
  },
});

// Create a Mongoose model for emails
const Email = mongoose.model("Email", EmailSchema);

// Handle POST requests to "/"
app.post("/", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Please enter a correct email" });
  }

  try {
    // Check if the email already exists in the database
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    // Create a new email document
    const newEmail = new Email({ email });

    // Save the email to the database
    await newEmail.save();

    return res.status(200).json({ message: "Email saved successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error saving email", error: err });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
