import {
	FETCH_POSTS,
	CREATE,
	UPDATE,
	DELETE,
	LIKE,
	FETCH_BY_SEARCH,
} from "../actions/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				posts: action.payload.data,
				currentPage: action.payload.currentPage,
				totalPages: action.payload.totalPages,
			};
		case FETCH_BY_SEARCH:
			return {
				...state,
				posts: action.payload,
			};
		case CREATE:
			return { posts: [...state.posts, action.payload] };
		case DELETE:
			return {
				posts: state.posts.filter((post) => post._id !== action.payload),
			};
		case UPDATE:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.payload._id ? action.payload : post
				),
			};
		case LIKE:
			return {
				...state,
				posts: state.posts.map((post) => {
					if (post._id === action.payload._id) {
						return { ...post, likes: action.payload.likes };
					}
					return post;
				}),
			};

		default:
			return state;
	}
};
