import * as api from '../../api';

export const getPosts = () => async (dispatch) => {
   try {
        const posts = await api.fetchPosts();
        dispatch({
             type: 'FETCH_POSTS',
             payload: posts
        });
   }
    catch (err) {
        console.log(err);
    }
}

export const addPost = (newPost) => async (dispatch) => {
    try {
        const post = await api.createPost(newPost);
        dispatch({
            type: 'ADD_POST',
            payload: post
        });
    }
    catch (err) {
        console.log(err);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const updatedPost = await api.updatePost(id, post);
        dispatch({
            type: 'EDIT_POST',
            payload: updatedPost
        });
    }
    catch (err) {
        console.log(err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({
            type: 'DELETE_POST',
            payload: id
        });
    }
    catch (err) {
        console.log(err);
    }
}

export const setCurrentId = (id) => {
    return {
        type: 'SET_CURRENT_ID',
        payload: id
    }
}


