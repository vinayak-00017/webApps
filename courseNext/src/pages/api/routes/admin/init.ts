
import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";


const authenticated = () => async(
    req : NextApiRequest,
    res : NextApiResponse
) => {
    const cookie = req.headers.auth;
    console.log(cookie)
    if (typeof cookie !== "string") {
        res.status(500).json({ message: "Invalid authentication cookie" });
        return;
      }
    verify(cookie , `${process.env.admin_secret}` , async function(err, decoded) {
        if (!err && decoded){
            res.json({status : 200})
            return true
        }

        res.status(500).json({message: "you are not authinticated"})
    })
}

export default authenticated;