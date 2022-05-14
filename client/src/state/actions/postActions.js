import * as api from "../../api";
import {
	FETCH_POSTS,
	FETCH_POST,
	CREATE,
	UPDATE,
	DELETE,
	LIKE,
	SET_CURRENT_ID,
	FETCH_BY_SEARCH,
	START_LOADING,
	STOP_LOADING,
} from "./actionTypes";

export const getPosts = (page) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const posts = await api.fetchPosts(page);
		dispatch({
			type: FETCH_POSTS,
			payload: posts,
		});
		dispatch({ type: STOP_LOADING });
	} catch (err) {
		console.log(err);
	}
};

export const getPost = (id) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const post = await api.fetchPost(id);
		dispatch({
			type: FETCH_POST,
			payload: post,
        });

		dispatch({ type: STOP_LOADING });
	} catch (err) {
		console.log(err);
	}
};

export const searchPosts = (searchQuery) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const {
			data: { data },
		} = await api.fetchPostsBySearch(searchQuery);

		dispatch({
			type: FETCH_BY_SEARCH,
			payload: data,
		});
		dispatch({ type: STOP_LOADING });
	} catch (err) {
		console.log(err);
	}
};

export const addPost = (newPost) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const post = await api.createPost(newPost);
		dispatch({
			type: CREATE,
			payload: post,
		});
	} catch (err) {
		console.log(err);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const updatedPost = await api.updatePost(id, post);
		dispatch({
			type: UPDATE,
			payload: updatedPost,
		});
	} catch (err) {
		console.log(err);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		dispatch({
			type: DELETE,
			payload: id,
		});
	} catch (err) {
		console.log(err);
	}
};

export const likePost = (id, post) => async (dispatch) => {
	try {
		const likedPost = await api.likePost(id, post);
		dispatch({
			type: LIKE,
			payload: likedPost,
		});
	} catch (err) {
		console.log(err);
	}
};

export const setCurrentId = (id) => {
	return {
		type: SET_CURRENT_ID,
		payload: id,
	};
};
