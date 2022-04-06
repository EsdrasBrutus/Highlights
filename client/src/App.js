import { useEffect } from "react";
import {
	Container,
	AppBar,
	Typography,
	Grow,
	Grid,
	Box,
	Modal,
} from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useSelector, useDispatch } from "react-redux";
import { getPosts, setCurrentId } from "./state/actions/postActions";
import logo from "./images/logo.png";
import useStyles from "./styles";
import { showModal } from "./state/actions/modalActions";

const App = () => {
	const classes = useStyles();
	const isOpen = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	const toggleModal = () => {
		dispatch(showModal());
	};

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	const style = {
		// center the modal horizontally
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "30%",
	};

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography
					className={classes.heading}
					variant="h2"
					align="center"
					color="inherit"
				>
					Gamer Street
				</Typography>
				<img className={classes.image} src={logo} alt="logo" width={"60px"} />
				<button
					className={classes.button}
					onClick={() => {
						toggleModal();
					}}
				>
					{" "}
					New Post{" "}
				</button>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						className={classes.mainContainer}
						container
						justifyContent="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={6}>
							<Posts />
						</Grid>
					</Grid>
				</Container>
			</Grow>
			{/* Modal */}
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
	);
};

export default App;
