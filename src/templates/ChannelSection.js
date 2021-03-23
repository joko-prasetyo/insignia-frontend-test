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

export default function ChannelSection() {
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
        <Typography variant="h3">Channels</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button>Browse all channels</Button>
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
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/201/201"
                    title=""
                    subtitle="Google"
                  />
                </Grid>
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/202/202"
                    title=""
                    subtitle="Dribble"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/203/203"
                    title=""
                    subtitle="Microsoft"
                  />
                </Grid>
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/204/204"
                    title=""
                    subtitle="Behance"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/205/205"
                    author=""
                    subtitle="Weather Channel"
                  />
                </Grid>
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/206/206"
                    author=""
                    subtitle="Gurus"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/207/207"
                    author=""
                    subtitle="iMedia"
                  />
                </Grid>
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/208/208"
                    author=""
                    subtitle="Creativeye"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/209/209"
                    author=""
                    subtitle="Khan Studios"
                  />
                </Grid>
                <Grid xs={6}>
                  <Card
                    src="https://unsplash.it/210/210"
                    author=""
                    subtitle="Yahoo"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
