import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

const Posts = () => {
	const { posts, isLoading } = useSelector((state) => state.posts);
	const classes = useStyles();

	if (!posts.length && !isLoading) return "No posts found";

	return isLoading ? (
		<CircularProgress className={classes.progress} />
	) : (
		<Grid
			container
			className={classes.container}
			spacing={4}
			alignItems={"stretch"}
		>
			{posts.map((post) => (
				<Grid item xs={12} sm={6} md={4} key={post._id}>
					<Post post={post} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
