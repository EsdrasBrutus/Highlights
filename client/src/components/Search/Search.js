import React, { useState } from "react";
import {
	AppBar,
	TextField,
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import useStyles from "./styles";

import ChipInput from "material-ui-chip-input";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const Search = () => {
	const [search, setSearch] = useState("");
	const [searchBy, setSearchBy] = useState("Title");
	const [tags, setTags] = useState([]);
	const navigate = useNavigate();
	const query = useQuery();
	const searchQuery = query.get("search") || "";

	const handleKeyPress = (e) => {
		if (e.keyCode === 13) {
			//search post
		}
	};
	const handleAddChip = (tag) => setTags([...tags, tag]);

	const handleDeleteChip = (chipToDelete) =>
		setTags(tags.filter((tag) => tag !== chipToDelete));

	const classes = useStyles();
	return (
		<>
			<AppBar
				className={classes.appBarSearch}
				position="static"
				color="inherit"
			>
				{searchBy === "Tags" ? (
					<ChipInput
						className={classes.search}
						onAdd={(chip) => handleAddChip(chip)}
						onDelete={(chip) => handleDeleteChip(chip)}
						label="Search Tags"
						variant="outlined"
						InputProps={{
							endAdornment: (
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
							),
						}}
					/>
				) : (
					<TextField
						name="search"
						className={classes.search}
						label="Search Title"
						variant="outlined"
						value={search}
						onChange={() => {}}
						//onKeyPress={handleKeyPress}
						InputProps={{
							endAdornment: (
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
							),
						}}
					/>
				)}
			</AppBar>
		</>
	);
};

export default Search;
