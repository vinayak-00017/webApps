
import {  NextApiRequest, NextApiResponse } from "next";
import Admin from "../../../../../db/models/adminModel";
import connectMongo from "../../../../../db/db";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from "cookie";

import authenticated from "../../middleware/auth";

type Data = {
    message : string
}

interface AuthResponse {
    authToken : string 
}


const handler = async(
    req : NextApiRequest,
    res : NextApiResponse
) => {
    if(req.method === "POST"){           
        const {email} = req.body;
        await connectMongo();
        const admin = await Admin.findOne({email})
        if(admin){
            compare(req.body.password, admin.password,  function(err, result){
                if(!err && result){
                    const claims = {sub :admin.email }
                    const jwt = sign(claims, `${process.env.admin_secret}`, {expiresIn : "1h"}) ;
                    // const response : AuthResponse = {authToken : jwt} 
                    res.setHeader("Set-Cookie",cookie.serialize("auth",jwt,{
                        httpOnly : true,
                        secure : process.env.NODE_ENV !== "development",
                        sameSite : 'strict',
                        maxAge : 3600,
                        path : '/'
                    }))
                    res.json({message : "logged in"})
                    
                }else{
                    res.json({message : "opps, something went wrong"})
                }
            })
        }else{         
           res.status(405).json({message : "An error occured"})
        }      
    }
}
   

export default handler;