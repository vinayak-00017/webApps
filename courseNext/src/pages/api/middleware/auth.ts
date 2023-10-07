
import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";


const authenticated = (fn: NextApiHandler) => async(
    req : NextApiRequest,
    res : NextApiResponse
) => {
    try{
        verify(req.cookies.auth! , `${process.env.admin_secret}` , async function(err, decoded) {
            if (!err && decoded){
                return await fn(req,res)
            }
    
            res.status(401).json({message: "you are not authinticated"})
        })
    }catch(err){
        res.status(401).json({message: "you are not authinticated"})
        console.error(err)
    }
   
}

export default authenticated;