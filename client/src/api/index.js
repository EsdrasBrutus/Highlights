import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = async () => {
    const res = await axios.get(url);
    return res.data;
};

export const fetchPost = async (id) => {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
};

export const createPost = async newPost => {
    const res = await axios.post(url, newPost);
    return res.data;
};

export const updatePost = async (id, post) => {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
};

export const deletePost = async id => {   
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
};

export const likePost = async (id, post) => {
    const res = await axios.patch(`${url}/${id}/upvote`, post);
    return res.data;
};

