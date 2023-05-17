import { pool } from "../database";

export const createActa = async (req,res)=>{
    var sql="INSERT INTO actas SET id_Folder_fk=(SELECT id_folder FROM folder WHERE id_folder = ?), id_ceremony_fk=(SELECT id_ceremony FROM ceremony WHERE id_ceremony=?), date_limit_fk=(SELECT date FROM ceremony WHERE id_ceremony=?), name_Student=?,lastName_Student=?,id_Student=?,degree=?,degree_plan=?,signatures=? ";
    var data=req.body;
    const idInsert=null;
    try{
        const saved = pool.query(sql,[data.id_Folder,data.id_ceremony,data.id_ceremony,data.name_Student,data.lastName_Student,data.id_Student,data.degree,data.degree_plan,data.signatures]);
        saved.then((result)=>{
            res.status(201).json({actadata:result[0].insertId});
            console.log("This is the result\n"+result);
        })
    }catch(error){
        
        return res.status(500).json({message:error});
    }
}

export const addSignatureToActa = async(req,res) =>{
    var sql ="UPDATE actas SET signatures = ? WHERE id_actas=?";
    const {idActa,Signatures}=req.params;
    try{
        const quer = await pool.query(sql,[Signatures,idActa]);
        console.log(quer);
        if(quer.affectedRows===0)res.status(404).json({message:"Acta not found"});
        res.status(201).json({message:"Acta Signatures updated successfully!"});
    }catch(err){
        res.status(500).json({message:err});
    }
}

export const addSinoidalesActa = (req,res) =>{
    const sql = "INSERT INTO actas_sinoidales SET id_ceremony=(SELECT id_ceremony FROM ceremony WHERE id_ceremony=?), date_fk=(SELECT date FROM ceremony WHERE id_ceremony=?), id_actas_fk=(SELECT id_actas FROM actas WHERE id_actas=?),id_sinoidales_fk=(SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales=?),signed=0"
    const {idActa,idCeremony,idSinoidal}=req.params;
    try{
        const quer=pool.query(sql,[idCeremony,idCeremony,idActa,idSinoidal]);
        res.status(201).json({message:"Set Sinoidal in Acta Successfully"});
    }catch(err){    
        res.status(500).json({message:err});
    }
}

export const updateActa = async (req,res) =>{
    const sql = "UPDATE `actas` SET `id_ceremony_fk`=(SELECT id_ceremony FROM ceremony WHERE id_ceremony = ?),`id_folder_fk`=(SELECT id_folder FROM folder WHERE id_folder=?) WHERE `id_actas`=?";
    var data = req.body;
    try{
        const [exe] = await pool.query(sql,[data.idCeremony,data.idFolder,req.params.idActa]);
        if(exe.affectedRows === 0 )res.status(404).json({message:"Acta not found"});
        res.status(201).json({message:"Acta update successfully"});
    }catch(err){
        res.status(500).json({message:err});
    }
}

export const updateSinoidalActa = async (req,res) =>{
    const sql="UPDATE `actas_sinoidales` SET `id_sinoidales_fk` = (SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales=?) WHERE `id_actas_fk` = ? AND `id_register`=? AND `signed`=0"
    var data=req.body;
    try{
        const [qe]= await pool.query(sql,[data.idSinoidal,req.params.idActa,data.idRegister]);
        if(qe.affectedRows === 0 )return res.status(404).json({message:"Id Acta not Found"});
        res.status(201).json({message:"Register Updated successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}

export const getActasSinoidales = async(req,res) =>{
    const [resp]=await pool.query("SELECT * FROM actas_sinoidales");
    if(resp.length === 0)return res.status(404).json({message:"Are not get sinoidales signing to any acta"});
    res.json(resp);
}

export const getActasSinoidalesByActa = async(req,res) =>{
    const {idActa}=req.params;
    const [resp]=await pool.query("SELECT * FROM actas_sinoidales WHERE id_actas_fk=?",[idActa]);
    if(resp.length === 0)return res.status(404).json({message:"Acta not found"});
    res.status(201).json(resp);
}



export const getActasSinoidalesBySinoidal = async(req,res) =>{
    const {idSinoidal}=req.params;
    const [resp]=await pool.query("SELECT * FROM actas_sinoidales WHERE id_sinoidal_fk=?",[idSinoidal]);
    if(resp.length === 0)return res.status(404).json({message:"Acta not found"});
    res.json(resp);
}

export const getSignedFromActasSinoidales = async(req,res) =>{
    const {idActa,idSinoidal} = req.params;
    try{
        const [resp] = await pool.query("SELECT `signed` FROM actas_sinoidales WHERE id_sinoidales_fk = ? AND id_actas_fk=?",[idSinoidal,idActa]);
        if(resp.affectedRows === 0)res.status(404).json({message:"Indexes not found"});
        res.status(201).json(resp);
    }catch(err){
        res.status(500).json({message:err});
    }
}

export const getActas = async(req,res)=>{
    const [respon]=await pool.query("SELECT * FROM actas");
    if(respon.length === 0 )return res.status(404).json({message:"Are not Actas Registered"});
    res.status(201).json(respon);
};

export const updateActaSignatures = async(req,res)=>{
    const sql="UPDATE `actas_sinoidales` SET `signed` = 1 WHERE `id_actas_fk`=? AND `id_sinoidales_fk`=?";
    const {idActa,idSinoidal}=req.params;
    try{
        const val= await pool.query(sql,[idActa,idSinoidal]);
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

export const deleteActaSinoidales = async (req,res) =>{
    try{
        const data =  await pool.query("DELETE FROM `actas_sinoidales` WHERE `id_actas_fk`=? AND `signed`=0",[req.params.idActa]);
        if(data.affectedRows === 0 )res.status(404).json({message:"ACTA NOT FOUND"})    
        res.status(201).json({message:"Acta deleted successfully"});
    }catch(err){
        res.status(500).json({message:err});
    } 
           
}      
        
export const getCountFirmasBySinoidal = async (req,res) =>{
    const {idSinodal} = req.params;
    const sql = "SELECT COUNT(*) FROM `actas_sinoidales` WHERE `id_sinoidales_fk` = ? AND `signed`=1";
    try{
        const [query] = await pool.query(sql,[idSinodal]);
        if(query.affectedRows === 0 )res.status(404).json({message:"Sinodal not Found"});
        res.status(201).json(query);
    }catch(err){
       res.status(500).json({message:err});
   }
}

