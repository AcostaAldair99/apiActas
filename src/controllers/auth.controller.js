import { pool } from "../database";
import jwt from "jsonwebtoken";
require("dotenv").config();

export const signIn = async(req,res)=>{
    try{
        const [result]=await pool.query("SELECT user FROM users WHERE pass=? AND user=?",[req.body.pass,req.body.user]);
        if(result.length===0)return res.status(404).json({message:"User not found"});
        
        const token=jwt.sign({id:result[0]},process.env.SECRET,{
            expiresIn:86400,
        });
        res.status(200).json({token});
    
    }catch(error){
        return res.status(500).json(error.message);
    }
}


export const isSignin = async (req,res) =>{
    console.log(req.body.pass+"-"+req.body.user);
    try{
        const [data] =  await pool.query("SELECT user FROM `users` WHERE `pass` = ? AND `user`=?",[req.body.pass,req.body.user]);
        if(data.length === 0)return res.status(404).json({message:"user not found"});
        res.status(201).json({message:"auth"});
    }catch(err){
        res.status(500).json({message:err});
    }
}


