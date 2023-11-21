import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    phoneNo : {
        type: String,
        unique:true,
    }
})
export default mongoose.model('User', UserSchema);