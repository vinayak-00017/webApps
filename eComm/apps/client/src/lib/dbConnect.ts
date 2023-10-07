import mongoose from "mongoose"
let alreadyDone = false;

export async function ensureDbConnected(){
    if(alreadyDone){
        return;
    }
    alreadyDone = true;
    await mongoose.connect("mongodb+srv://ea3y:2NWuD7oy3Hhhunzr@cluster0.vhxkjn2.mongodb.net/nextEcomm",{dbName : "nextEcomm"})
}