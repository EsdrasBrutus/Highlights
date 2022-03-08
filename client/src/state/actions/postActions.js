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
