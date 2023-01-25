import jwt from "jsonwebtoken";
import { pool } from "../database";



export const verifyToken=async (req,res,next)=>{
    try {
        const token=req.headers["x-access-token"];
        if(!token)return res.status(400).json({message:"Not token provide"});
        const decoded=jwt.verify(token,process.env.SECRET);        
        const user=pool.query("SELECT * FROM users WHERE user=?",[decoded.id.user]);
        if(!user)return res.status(400).json({message:"User not found"});
        
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"});
    }
}