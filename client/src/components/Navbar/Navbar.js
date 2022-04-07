import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import logo from "../../images/logo.png";

const Navbar = () => {
	const classes = useStyles();
	return (
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
		</AppBar>
	);
};

export default Navbar;
