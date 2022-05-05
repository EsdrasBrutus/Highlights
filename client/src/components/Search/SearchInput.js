import React from "react";
import ChipInput from "material-ui-chip-input";
import {
	AppBar,
	TextField,
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from "@material-ui/core";
import useStyles from "./styles";

const SearchInput = ({ searchBy, setSearchBy, searchPost }) => {
    const classes = useStyles();
	return (
		<>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">
					Search Type
				</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={searchBy}
					onChange={(e) => {
						setSearchBy(e.target.value);
					}}
					label={searchBy}
				>
					<MenuItem value="Title">Title</MenuItem>
					<MenuItem value="Tags">Tags</MenuItem>
				</Select>
			</FormControl>
			<Button onClick={searchPost} className={classes.searchButton}>
				Search
			</Button>
		</>
	);
};

export default SearchInput;
