import user from "../models/user.js";
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
//# sourceMappingURL=user-controllers.js.map