import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";
import ActivityCard from "./ActivityCard";

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
  first: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 500,
  },
  parentPaper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1600,
  },
  standalone: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 150,
  },
  paperTop: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 30,
  },
  activityPaperItems: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 40,
  },
}));

export default function ActivitySection() {
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
        <Typography variant="h3">Activity</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button style={{ width: "100%" }}>
          View timeline/Filter activities
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid style={{ height: "100%" }}>
          <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <ActivityCard />
            </Grid>
            <Grid item xs={12}>
              <ActivityCard />
            </Grid>
            <Grid item xs={12}>
              <ActivityCard />
            </Grid>
            <Grid item xs={12}>
              <ActivityCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
