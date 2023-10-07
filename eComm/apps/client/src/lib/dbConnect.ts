import mongoose from "mongoose"
import { env } from "process";
let alreadyDone = false;

export async function ensureDbConnected(){
    if(alreadyDone){
        return;
    }
    alreadyDone = true;
    await mongoose.connect(`${env.MONGO_URL}`,{dbName : `${env.DB_NAME}`})
}