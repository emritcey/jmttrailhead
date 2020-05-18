import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import LogoutButtonComponent from "../../components/LogoutButtonComponent";

export default () => {
	const currentUser = useSelector(state => state.currentUser);

	return (
		<Container>
			<header>
				<Link to="/">Home</Link>
				<LogoutButtonComponent />
			</header>
			<h1>Hi, {currentUser.name}</h1>
		</Container>
	);
};
