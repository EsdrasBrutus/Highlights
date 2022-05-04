import React, { useState } from "react";
import {
	AppBar,
	TextField,
	Button,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import useStyles from "./styles";

import ChipInput from "material-ui-chip-input";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const query = useQuery();
  const searchQuery = query.get("search") || "";

  const classes = useStyles();
	return (
		<>
			<AppBar
				className={classes.appBarSearch}
				position="static"
				color="inherit"
			>
				<TextField
					name="search"
					className={classes.search}
					label="Search"
					variant="outlined"
					value={search}
					onChange={() => {}}
					InputProps={{
						endAdornment: (
							<Button className={classes.searchButton} onClick={() => {}}>
								Search
							</Button>
						),
					}}
				/>
			</AppBar>
		</>
	);
};

export default Search;
