import userModel from "../models/user";
import { pool } from "../database";

export const createActa=(req,res)=>{

}

export const getActas= async(req,res)=>{
    const [respon]=await pool.query("SELECT * FROM users");
    res.json(respon);
}

export const getActaById=(req,res)=>{

}


