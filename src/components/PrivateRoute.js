import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

export default ({ component: Component, ...rest }) => {
	const currentUser = useSelector(state => state.currentUser);

	return (
		<Route exact {...rest} render={(props) => (
			(currentUser.name) ? (
				<div>
					<Component {...props}/>
				</div>
			) : (
				<Redirect to='/login' />
			)
		)}/>
	)
};