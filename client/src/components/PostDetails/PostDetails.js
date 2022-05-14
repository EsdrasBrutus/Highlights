import React, { useEffect } from "react";
import {
	Paper,
	Typography,
	CircularProgress,
	Divider,
	Container,
	Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import useStyles from "./styles";
import { getPost, searchPosts } from "../../state/actions/postActions";
import Post from "../Posts/Post/Post"

const PostDetails = () => {
	const { id } = useParams();
	const { post, posts, isLoading } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const classes = useStyles();

	useEffect(() => {
		dispatch(getPost(id));
	}, [id]);

	useEffect(() => {
		if (post) {
			dispatch(searchPosts({ search: "none", tags: post?.tags.join(",") }));
		}
	}, [post]);

	if (!post) return null;
	if (isLoading) {
		return (
			<Paper elevation={6} className={classes.loadingPaper}>
				<CircularProgress size={"7em"} />
			</Paper>
		);
	}

	const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

	return (
		<Container maxWidth="xl">
			<Button className={classes.backButton} onClick={() => navigate("/posts")}>
				<i>←</i>
			</Button>
			<Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
				<div className={classes.card}>
					{post.selectedFile ? (
						<div className={classes.imageSection}>
							<img
								className={classes.media}
								src={
									post.selectedFile ||
									"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
								}
								alt={post.title}
							/>
						</div>
					) : null}
					<div className={classes.section}>
						<Typography variant="h3" component="h2">
							{post.title}
						</Typography>
						<Typography
							gutterBottom
							variant="h6"
							color="textSecondary"
							component="h2"
						>
							{post.tags.map((tag) => `#${tag} `)}
						</Typography>
						<Typography gutterBottom variant="body1" component="p">
							{post.message}
						</Typography>
						<Typography variant="h6">Created by: {post.name}</Typography>
						<Typography variant="body1">
							{moment(post.createdAt).fromNow()}
						</Typography>
						<Divider style={{ margin: "20px 0" }} />
						<Typography variant="body1">
							<strong>Comments - coming soon!</strong>
						</Typography>
						<Divider style={{ margin: "20px 0" }} />
					</div>
				</div>
				{recommendedPosts.length > 0 && (
					<div className={classes.section}>
						<Typography variant="h4" component="h2">
							you might also like
						</Typography>
						<Divider />
						<div
							className={classes.recommendedPosts}
							style={{ margin: "20px" }}
						>
							{recommendedPosts.map((post, i) => (
								<div key={i} style={{ margin: "20px" }}>
									<Post post={post} />
								</div>
							))}
						</div>
					</div>
				)}
			</Paper>
		</Container>
	);
};

export default PostDetails;
