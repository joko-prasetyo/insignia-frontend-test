import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5em",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  box: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: "100%",
  },
  innerContainer: {
    height: "100%",
  },
  item: {
    flex: 1,
  },
}));

export default function PeopleSection() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      <Grid item xs={6}>
        <Typography variant="h3">People</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button style={{width: "100%"}}>See all people</Button>
      </Grid>
      <Grid item xs={12}>
        <Grid spacing={2} className={classes.container} container>
          <Grid xs={8} item>
            <Card
              title="Washeem Arshad"
              src="https://unsplash.it/200/200"
              subtitle="User interface designer"
            />
          </Grid>
          <Grid xs={4} item>
            <Grid
              spacing={0}
              direction="column"
              className={classes.container}
              container
            >
              <Grid xs={12} className={classes.item} item>
                <Card title="Michael K" src="https://unsplash.it/201/201" />
              </Grid>
              <Grid
                xs={12}
                className={classes.item}
                item
                style={{ marginTop: "6%" }}
              >
                <Card title="Ahmed Yasin" src="https://unsplash.it/202/202" />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={4} item>
            <Card title="John Stainor" src="https://unsplash.it/203/203" />
          </Grid>
          <Grid xs={4} item>
            <Card title="John Doe" src="https://unsplash.it/204/204" />
          </Grid>
          <Grid xs={4} item>
            <Card title="Ahmed Yasin" src="https://unsplash.it/207/207" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
