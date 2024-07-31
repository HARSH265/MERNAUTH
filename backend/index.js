import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './route/userRoute.js';

dotenv.config();

const app = express();
const PORT = 8000;

// DB connect
mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


//routes 

app.use('/api/user', userRouter)


app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
