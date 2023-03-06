import { pool } from "../database";

export const createActa = async (req,res)=>{
    var sql="INSERT INTO actas SET id_Folder_fk=(SELECT id_folder FROM folder WHERE id_folder = ?), id_ceremony_fk=(SELECT id_ceremony FROM ceremony WHERE id_ceremony=?), date_limit_fk=(SELECT date FROM ceremony WHERE id_ceremony=?), name_Student=?,id_Student=?,degree=?,degree_plan=?,signatures=?";
    var data=req.body;
    try{
        const saved= pool.query(sql,[data.id_Folder,data.id_ceremony,data.id_ceremony,data.name_Student,data.id_Student,data.degree,data.degree_plan,data.signatures]);
        res.status(201).json({message:"Saved successfully"});
    }catch(error){
        return res.status(500).json(error);
    }
}

export const addSinoidalesActa = (req,res) =>{
    const sql = "INSERT INTO actas_sinoidales SET id_ceremony=(SELECT id_ceremony FROM ceremony WHERE id_ceremony=?), date_fk=(SELECT date FROM ceremony WHERE id_ceremony=?), id_actas_fk=(SELECT id_actas FROM actas WHERE id_actas=?),id_sinoidales_fk=(SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales=?)"
    const {idActa,idCeremony,idSinoidal}=req.params;
    try{
        const quer=pool.query(sql,[idCeremony,idCeremony,idActa,idSinoidal]);
        res.status(201).json({message:"Set Sinoidal in Acta Successfully"});
    }catch(err){    
        res.status(500).json({message:err});
    }
}

export const getActasSinoidales = async(req,res) =>{
    const [resp]=await pool.query("SELECT * FROM actas_sinoidales");
    if(resp.length === 0)return res.status(404).json({message:"Are not get sinoidales signing to any acta"});
    res.json(resp);
}


export const getActas = async(req,res)=>{
    const [respon]=await pool.query("SELECT * FROM actas");
    if(respon.length === 0 )return res.status(404).json({message:"Are not Actas Registered"});
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




