import React, { useEffect, useState } from "react";
import {
	Container,
	Grow,
	Grid,
	Box,
	Modal,
	Paper,
	Button,
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
	const searchQuery = query.get("searchQuery");

	const toggleModal = () => {
		dispatch(showModal());
	};
	const classes = useStyles();
	const isOpen = useSelector((state) => state.modal);

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
				<Container className={classes.search}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							toggleModal();
						}}
					>
						New Post
					</Button>
					<Search />
				</Container>
				<Grid
					className={classes.mainContainer}
					container
					justifyContent="center"
					alignItems="stretch"
					spacing={4}
				>
					<Grid item xs={12} sm={10} md={9}>
						<Posts />
					</Grid>
				</Grid>
				<div className={classes.pagination}>
					<Paper className={classes.paginate} elevation={6}>
						<Paginate page={page} />
					</Paper>
				</div>

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
