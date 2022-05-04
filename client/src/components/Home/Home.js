import React, { useEffect, useState } from "react";
import {
	Container,
	Grow,
	Grid,
	Box,
	Modal,
	Paper
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts, setCurrentId } from "../../state/actions/postActions";
import useStyles from "./styles";
import { showModal } from "../../state/actions/modalActions";
import Paginate from "../Pagination/Pagination";
import Search from "../Search/Search";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const Home = () => {
	const dispatch = useDispatch();
	const query = useQuery();
	const page = query.get("page") || 1;
	
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
			<Container maxWidth="xl">
				<Grid
					className={classes.mainContainer}
					container
					justifyContent="center"
					alignItems="stretch"
					spacing={3}
				>
					<Grid item xs={10} sm={2} md="auto">
						<button
							className={classes.button}
							onClick={() => {
								toggleModal();
							}}
						>
							New Post
						</button>
					</Grid>
					<Search />
					<Grid item xs={12} sm={6} md={9}>
						<Posts />
					</Grid>
				</Grid>
				<Paper className={classes.pagination} elevation={6}>
					<Paginate />
				</Paper>
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
