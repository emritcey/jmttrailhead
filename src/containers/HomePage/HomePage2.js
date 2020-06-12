import React from "react";
import thousand from '../../assets/images/thousand.jpg';
import {createStyles, makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			minHeight: '100vh',
			display: 'flex',
		},
		mainHeader: {
			textAlign: 'center',
			color: "#204473",
		},
		mainImage: {
			width: '100%',
		},
	}),
);
export default () => {
	const classes = useStyles();

	return (
		<main>
			{/*<h1 className={classes.mainHeader}>*/}
			{/*	Start the JMT Here!*/}
			{/*</h1>*/}
			<div>
				<figure>
					<img className={classes.mainImage} src={thousand} alt="lake"/>
				</figure>
			</div>
		</main>
	);
}
