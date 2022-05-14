import React from "react";
import useStyles from "./styles";
import logo from "../../images/logo.png";
import { Typography } from "@material-ui/core";

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Typography
				variant="h2"
				color="primary"
			>
				<img src={logo} alt="logo" width={"60px"} />
			</Typography>
		</footer>
	);
};

export default Footer;
