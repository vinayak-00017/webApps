import mongoose from "mongoose";
// Define mongoose schemas

const adminSchema = new mongoose.Schema({
    email: String,
    password: String
  });
  
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
  });


export const Admin = mongoose.model('Admin', adminSchema);
export const Course = mongoose.model('Course', courseSchema);
  
