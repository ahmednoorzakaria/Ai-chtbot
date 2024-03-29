import user from "../models/user.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manageger.js";
import { COOKIE_NAME } from "../utils/constants.js";
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
        //user signup
        console.log("Request body:", req.body);
        const { name, email, password } = req.body;
        const existingUser = await user.findOne({ email });
        if (existingUser)
            return res.status(401).send("user already registered");
        const hashedPassword = await hash(password, 10);
        const User = new user({ name, email, password: hashedPassword });
        await User.save();
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        const token = createToken(User._id.toString(), User.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        return res
            .status(201)
            .json({ message: "ok", name: User.name, email: User.email });
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ message: "Error", cause: error.message });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        //user login
        const { email, password } = req.body;
        console.log(email, password);
        const User = await user.findOne({ email });
        if (!User) {
            return res.status(401).send("User not registered");
        }
        const isPassword = await compare(password, User.password);
        if (!isPassword) {
            return res.status(403).send("Incorrect password");
        }
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        const token = createToken(User._id.toString(), User.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true,
        });
        return res
            .status(200)
            .json({ message: "ok", name: User.name, email: User.email });
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ message: "Error", cause: error.message });
    }
};
export const verifyUser = async (req, res, next) => {
    try {
        //user login
        const User = await user.findById(res.locals.jwtData.id);
        if (!User) {
            return res.status(401).send("User not registered OR Token mulfunctioned");
        }
        if (User._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permission didnt match");
        }
        return res
            .status(200)
            .json({ message: "ok", name: User.name, email: User.email });
    }
    catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ message: "Error", cause: error.message });
    }
};
export const userLogout = async (req, res, next) => {
    try {
        //user token check
        const User = await user.findById(res.locals.jwtData.id);
        if (!User) {
            return res.status(401).send("User not registered OR Token malfunctioned");
        }
        if (User._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }
        res.clearCookie(COOKIE_NAME, {
            httpOnly: true,
            domain: "localhost",
            signed: true,
            path: "/",
        });
        return res
            .status(200)
            .json({ message: "OK", name: User.name, email: User.email });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map