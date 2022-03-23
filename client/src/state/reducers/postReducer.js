export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    case 'ADD_POST':
        return [...state, action.payload];
    // case 'DELETE_POST':
    //     return state.filter(post => post.id !== action.payload);
    // case 'EDIT_POST':
    //     return state.map(post => {
    //         if (post.id === action.payload.id) {
    //             return {
    //                 ...post,
    //                 ...action.payload
    //             }
    //         } else {
    //             return post;
    //         }
    //     });
    default:
      return state;
  }
};

// convert to redux-toolkit reducer 
// import { createSlice } from '@reduxjs/toolkit';
//
// const postSlice = createSlice({
//     name: 'posts',
//     initialState: {},
//     reducers: {
//         fetchPosts: (state, action) => action.payload,
//         addPost: (state, action) => [...state, action.payload],
//         deletePost: (state, action) => state.filter(post => post.id !== action.payload),
//         editPost: (state, action) => state.map(post => {
//             if (post.id === action.payload.id) {
//                 return {
//                     ...post,
//                     ...action.payload
//                 }
//             } else {
//                 return post;
//             }
//         })
//     }
// });
//
// export const { fetchPosts, addPost, deletePost, editPost } = postSlice.actions;
//
// export default postSlice.reducer;