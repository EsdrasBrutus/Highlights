import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

	search: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},
	pagination: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		margin: "20px", 
	},
	[theme.breakpoints.down("xs")]: {
		mainContainer: {
			flexDirection: "column-reverse",
		},
	},
	[theme.breakpoints.down("sm")]: {
		mainContainer: {
			width: "100%",
		},
	}
}));
