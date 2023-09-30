
import {  NextApiRequest, NextApiResponse } from "next";
import Admin from "../../../../../db/models/adminModel";

type Data = {
    message : string
}


const handler = async(
    req : NextApiRequest,
    res : NextApiResponse<Data>
) => {
    if(req.method === "POST"){
        const {email,password} = req.body;
        console.log("signup")
        const admin = await Admin.findOne({email})
        if(admin){
            res.status(403).json({message : "Admin already exists"})
        }else{
           const obj = {email : email , password : password}
           const newAdmin = new Admin(obj);
           newAdmin.save();
           
           res.status(200).json({message : "Admin created successfully"})
        }       
    }
}
   

export default handler;