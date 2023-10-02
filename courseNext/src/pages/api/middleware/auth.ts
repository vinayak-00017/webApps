
import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";


const authenticated = (fn: NextApiHandler) => async(
    req : NextApiRequest,
    res : NextApiResponse
) => {
    verify(req.cookies.auth! , `${process.env.admin_secret}` , async function(err, decoded) {
        if (!err && decoded){
            return await fn(req,res)
        }

        res.status(500).json({message: "you are not authinticated"})
    })
}

export default authenticated;