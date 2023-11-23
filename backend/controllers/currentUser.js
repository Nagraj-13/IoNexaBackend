// import CurrentUserModel from "../Models/Current.Model.js";
// import AllUsersModel from "../Models/User.Model.js";

// export const userController = async (req, res, next) => {
//     try {
//         const { name, phoneNo } = req.body;

//         if (!name || !phoneNo) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Name and phone number are required.',
//             });
//         }

//         // Check if there is a current user
//         let currentUser = await CurrentUserModel.findOne();

//         if (currentUser) {
//             // There is a current user, move them to the all users model
//             await AllUsersModel.create({
//                 name: currentUser.name,
//                 phoneNo: currentUser.phoneNo,
//             });

//             // Update the current user with the new data
//             currentUser.name = name;
//             currentUser.phoneNo = phoneNo;
//             await currentUser.save();
//         } else {
//             // No current user, create a new one
//             currentUser = await CurrentUserModel.create({
//                 name,
//                 phoneNo,
//             });
//         }

//         return res.status(200).json({
//             success: true,
//             message: "User registered successfully",
//             user: currentUser,
//         });
//     } catch (err) {
//         console.error("Error in UserController:", err);
//         next('Error in UserController');
//     }
// };


import UserModel from "../Models/User.Model.js";
import CurrentUserModel from "../Models/Current.Model.js";

export const userController = async (req, res, next) => {
    try {
        const { name, phoneNo, amount } = req.body;

        if (!name || !phoneNo || !amount) {
            return res.status(400).json({
                success: false,
                message: 'Something is missing',
            });
        }

        // Check if a user with the same phoneNo already exists
        const existingUser = await UserModel.findOne({ phoneNo });

        if (existingUser) {
            // User already exists, update them
            await UserModel.updateOne(
                { _id: existingUser._id },
                { $set: { name, phoneNo, amount } }
            );

            // Create or update the current user
            let currentUser = await CurrentUserModel.findOne();

            if (currentUser) {
                // There is a current user, update them with the new data
                await CurrentUserModel.updateOne(
                    { _id: currentUser._id },
                    { $set: { name, phoneNo, amount } }
                );
            } else {
                // No current user, create a new one
                currentUser = await CurrentUserModel.create({
                    name,
                    phoneNo,
                    amount
                });
            }

            return res.status(200).json({
                success: true,
                message: 'User updated successfully.',
                user: currentUser,
            });
        }

        // User doesn't exist, so creating a new user
        const newUser = await UserModel.create({
            name,
            phoneNo,
            amount
        });

        // Creating or updating the current user
        let currentUser = await CurrentUserModel.findOne();

        if (currentUser) {
            // There is a current user, updating them with the new data
            await CurrentUserModel.updateOne(
                { _id: currentUser._id },
                { $set: { name, phoneNo, amount } }
            );
        } else {
            // No current user, creating a new one
            currentUser = await CurrentUserModel.create({
                name,
                phoneNo,
                amount
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User registered successfully.',
            user: currentUser,
        });
    } catch (err) {
        console.error('Error in UserController:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error.',
        });
    }
};

