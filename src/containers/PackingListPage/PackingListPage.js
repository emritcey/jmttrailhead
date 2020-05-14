import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { createStyles, makeStyles } from '@material-ui/core/styles';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { buildPackingList } from "../../store/PackingList/actions";

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

  const fetchPackingList = async() => {
      const response = await fetch('/packing_list');
      const body = await response.json();
      return body;
  };

  useEffect(() => {
    fetchPackingList().then(body => {
      console.log(body.data);
      dispatch(buildPackingList(body.data));
    })
    .catch((err) => {
      throw new Error(err);
    });
  }, [dispatch]);

  return (
    <Container>
        <main>
          <Link to="/">Home</Link>
          <List className={classes.root}>
              {Object.keys(packingList).map((category, index) => {
                  return (
                    <section key={index}>
                      <ListItem className={classes.category} dense button>
                        <ListItemText primary={`${category}`} />
                      </ListItem>
                      {packingList[category].map((item) => {
                        return (
                          <ListItem className={classes.listItem} key={item.id} dense button>
                            <ListItemIcon>
                              <Checkbox color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={`${item.name}`} />
                          </ListItem>
                        );
                      })}
                    </section>
                  );
              })}
          </List>
        </main>

    </Container>
  );
};
