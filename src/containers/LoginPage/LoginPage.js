import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { CardHeader } from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import GoogleButton from "../../components/GoogleButton";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			minHeight: '100vh',
			display: 'flex',
		},
		card: {
			margin: 'auto',
			minWidth: '80%',
		},
		header: {
			backgroundColor: '#3963ff',
			color: 'white',
			textAlign: 'center',
			textTransform: 'uppercase',
		},
		formElement: {
			display: 'block',
			width: '100%',
			margin: '4% 0',
		},
		divider: {
			margin: '1rem',

		},
		oauthSection: {
			display: 'flex',
			'flex-direction': 'column',
			'align-items': 'center',
		},
		lowerHeader: {
			color: 'rgba(0, 0, 0, 0.08)',
			fontSize: '.75rem',
			textTransform: 'uppercase',
			margin: '0',
		}
	}),
);

export default () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<header>
				<Link to="/">Home</Link>
			</header>
			<Card className={classes.card}>
				<CardHeader className={classes.header} title="Login">
				</CardHeader>
				<CardContent>
					<form noValidate autoComplete="off">
						<TextField
							id="outlined-disabled"
							label="Username"
							className={classes.formElement}
							disabled
							fullWidth
							variant="outlined" />
						<TextField
							id="outlined-disabled"
							className={classes.formElement}
							label="Password"
							type="password"
							fullWidth
							disabled
							variant="outlined"
							auto/>
						<Button
							variant="contained"
							disabled
							className={classes.formElement}
							color="primary">
							Sign In
						</Button>
					</form>
					<Divider light className={classes.divider} />
					<section className={classes.oauthSection}>
						<h2 className={classes.lowerHeader}>Or register with Google</h2>
						<GoogleButton />
					</section>
				</CardContent>
			</Card>
		</Container>
	);
};
