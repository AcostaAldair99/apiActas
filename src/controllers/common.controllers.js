import { pool } from "../database";


export const getFolders = async(req,res)=>{
    const [respon]=await pool.query("SELECT * FROM folder");
    res.json(respon);
};

export const updateCaseFolder =  async(req,res)=>{
    const {id_folder}=req.params;
    const data=req.body;
    try{
        const [respon] =  await pool.query("UPDATE `folder` SET `id_case` = ? WHERE `id_folder` = ?",[data.case,id_folder]);        
        if(respon.affectedRows === 0)return res.status(404).json({message:"Folder not found"});
        res.status(201).json({message: "Folder updated successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}

export const addActaToFolder = async(req,res) =>{
    const {id_folder} = req.params;
    try{
        const [response] = await pool.query("UPDATE `folder` SET `actas_num` = actas_num + 1 WHERE id_folder = ?",[id_folder]);
        if(response.affectedRows === 0)return res.status(404).json({message:"Folder not found"});
        res.status(201).json({message: "Acta added to Folder successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}

export const addFolder = async(req,res)=>{
    var sql="INSERT INTO `folder` (`id_case`,`actas_num`) VALUES (?,?)"
    var data=req.body;
    try{
        const resp = pool.query(sql,[data.case,0]);
        res.status(201).json({message:data.case});
    }catch(err){
        res.status(500).json(err);
    }
}

export const deleteFolder = async(req,res)=>{
    const {id_folder}=req.params.id_folder;
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



export const addTelephone = async (req,res) => {
    const sql = "INSERT INTO sinoidales_phones SET id_sinoidal = (SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales = ?), telephone = ?";
    var data = req.body;
    try{
        const review = await pool.query(sql,[req.params.idSinoidal,data.phone]);
        if(review.affectedRows === 0)res.status(404).json({message:"id sinoidal not found"});
        res.status(201).json({message:"Phone added successfully"});
    }catch(err){
        res.status(500).json({message:err});
    }
}

export const getTelephones =  async(req,res) => {
    try{
    const [respon] = await pool.query("SELECT * FROM sinoidales_phones WHERE id_sinoidal=?",[req.params.idSinoidal]);
    res.json(respon);
        
    }catch(err){
        res.status(500).json({message:err});
    }
}

export const getTelephone = async(req,res) => {
    const {id} = req.params;
    try{
        const [respon] = await pool.query("SELECT telephone FROM sinoidales_phones WHERE id_sinoidal=? LIMIT 1",[id]);
        if(respon.length===0)res.status(404).json({message:"Acta not found"});
        res.status(201).json(respon);
    }catch(err){
        res.status(500).json({message:err});
    }
}


export const deleteTelephones = async (req,res) =>{
    var sql = "DELETE FROM sinoidales_phones WHERE id_sinoidal=?";
    var data=req.params;
    try{
        const get = await pool.query(sql,[data.idSinoidal]);
        if(get.affectedRows === 0)res.status(404).json({message:"Sinoidal not found"});
        res.status(201).json({message:"Phone deleted successfully"});
    }catch(err){
        req.status(500).json({message:err});
    }
}

export const  addEmail= async (req,res) => {
    const sql = "INSERT INTO sinoidales_emails SET id_sinoidal = (SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales = ?), email = ?";
    var data = req.body;
    try{
        const [review] = await pool.query(sql,[req.params.idSinoidal,data.email]);
        if(review.affectedRows === 0)res.status(404).json({message:"id sinoidal not found"});
        res.status(201).json({message:"Email added successfully"});
    }catch(err){
        res.status(500).json({message:err});
    }
}

export const getEmail = async (req,res) =>{
    const {id} = req.params;
    try{
        const [data] = await pool.query("SELECT email FROM sinoidales_emails WHERE id_sinoidal=? LIMIT 1",[id]);
        if(data.length===0)res.status(404).json({message:"sinoidal not found"});
        res.status(201).json(data);
    }catch(err){
        res.status(500).json({message:err});
    }
}

export const getEmails=  async(req,res) => {
    try{
    const [respon] = await pool.query("SELECT * FROM sinoidales_emails WHERE id_sinoidal=?",[req.params.idSinoidal]);
    res.json(respon);
        
    }catch(err){
        res.status(500).json({message:err});
    }
}

export const deleteEmails = async (req,res) =>{
    var sql = "DELETE FROM sinoidales_emails WHERE id_sinoidal=?";
    var data=req.params;
    try{
        const [get] = await pool.query(sql,[data.idSinoidal]);
        if(get.affectedRows === 0)res.status(404).json({message:"Sinoidal not found"});
        res.status(201).json({message:"Email deleted successfully"});
    }catch(err){
        res.status(500).json({message:err});
    }
}