import React from 'react';
import { useDispatch } from "react-redux";
import { logoutUser } from '../store/Auth/actions';

export default () => {
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(logoutUser());
	};

	return (
		<button onClick={() => logout()}>
			LOGOUT
		</button>
	);
}
