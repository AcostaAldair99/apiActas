import { pool } from "../database";

export const createActa = async (req,res)=>{
    var sql="INSERT INTO actas SET id_Folder_fk=(SELECT id_folder FROM folder WHERE id_folder = ?), id_ceremony_fk=(SELECT id_ceremony FROM ceremony WHERE id_ceremony=?), date_limit_fk=(SELECT date FROM ceremony WHERE id_ceremony=?), name_Student=?,id_Student=?,degree=?,degree_plan=?,signatures=?";
    var data=req.body;
    const idInsert=null;
    try{
        const saved= pool.query(sql,[data.id_Folder,data.id_ceremony,data.id_ceremony,data.name_Student,data.id_Student,data.degree,data.degree_plan,data.signatures]);
        saved.then((result)=>{
            res.status(201).json({actadata:result[0].insertId});
        })
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


export const updateSinoidalActa = async (req,res) =>{
    const sql="UPDATE `actas_sinoidales` SET `id_sinoidales_fk` = (SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales=?) WHERE `id_actas_fk` = ? AND `id_sinoidales_fk` = ?"
    var data=req.body;
    const {idActa,idSinoidal}=req.params;
    try{
        const [qe]= await pool.query(sql,[data.id_sinoidales,idActa,idSinoidal]);
        if(qe.affectedRows === 0 )return res.status(404).json({message:"Id Acta not Found"});
        res.status(200).json({message:"Register Updated successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}

export const getActasSinoidales = async(req,res) =>{
    const [resp]=await pool.query("SELECT * FROM actas_sinoidales");
    if(resp.length === 0)return res.status(404).json({message:"Are not get sinoidales signing to any acta"});
    res.json(resp);
}

export const getActasSinoidalesById = async(req,res) =>{
    const {idActa}=req.params;
    const [resp]=await pool.query("SELECT * FROM actas_sinoidales WHERE id_actas_fk=?",[idActa]);
    if(resp.length === 0)return res.status(404).json({message:"Acta not found"});
    res.json(resp);
}


export const getActasSinoidalesBySinoidal = async(req,res) =>{
    const {idSinoidal}=req.params;
    const [resp]=await pool.query("SELECT * FROM actas_sinoidales WHERE id_sinoidal_fk=?",[idSinoidal]);
    if(resp.length === 0)return res.status(404).json({message:"Acta not found"});
    res.json(resp);
}

export const getActas = async(req,res)=>{
    const [respon]=await pool.query("SELECT * FROM actas");
    if(respon.length === 0 )return res.status(404).json({message:"Are not Actas Registered"});
    res.status(201).json(respon);
};

export const updateActaSignatures = async(req,res)=>{
    const sql="UPDATE `actas` SET `signatures` = signatures + 1 WHERE id_actas=?";
    const {idActa}=req.params;
    try{
        const [val]= await pool.query(sql,[idActa]);
        if(val.affectedRows===0)return res.status(404).json({message:"Acta not found"});
        res.status(201).json({message:"Acta updated Successfully a sinoidal got signed the acta"});
    }catch(err){
        res.status(500).json({message:"There is the limit for signatures",err});
    }
};


export const deleteActaById = async (req,res)=>{
    try{
        const [rows]=await pool.query("DELETE FROM actas WHERE id_actas = ?",[req.params.idActa]);
        if(rows.length<=0)return res.status(404).json({message:"error"});
        res.status(201).json({message:"Acta deleted !!"})
    }catch(err){
        res.status(500).json(err);
    }
}





