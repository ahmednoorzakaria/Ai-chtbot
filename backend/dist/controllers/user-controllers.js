import user from "../models/user.js";
import { hash } from 'bcrypt';
export const getAllUsers = async (req, res, next) => {
    // get all users
    try {
        const users = await user.find();
        return res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        return res.status(500).json({ message: "Error", cause: error });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const User = new user({ name, email, password: hashedPassword });
        await User.save();
        return res.status(200).json({ message: "ok", id: User._id.toString() });
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ message: "Error", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map