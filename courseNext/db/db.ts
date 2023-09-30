
import mongoose from "mongoose";



const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.vhxkjn2.mongodb.net/nextCourse`

let client: typeof mongoose;

try {
    mongoose.connect(uri)
    client = mongoose
    console.log("db connected")
}catch(error){
    console.log("there was an error in db", error)
}

export default client;