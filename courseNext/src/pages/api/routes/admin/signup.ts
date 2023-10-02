
import {  NextApiRequest, NextApiResponse } from "next";
import Admin from "../../../../../db/models/adminModel";
import connectMongo from "../../../../../db/db";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from 'cookie';

type Data = {
    message : string
}


const handler = async(
    req : NextApiRequest,
    res : NextApiResponse
) => {
    if(req.method === "POST"){
        hash(req.body.password, 10, async function (err, hash) {             
        const {email} = req.body;
        await connectMongo();
        const admin = await Admin.findOne({email})
        if(admin){
            res.status(403).json({message : "Admin already exists"})
        }else{
           
           const obj = {email : email , password : hash}
           const newAdmin = new Admin(obj);
           newAdmin.save();          
           const claims = {sub :newAdmin.email }
           const jwt = sign(claims, `${process.env.admin_secret}`, {expiresIn : "1h"}) ;
           res.setHeader("Set-Cookie",cookie.serialize("auth",jwt,{
            httpOnly : true,
            secure : process.env.NODE_ENV !== "development",
            sameSite : 'strict',
            maxAge : 3600,
            path : '/'
        }))
        res.json({message : "admin created"})
        }   
    })    
    }
}
   

export default handler;