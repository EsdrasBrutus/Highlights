import mongoose from "mongoose";
import User from "../models/user.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });

		if (!user)
			return res.status(404).json({ message: "No user with that email" });

		const isMatch = await bycrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(401).json({ message: "Wrong password" });

		const token = jwt.sign({email: user.email, id: user._id }, process.env.JWT_SECRET);

		res.status(200).json({ token });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const signUp = async (req, res) => {}; 
