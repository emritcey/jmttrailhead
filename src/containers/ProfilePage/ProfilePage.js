import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {createStyles, makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import LogoutButtonComponent from "../../components/LogoutButtonComponent";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() =>
	createStyles({
		card: {
			minWidth: '50%',
			margin: 'auto',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: '3%',
		},
		avatar: {
			borderRadius: '100%',
			backgroundColor: '#94B0DA',
			height: '200px',
			width: '200px',
		},
		tripDetails: {
			display: 'flex',
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-around',
			flexWrap: 'wrap',
		},
		detailSphere: {
			borderRadius: '100%',
			backgroundColor: '#DCEDFF',
			height: '150px',
			width: '150px',
			margin: '5%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			'& > span:first-child': {
				fontWeight: 'bold',
				textTransform: 'uppercase',
			}
		}
	}),
);

export default () => {
	const classes = useStyles();
	const currentUser = useSelector(state => state.currentUser);

	return (
		<Container>
			<header>
				<Link to="/">Home</Link>
				<LogoutButtonComponent />
			</header>
			<Card className={classes.card}>
				<div className={classes.avatar}></div>
				<h1>{currentUser.name || 'Emma Ritcey'}</h1>
				<article className={classes.tripDetails}>
					<section className={classes.detailSphere}>
						<span>Hike Length</span>
						<span>{currentUser.hike_length || '21'} days</span>
					</section>
					<section className={classes.detailSphere}>
						<span>Start Date</span>
						<span>{currentUser.start_date || 'July 25, 2020'}</span>
					</section>
					<section className={classes.detailSphere}>
						<span>Direction</span>
						<span>{currentUser.direction || 'Southbound'}</span>
					</section>
				</article>
			</Card>
		</Container>
	);
};
