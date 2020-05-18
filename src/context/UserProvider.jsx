import React, { useEffect, createContext } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../src/store/Auth/actions";
const context = createContext(null);

export default (({ children }) => {
	const dispatch = useDispatch();

	const fetchUser = async () => {
		const response = await fetch("/user");
		const body = await response.json();
		return body;
	};

	useEffect (() => {
		fetchUser().then(user => {
			dispatch(setCurrentUser(user));
		}).catch((err) => {
			console.log(err);
		});
	}, [dispatch]);

	return ( 
		<context.Provider>
			{children}
		</context.Provider>
	);
});
