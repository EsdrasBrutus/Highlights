import React, {useEffect} from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../state/actions/postActions";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Paginate = ({ page }) => {
	const dispatch = useDispatch();
	const { totalPages } = useSelector((state) => state.posts);
	
	useEffect(() => {
		if (page) {
			dispatch(getPosts(page));
		}
	}, [page]);

	const classes = useStyles();
	return (
		<Pagination
			className={classes.ul}
			count={totalPages}
			page={Number(page) || 1}
			variant="outlined"
			color="primary"
			renderItem={(item) => <PaginationItem {...item} component = {Link} to={`/posts?page=${item.page}`} />}
		/>
	);
};

export default Paginate;
