import React from "react";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Container,
	Typography,
	TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "./styles";

const Auth = () => {
	const classes = useStyles();

	const isSignUp = false;
	const handleSubmit = (e) => {
		e.preventDefault();
    };
    const handleChange = (e) => {
        
    };

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignUp ? "Sign up" : "Login"}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignUp && (
							<>
								<TextField
									name="firstName"
									label="First Name"
                                    handeChange={handleChange}
                                    autoFocus
                                    xs={6}
                                />
                                <TextField
                                    name="lastName"
                                    label="Last Name"
                                    handeChange={handleChange}
                                    xs={6}
                                />
							</>
						)}
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
