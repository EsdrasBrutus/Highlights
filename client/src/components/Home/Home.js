import React, { useEffect } from "react";
import { Container, Grow, Grid, Box, Modal } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts, setCurrentId } from "../../state/actions/postActions";
import useStyles from "./styles";
import { showModal } from "../../state/actions/modalActions";

const Home = () => {
	const dispatch = useDispatch();
	const toggleModal = () => {
		dispatch(showModal());
	};
	const classes = useStyles();
	const isOpen = useSelector((state) => state.modal);
	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "30%",
	};
	return (
		<Grow in>
			<Container>
				<Grid
					className={classes.mainContainer}
					container
					justifyContent="space-between"
					alignItems="stretch"
					spacing={3}
				>
					<Grid item xs={12} sm={2}>
						<button
							className={classes.button}
							onClick={() => {
								toggleModal();
							}}
						>
							{" "}
							New Post{" "}
						</button>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Posts />
					</Grid>
				</Grid>
				<Modal
					open={isOpen}
					onClose={() => {
						toggleModal();
						dispatch(setCurrentId(null));
					}}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Form />
					</Box>
				</Modal>
			</Container>
		</Grow>
	);
};

export default Home;
