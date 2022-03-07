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

export const createPost = (req, res) => {
    const body = req.body;

    try {

    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const updatePost = (req, res) => {
    const body = req.body;

    try {

    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const deletePost = (req, res) => {
    const body = req.body;

    try {

    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};