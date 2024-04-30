const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// app.use('/users', userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the backend!</h1>");
});
// mongoose.connect('mongodb://localhost:27017/my_database')
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 8080;

app.listen(() => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
