import React from "react";
import useStyles from "./styles";

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<div>
				<h1>Footer</h1>
			</div>
		</footer>
	);
};

export default Footer;
