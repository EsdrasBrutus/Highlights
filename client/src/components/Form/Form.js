import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import {
	addPost,
	updatePost,
	setCurrentId,
} from "../../state/actions/postActions";
import { useNavigate } from "react-router-dom";
import { showModal } from "../../state/actions/modalActions";

const Form = () => {
	const [postData, setPostData] = useState({
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	const classes = useStyles();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const toggleModal = () => {
		dispatch(showModal());
	};

	const postId = useSelector((state) => state.currentId);
	const post = useSelector((state) =>
		state.currentId
			? state.posts.posts.find((post) => post._id === state.currentId)
			: null
	);

	const user = JSON.parse(localStorage.getItem("profile"));

	useEffect(() => {
		if (post) {
			setPostData(post);
		}
	}, [post]);

	const clear = () => {
		dispatch(setCurrentId(null));
		setPostData({
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (postId) {
			dispatch(updatePost(postId, { ...postData, name: user?.result?.name }));
		} else {
			dispatch(addPost({ ...postData, name: user?.result?.name }));
		}
		navigate("/");
		toggleModal();
	};

	if (!user?.token) {
		return (
			<Paper className={classes.paper}>
				<Typography variant="h5">Please Sign In to Create a Post</Typography>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						dispatch(setCurrentId(null));
						clear();
						navigate("/auth");
					}}
				>
					Sign In
				</Button>
			</Paper>
		);
	}

	return (
		<Paper className={classes.paper} style={{ padding: "1rem" }}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">
					{postId ? "Editing Post" : "Create a Post"}{" "}
				</Typography>
				<TextField
					name="title"
					label="Title"
					variant="outlined"
					fullWidth
					value={postData.title}
					onChange={(e) => setPostData({ ...postData, title: e.target.value })}
				/>
				<TextField
					name="message"
					label="Message"
					variant="outlined"
					fullWidth
					multiline
					rows={4}
					value={postData.message}
					onChange={(e) =>
						setPostData({ ...postData, message: e.target.value })
					}
				/>
				<TextField
					name="tags"
					label="Hashtags"
					variant="outlined"
					fullWidth
					value={postData.tags}
					onChange={(e) =>
						setPostData({ ...postData, tags: e.target.value.split(",") })
					}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className={classes.buttonSubmit}
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					className={classes.buttonSubmit}
					size="small"
					onClick={clear}
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
