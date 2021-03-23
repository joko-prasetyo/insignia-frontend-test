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
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  button: {
    width: "100%"
  }
}));

export default function VideoSection() {
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
        <Typography variant="h3">Videos</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button className={classes.button}>
          Browse all videos
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid spacing={2} className={classes.container} container>
          <Grid xs={8} item>
            <Card
              title="How to improve your skills"
              src="https://unsplash.it/400/400"
              subtitle="Joko Prasetyo"
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
                <Card src="https://unsplash.it/401/401" subtitle="Michael K" />
              </Grid>
              <Grid
                xs={12}
                className={classes.item}
                item
                style={{ marginTop: "6%" }}
              >
                <Card
                  src="https://unsplash.it/408/408"
                  subtitle="Ahmed Yasin"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={4} item>
            <Card src="https://unsplash.it/404/404" subtitle="John Stainor" />
          </Grid>
          <Grid xs={4} item>
            <Card src="https://unsplash.it/405/405" subtitle="Tommy Lohil" />
          </Grid>
          <Grid xs={4} item>
            <Card src="https://unsplash.it/406/406" subtitle="John Doe" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
