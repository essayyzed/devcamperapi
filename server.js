const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');

//? Load env vars
dotenv.config({ path: './config/config.env' });

//? Connect Database
connectDB();

//? Route Files
const bootcamps = require('./routes/bootcamps');
const morgan = require('morgan');

const app = express();

//Body Parser
app.use(express.json());

//? Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//? Mount Routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5001;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT} }`
      .yellow.bold
  )
);

//? Handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //! close server and exit process
  server.close(() => process.exit(1));
});
