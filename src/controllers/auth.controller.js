import { pool } from "../database";



export const signIn = (req,res)=>{
    console.log(req.body.user);
    res.json('Recibiendo la info');
}


