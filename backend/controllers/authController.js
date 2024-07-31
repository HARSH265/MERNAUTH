import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
export const signup = async(req,res)=>{
    try{

        const {username,email,password}=req.body;
        const hashedPassword=bcrypt.hashSync(password,10)
        const newUser=new User({username, email, password:hashedPassword});
        await newUser.save()
        res.status(201).json({
            message:"user saved successfully."
        })
    }catch(err){
         res.status(500).json(err.message)
    }
}