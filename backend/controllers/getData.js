import UserModel from '../Models/User.Model.js';
export const sendDataController = async(req,res)=>{
    try{
        const data = await UserModel.find()
        if(data.length===0){
            res.status(200).json({
                success:true,
                message: "No data found"
            })
        }
        res.status(200).json({
            success: true,
            data
        })
    }catch(err){
        err
    }
}