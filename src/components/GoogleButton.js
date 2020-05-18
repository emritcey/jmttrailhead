import React from "react";
import googleButton from '../assets/images/googleButton.svg'

export default () => {
	return (
		<a href="/auth/google">
			<img src={googleButton} alt="Login with Google" />
		</a>
	);
}
