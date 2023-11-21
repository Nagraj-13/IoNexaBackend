import UserModel from "../Models/User.Model.js";
export const UserController = async(req,res,next) =>{
    try{
        const {name ,phoneNo  } = req.body;
        if(!name || !phoneNo){
            res.status(201).json({
                message : 'Something is missing',
                success : true,
            });
            // next('something is missing');
        }
        const existingUser = await UserModel.findOne({name}||{phoneNo})
        if(existingUser){
            return res.status(200).send({
                succcess: true,
                message: "Already Exists"
            })
        }
        const newUser={
            name : name,
            phoneNo : phoneNo
        };
        
        
        const user = UserModel.create(newUser)
        res.status(200).send({
            succcess: true,
            message: "User is registered successfully",
            user
        })
    }catch(err){
        next('Error is register controller')
        err
    }
}