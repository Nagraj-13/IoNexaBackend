import mongoose from "mongoose";
const MONGODB_URL = 'mongodb+srv://IONEXA:IONEXA_KKNPD@cluster0.5ifgp8r.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async () =>{
    try{
       const conn = await mongoose.connect(MONGODB_URL)
            console.log("Connected to MongoDB")
        }catch(error){
            console.log(`MongoDB error : ${error}`)
    }
}

export default connectDB