import mongoose from "mongoose";
import User from "../models/user.js";
import bycryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user)
			return res.status(404).json({ message: "No user with that email" });

		const isMatch = await bycryptjs.compare(password, user.password);

		if (!isMatch) return res.status(401).json({ message: "Wrong email or password" });

		const token = jwt.sign(
			{ email: user.email, id: user._id },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);

        res.status(200).json({ result: user, token });
    }
    catch (err) {
		res.status(500).json({ message: "Something Went Wrong." });
	}
};

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try { 
        const user = await User.findOne({ email });

        if (user)
            return res.status(400).json({ message: "User already exists" });
        
        if (password !== confirmPassword)
            return res.status(400).json({ message: "Passwords do not match" });

        const hashedPassword = await bycryptjs.hash(password, 12);

        const newUser = new User({
            name: `${firstName} ${lastName}`,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const token = jwt.sign(
            { email: newUser.email, id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ result: newUser, token });
    }
    catch (err) {
        res.status(500).json({ message: "Something Went Wrong." });
    }
};
