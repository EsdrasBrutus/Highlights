import express from 'express';
import { getPosts } from '../controllers/post.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send(console.log('Posts'));
});

export default router;