import React, { useState } from "react";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Container,
	Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";

import useStyles from "./styles";

import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../state/actions/userActions";

const Auth = () => {
	const initialState = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const classes = useStyles();

	const [showPassword, setShowPassword] = useState(false);
	const [isSignUp, setIsSignUp] = useState(false);
	const [formData, setFormData] = useState(initialState);
	const [error, setError] = useState(''); 

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignUp) {
			dispatch(signUp(formData, navigate));
		} else {
			dispatch(signIn(formData, navigate));
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const switchMode = () => {
		setIsSignUp((prev) => !prev);
	};

	const handleClickShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const googleSuccess = async (response) => {
		const result = response?.profileObj;
		const token = response?.tokenId;

		try {
			dispatch({ type: "AUTH", data: { result, token } });

			navigate("/");
		} catch (err) {
			setError(err.message);
		}
	};
	const googleFailure = (response) => {
		setError(response.error);
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
						{error && (
							<Grid item xs={12}>
								<Typography color="error">{error}</Typography>
							</Grid>
						)}
						{isSignUp && (
							<>
								<Input
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								/>

								<Input
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						/>
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? "text" : "password"}
							handleClickShowPassword={handleClickShowPassword}
						/>
						{isSignUp && (
							<Input
								name="confirmPassword"
								label="Confirm Password"
								handleChange={handleChange}
								type="password"
								handleClickShowPassword={handleClickShowPassword}
							/>
						)}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{isSignUp ? "Sign up" : "Login"}
					</Button>
					<GoogleLogin
						clientId="178778443553-u1c9uffri885qcdmfa463k08o9smg7kh.apps.googleusercontent.com"
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color="primary"
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								fullWidth
								variant="contained"
							>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
									alt="google logo"
								/>
								{isSignUp ? "Sign up with Google" : "Login with Google"}
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy="single_host_origin"
					/>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignUp
									? "Already have an account? Login"
									: "Don't have an account? Sign Up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
