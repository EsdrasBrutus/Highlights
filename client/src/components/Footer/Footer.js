import React from "react";
import useStyles from "./styles";
import logo from "../../images/logo.png";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	return (
		<footer className={classes.footer}>
			<Typography
				variant="h2"
				color="primary"
			>
				<img src={logo} alt="logo" width={"60px"} onClick={()=> {navigate("/")} }/>
			</Typography>
		</footer>
	);
};

export default Footer;
