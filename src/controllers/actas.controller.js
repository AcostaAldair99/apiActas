import userModel from "../models/user";
import { pool } from "../database";

export const createActa = (req,res)=>{
    var sql="INSERT INTO actas (date_Creation,id_Folder,name_Student,id_Student,degree,degree_plan,date_Limit) VALUES ? ? ? ? ? ? ?"
    var data=req.body;
    try{
        console.log(data);
        const saved=pool.query(sql,[data.date_Creation,data.id_Folder,data.name_Student,data.id_Student,data.degree,data.degree_plan,data.date_Limit]);
        res.status(201).json(saved);
        //res.status(201).json(data[0]);
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }

}

export const getActas = async(req,res)=>{
    const [respon]=await pool.query("SELECT * FROM actas");
    res.json(respon);
};


export const updateActa = async(req,res)=>{
    res.json({message:"This is for update an Acta"})
};


export const deleteActaById = async (req,res)=>{
    res.json({message:"This is for delete an Acta"})
}





