import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	media: {
		borderRadius: "20px",
		objectFit: "cover",
		width: "auto",
		maxHeight: "600px",
	},
	card: {
		display: "flex",
		width: "100%",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			flexWrap: "wrap",
		},
	},
	section: {
		borderRadius: "20px",
		margin: "10px",
		flex: 1,
	},
	imageSection: {
		marginLeft: "20px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
		},
		[theme.breakpoints.down("xs")]: {
			width: "100%",
			marginLeft: 0,
		},
	},
	loadingPaper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "20px",
		borderRadius: "15px",
		height: "39vh",
	},
}));
