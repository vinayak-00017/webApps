import type { NextApiRequest, NextApiResponse } from 'next'
import { Admin } from 'db';
import jwt from "jsonwebtoken"
import { ensureDbConnected } from '@/lib/dbConnect';

const SECRET = "SECreT";

type Data = {
    token? : string;
    message?:string;
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//         console.log("handler called")
//         await ensureDbConnected();
//         const { email, password } = req.body;
//         const admin = await Admin.findOne({email}); 
//           if (admin) {
//             res.status(403).json({ message: 'Admin already exists' });
//           } else {
//             const obj = { email: email, password: password };
//             const newAdmin = new Admin(obj);
//             newAdmin.save();
    
//             const token = jwt.sign({ email, role: 'admin' }, SECRET, { expiresIn: '1h' });
//             res.json({ message: 'Admin created successfully', token });
//           }      
// }


export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse<Data>
    ) {
            console.log("handler called")
            await ensureDbConnected();
                    const { email, password } = req.body;
                    const admin = await Admin.findOne({email}); 
                      if (admin) {
                        res.status(403).json({ message: 'Admin already exists' });
                      } else {
                        const obj = { email: email, password: password };
                        const newAdmin = new Admin(obj);
                        newAdmin.save();
                
                        const token = jwt.sign({ email, role: 'admin' }, SECRET, { expiresIn: '1h' });
                        res.json({ message: 'Admin created successfully', token });
                      }      
            }