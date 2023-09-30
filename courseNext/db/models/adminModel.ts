import { model } from "mongoose";
import { Schema, models } from "mongoose";


const adminSchema = new Schema({
    email : String,
    password: String
})


const Admin = models.Admin || model("Admin",adminSchema);

export default Admin;