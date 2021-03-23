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

export default function DocumentSection() {
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
        <Typography variant="h3">Documents</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button style={{ width: "100%" }}>Browse all documents</Button>
      </Grid>
      <Grid item xs={12}>
        <Grid spacing={2} className={classes.container} container>
          <Grid xs={8} item>
            <Card
              title="Mobile UI & UX Guide 2013"
              src="https://unsplash.it/209/209"
              subtitle="By William M"
            />
          </Grid>
          <Grid xs={4} item>
            <Grid
              spacing={0}
              direction="column"
              className={classes.container}
              container
            >
              <Grid
                spacing={0}
                direction="column"
                className={classes.container}
                container
              >
                <Grid xs={12} className={classes.item} item>
                  <Card
                    title="React.js course"
                    src="https://unsplash.it/201/201"
                    subtitle="17368 views"
                  />
                </Grid>
                <Grid
                  xs={12}
                  className={classes.item}
                  item
                  style={{ marginTop: "6%" }}
                >
                  <Card
                    title="Be an adult"
                    src="https://unsplash.it/202/202"
                    subtitle="17348 views"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={4} item>
            <Card
              title="Marketing trends"
              src="https://unsplash.it/219/219"
              subtitle="1738 views"
            />
          </Grid>
          <Grid xs={4} item>
            <Card
              title="Marketing trends"
              src="https://unsplash.it/220/220"
              subtitle="17248 views"
            />
          </Grid>
          <Grid xs={4} item>
            <Card
              title="Marketing trends"
              src="https://unsplash.it/221/221"
              subtitle="17438 views"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
