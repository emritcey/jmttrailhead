import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createStyles, makeStyles } from '@material-ui/core/styles';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { buildPackingList } from "../../../store/PackingList/actions";
import theme from '../../../assets/theme';

// const theme = createMuiTheme({
// 	overrides: {
// 		MuiCheckbox: {
// 			colorSecondary: {
// 				color: 'purple',
// 				'&$checked': {
// 					color: 'green',
// 				},
// 			},
// 		},
// 	},
// });
const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: '100%',
		},
		category: {
			backgroundColor: 'lightgray',
		},
		listItem: {
			borderBottom: '1px solid lightgray',
		},
	}),
);

export default () => {
	const packingList = useSelector(state => state.packingList);
	const dispatch = useDispatch();

	const classes = useStyles();

	const [checked, setChecked] = useState([0]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	const fetchPackingList = async() => {
		const response = await fetch('/packing_list');
		const body = await response.json();
		return body;
	};

	useEffect(() => {
		fetchPackingList().then(body => {
			dispatch(buildPackingList(body.data));
		})
			.catch((err) => {
				console.log(err);
			});
	}, [dispatch]);

	return (
		<List className={classes.root} theme={theme}>
			{Object.keys(packingList).map((category, index) => {
				return (
					<section key={index}>
						<ListItem className={classes.category} dense button>
							<ListItemText primary={`${category}`} />
						</ListItem>
						{packingList[category].map((item) => {
							return (
								<ListItem className={classes.listItem} key={item.id} dense button onClick={handleToggle(item.id)}>
									<ListItemIcon>
										<Checkbox
											className="check-box"
											iconStyle={{fill: "#609BBF"}}
											checked={checked.indexOf(item.id) !== -1} />
									</ListItemIcon>
									<ListItemText primary={item.name}
																secondary={item.note} />

								</ListItem>
							);
						})}
					</section>
				);
			})}
		</List>
	);
}
