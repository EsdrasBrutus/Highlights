import React, { useState, useEffect } from "react";
import {
	AppBar,
	TextField,
	Grid,
	Button,
	InputAdornment
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { searchPosts } from "../../state/actions/postActions";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

import ChipInput from "material-ui-chip-input";


const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const Search = () => {
	const [search, setSearch] = useState("");
	const [expand, setExpand] = useState(false);
	const [tags, setTags] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const query = useQuery();
	const searchQuery = query.get("search") || "";
	const classes = useStyles();

	const handleAddChip = (tag) => {
		setTags([...tags, tag]);
	};

	const handleDeleteChip = (chipToDelete) =>
		setTags(tags.filter((tag) => tag !== chipToDelete));

	const searchPost = () => {
		if (search.trim() || tags) {
			dispatch(searchPosts({ search, tags: tags.join(",") }));
			{search === "" && tags.length === 0
				? navigate("/")
				: navigate(
						`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(
							","
						)}`
				  );}
			
		}
		else {
			navigate("/");
		}
	};
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			searchPost();
		}
	};

	return (
		<Grid item xs={12} sm={6} md={10}>
			<AppBar
				className={classes.appBarSearch}
				position="static"
				color="inherit"
			>
				<TextField
					name="search"
					className={classes.search}
					label="Search Title"
					variant="outlined"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					onKeyPress={handleKeyPress}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Button
									onClick={() => {
										setExpand(!expand);
									}}
								>
									{expand ? "Close^" : "Tags↓"}
								</Button>
							</InputAdornment>
						),
					}}
				/>
				{expand ? (
					<ChipInput
						style={{marginTop: "5px"}}
						className={classes.search}
						value={tags}
						onAdd={(chip) => handleAddChip(chip)}
						onDelete={(chip) => handleDeleteChip(chip)}
						label="Search Tags"
						variant="outlined"
					/>
				) : null}
				<Button
					onClick={searchPost}
					className={classes.searchButton}
					variant="contained"
					color="primary"
				>
					Search
				</Button>
			</AppBar>
		</Grid>
	);
};

export default Search;
