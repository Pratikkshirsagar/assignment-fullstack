const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');

const courseRoute = require('./routes/course');
const userRouter = require('./routes/user');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to db
connectDB();

const app = express();

// Router midleware
app.use('/api/v1/courses', courseRoute);
app.use('/api/v1/users', userRouter);

const PORT = process.env.POST || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.yellow.bold);
});

// Handle unhandle promise rejections
process.on('unhandledRejection', (err, promis) => {
  console.log(`Error: ${err.message}`.red);
  // Close Server & exit Process
  server.close(() => process.exit(1));
});
