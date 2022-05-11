import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		marginBottom: "30px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},
	heading: {
		color: theme.palette.primary.main,
		textDecoration: "none",
		fontSize: "2em",
		fontWeight: 300,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		margin: 10,
	},
	image: {
		marginLeft: "10px",
		marginTop: "5px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
		width: "300px",
		[theme.breakpoints.down("sm")]: {
			width: "auto",
		},
	},
	profile: {
		display: "flex",
		justifyContent: "space-between",
		width: "400px",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			width: "auto",
			marginTop: 20,
			justifyContent: "center",
		},
	},
	logout: {
		marginLeft: "20px",
	},
	userName: {
		display: "flex",
		alignItems: "center",
		textAlign: "center",
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
	},
}));
