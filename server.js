const express = require('express');
const app = express();
const routes = require('./routes/routes');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');

// routes
app.use(cors());
app.use(express.json());
app.use('/api/watchlist', routes);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
