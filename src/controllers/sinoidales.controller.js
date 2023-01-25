import { pool } from "../database";



export const getSinoidales = async (req,res)=>{
    const [data]=await pool.query('SELECT * FROM sinoidales');
    if(!data)res.status(401).json({message:"Not data found"});
    res.status(201).json(data);
}

export const createSinoidal = (req,res)=>{
    var sql="INSERT INTO sinoidales (first_Name,second_Name,email,telephone,area,id_professor) VALUES (? ,? ,? ,? ,?,?)"
    var data=req.body;
    try{
        const saved=pool.query(sql,[data.first_Name,data.second_Name,data.email,data.telephone,data.area,data.id_professor]);
        res.status(201).json({message:"Saved successfully"});
        //res.status(201).json(data[0]);
    }catch(error){
        console.log(error);
        return res.status(500).json(error);
    }
}