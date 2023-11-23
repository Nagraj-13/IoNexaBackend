import mongoose from "mongoose";
const currentUserSchema = mongoose.Schema({
    name: { type: String, required: true },
    phoneNo : {
        type: String,
    },
    amount: {
        type: Number,
        required: true
    }
})
export default mongoose.model('currentUser', currentUserSchema);