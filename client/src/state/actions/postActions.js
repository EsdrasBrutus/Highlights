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
