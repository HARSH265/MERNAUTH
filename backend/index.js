import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './route/userRoute.js';
import authRouter from './route/authRoute.js'

dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json())

// DB connect
mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


//routes 

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)



app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});


app.use((req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message=err.message || 'internal server error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
}) 