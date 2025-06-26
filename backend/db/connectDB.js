import mongoose from "mongoose"

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB connected suceessfully")
    } catch (error) {
        console.log(error,"not connected");
    }
}

export default connectDB;