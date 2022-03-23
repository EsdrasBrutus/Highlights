import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector(state => state.posts);
    console.log(posts);
    const classes = useStyles();
  return (
    !posts.length ? <CircularProgress className={classes.progress} /> :
    <Grid container className={classes.container} spacing={3} alignItems={'stretch'}>
        {posts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
                <Post post={post} />
            </Grid>
        ))}
    </Grid>
  );
};

export default Posts