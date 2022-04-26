import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useStyles from "./styles";
import logo from "../../images/logo.png";
import { useDispatch } from "react-redux";

const Navbar = () => {
	const classes = useStyles();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/");
		setUser(null);
	}

	useEffect(() => {
		const token = user?.token;
		setUser(JSON.parse(localStorage.getItem("profile")));

	}, [location]);
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
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.avatar}
							alt={user.result.name}
							src={user.result.avatar}
						>
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography
							className={classes.userName}
							variant="h6"
							color="inherit"
						>
							{user.result.name}
						</Typography>
						<Button
							className={classes.button}
							variant="contained"
							color="secondary"
							onClick={logout}
						>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to="/auth"
						className={classes.button}
						variant={"contained"}
						color="primary"
					>
						Login
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
