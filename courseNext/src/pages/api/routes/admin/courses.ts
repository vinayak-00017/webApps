import { NextApiRequest, NextApiResponse } from "next";
import authenticated from "../../middleware/auth";


const handler = async(
    req : NextApiRequest,
    res : NextApiResponse
) => {
    res.json({message : "done"})
}

export default handler;