
import mongoose from "mongoose";



const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.vhxkjn2.mongodb.net/nextCourse`

const connectMongo =async () => {
 mongoose.connect(uri)   
}

export default connectMongo;