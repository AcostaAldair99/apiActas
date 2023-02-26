import { pool } from "../database";


export const getFolders = async(req,res)=>{
    const [respon]=await pool.query("SELECT * FROM folder");
    res.json(respon);
};




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