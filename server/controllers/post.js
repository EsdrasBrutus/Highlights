import mongoose from "mongoose";
import PostMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();

        res.status(200).json(posts);
        console.log(posts);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await PostMessage.findById(req.params.id);

        res.status(200).json(post);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: "No post with that id" });

    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });
        res.status(200).json(updatedPost);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: "No post with that id" });

    try {   
        await PostMessage.findByIdAndDelete( id );
        res.status(200).json({ message: "Post deleted" });
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};