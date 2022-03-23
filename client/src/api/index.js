import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = async () => {
    const res = await axios.get(url);
    return res.data;
};

export const createPost = async newPost => {
    const res = await axios.post(url, newPost);
    return res.data;
};