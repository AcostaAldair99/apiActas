import { pool } from "../database";


export const getFolders = async(req,res)=>{
    const [respon]=await pool.query("SELECT * FROM folder");
    res.json(respon);
};

export const updateFolder =  async(req,res)=>{
    const {id_folder}=req.params;
    const data=req.body;
    try{
        const [respon] =  await pool.query("UPDATE `folder` SET `case` = ? WHERE `id_folder` = ?",[data.case,id_folder]);        
        if(respon.affectedRows === 0)return res.status(404).json({message:"Folder not found"});
        res.status(201).json({message: "Folder updated successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}

export const addFolder = async(req,res)=>{
    var sql="INSERT INTO `folder` (`case`) VALUES (?)"
    var data=req.body;
    try{
        const resp = pool.query(sql,[data.case]);
        res.status(201).json({message:data.case});
    }catch(err){
        res.status(500).json(err);
    }
}

export const deleteFolder = async(req,res)=>{
    const {id_folder}=req.params.id_folder;
    console.log(id_folder);
    try{
        const [respon]=await pool.query("DELETE FROM `folder` WHERE `id_folder`=?",[id_folder]);
        if(respon.affectedRows <= 0)return res.status(404).json({message:"Folder not found"});
        res.status(201).json({message:"Folder deleted successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}


export const getCeremonies = async(req,res)=>{
    const [respon] = await pool.query("SELECT * FROM ceremony");
    res.json(respon);
}

export const createCeremony = async(req,res) => {
    var sql="INSERT INTO ceremony (date,cicle) VALUES (? ,?)"
    var data=req.body;
    try{
        const saved=pool.query(sql,[data.date,data.cicle]);
        res.status(201).json({message:"Ceremony Saved successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}

export const updateCeremony =  async(req,res) => {
    const {id_ceremony}=req.params;
    const data=req.body;
    try{ 
        const [respon] =  await pool.query("UPDATE `ceremony` SET `date` = ?,`cicle` = ?  WHERE `id_ceremony` = ?",[data.date,data.cicle,id_ceremony]);        
        if(respon.affectedRows === 0)return res.status(404).json({message:"Ceremony not found"});
        res.status(201).json({message: "Ceremony updated successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}