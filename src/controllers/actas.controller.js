import { pool } from "../database";

export const createActa = (req,res)=>{
    var sql="INSERT INTO actas (date_Creation,id_Folder,name_Student,id_Student,degree,degree_plan,date_Limit,id_ceremony_fk) VALUES (? ,? ,? ,? ,? ,? ,?,?)"
    var data=req.body;
    try{
        const saved=pool.query(sql,[data.date_Creation,data.id_Folder,data.name_Student,data.id_Student,data.degree,data.degree_plan,data.date_Limit,data.id_ceremony]);
        res.status(201).json({message:"Saved successfully"});
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
    const [rows]=await pool.query("DELETE FROM actas WHERE idactas = ?",[req.params.idActa]);
    if(rows.length<=0)return res.status(404).json({message:"error"});
    res.status(201).json({message:"Acta deleted"})
}


export const searchActaById = async(req,res)=>{
    const [rows]=await pool.query("SELECT * FROM actas WHERE idactas = ?",[req.params.idActa]);
    if(rows.length<=0)return res.status(404).json({message:"Acta not found"});
    res.status(201).json(rows[0]);
}




