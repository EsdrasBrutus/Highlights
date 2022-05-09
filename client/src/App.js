import React from "react";
import { Container } from "@material-ui/core";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
	const user = JSON.parse(localStorage.getItem("profile"));

	return (
		<div className="page-container">
			<div className="content-wrap">
				<Router>
					<Container maxWidth="xl" style={{ padding: 0, minHeight: "100vh", display: "flex", flexDirection:"column" }}>
						<Navbar />
						<Routes>
							<Route
								path="/"
								exact
								element={<Navigate replace to="/posts" />}
							/>
							<Route path="/posts" element={<Home />} />
							<Route path="/posts/search" element={<Home />} />
							<Route path="/posts/:id" element={<PostDetails />} />
							{user ? (
								<Route
									path="/auth"
									element={<Navigate replace to="/posts" />}
								/>
							) : (
								<Route path="/auth" element={<Auth />} />
							)}
						</Routes>
						<Footer />
					</Container>
				</Router>
			</div>
		</div>
	);
};

export default App;
