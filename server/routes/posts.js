import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/post.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/upvote', auth, likePost);

export default router;