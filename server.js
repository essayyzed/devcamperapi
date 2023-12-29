const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ success: false, "data": {"id": 1}})
})

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${
      process.env.PORT
    } }`,
  ),
);
