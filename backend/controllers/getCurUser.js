import currentUser from '../Models/Current.Model.js';
export const sendCurUserController = async(req,res)=>{
    try{
        const data = await currentUser.find()
        if(data.length===0){
            res.status(300).json({
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