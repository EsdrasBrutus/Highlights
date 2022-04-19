import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({ name, half, label, type, handleChange, autoFocus, handleClickShowPassword }) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				name={name}
				label={label}
				type={type}
				onChange={handleChange}
				variant="outlined"
				required
				fullWidth
				autoFocus={autoFocus}
				InputProps={
					name === "password" && {
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
								>
									{type === "password" ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						),
					}
				}
			/>
		</Grid>
	);
};

export default Input;
