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
import SearchInput from "./SearchInput";

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
	const classes = useStyles();

	const handleAddChip = (tag) => setTags([...tags, tag]);

	const handleDeleteChip = (chipToDelete) =>
		setTags(tags.filter((tag) => tag !== chipToDelete));

	const searchPost = () => {
		if (search.trim()) {
			//dispatch -> search post
		}
		else {
			navigate("/");
		}
	};
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			//search post
			searchPost();
		}
	};
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
								<>
									<SearchInput
										searchPost={searchPost}
										setSearchBy={setSearchBy}
										searchBy={searchBy}
									/>
								</>
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
						onKeyPress={handleKeyPress}
						InputProps={{
							endAdornment: (
								<>
									<SearchInput
										searchPost={searchPost}
										setSearchBy={setSearchBy}
										searchBy={searchBy}
									/>
								</>
							),
						}}
					/>
				)}
			</AppBar>
		</>
	);
};

export default Search;
