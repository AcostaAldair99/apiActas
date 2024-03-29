import { pool } from "../database";


export const getSinoidales = async (req,res)=>{
    const [data]=await pool.query('SELECT * FROM sinoidales');
    if(!data)res.status(401).json({message:"Not data found"});
    res.status(201).json(data);
}

//Check validation for repeat sinoidales based on matricula
export const createSinoidal = async(req,res)=>{
    var sql="INSERT INTO sinoidales (first_Name,second_Name,area,id_professor,disponibility,isActive) VALUES (?,?,?,?,?,?)"
    var data=req.body;
    try{
        const saved=pool.query(sql,[data.first_Name,data.second_Name,data.area,data.id_professor,data.disponibility,data.isActive]);
        saved.then((result)=>{
            res.status(201).json({idSinoidal:result[0].insertId,message:"Added Successfully"});
        })
        
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
}

export const getSinoidalById = async(req,res) => {
    const {idSinoidal}=req.params;
    const [data] = await pool.query('SELECT * FROM sinoidales WHERE id_sinoidales=?',[idSinoidal]);
    if(data.affectedRows === 0 )res.status(404).json({message:"Sinoidal not found"});
    res.status(201).json(data);
}

export const updateSinoidal = async (req,res) =>{
    var sql="UPDATE `sinoidales` SET `email` = ?, `telephone` = ? WHERE `id_sinoidales` = ?"
    var data=req.body;
    const {id_sinoidal}=req.params;
    try{
        const [saved] = await pool.query(sql,[data.email,data.telephone,id_sinoidal]);
        if(saved.affectedRows <= 0)return res.status(404).json({message:"Sinoidal not found"});
        res.status(201).json({message:"Sinoidal updated successfully"});
    }catch(err){
        res.status(500).json(err);
    }
}

export const deleteSinoidal = async (req,res) =>{
    var sql = "DELETE FROM sinoidales WHERE id_sinoidales=?";
    var data = req.params;
    try{
        const [result] = await pool.query(sql,[data.idSinoidal]);
        if(result.affectedRows === 0 )res.status(404).json({message:"Sinoidal not found"});
        res.status(201).json({message:"Sinoidal deleted successfully"});
    }catch(err){
        res.status(500).json({message:err});
    }
}



export const disActiveSinoidal = async (req,res) =>{
    const {idSinoidal}=req.params;
    const sql=isActive(req.body.active);
    try{
        const [quer]=pool.query(sql,[idSinoidal]);
        if(quer.affectedRows === 0)return res.status(404).json({message:"Sinoidal not Found"});
        res.status(201).json({message:"Sinoidal update successfully"});
    }catch(err){
        res.status(500).json({res:sql,err});
    }
}

function isActive(data){
    if(data){
        return "UPDATE `sinoidales` SET `isActive` = isActive - 1 WHERE `id_sinoidales` = ?"
    }else{
        return "UPDATE `sinoidales` SET `isActive` = isActive + 1 WHERE `id_sinoidales` = ?"
    }
}