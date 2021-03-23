import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  box: {
    height: "100%",
    width: "100%",
  },
  container: {
    height: "400px",
  },
  innerContainer: {
    height: "100%",
  },
  item: {
    flex: 1,
  },
});

export default function TestGrid() {
  const classes = useStyles();
  return (
    <Grid spacing={4} className={classes.container} container>
      <Grid xs={8} item>
        <Box className={classes.box} bgcolor="green" />
      </Grid>
      <Grid xs={4} item>
        <Grid
          spacing={4}
          direction="column"
          className={classes.container}
          container
        >
          <Grid className={classes.item} item>
            <Box className={classes.box} bgcolor="blue" />
          </Grid>
          <Grid className={classes.item} item>
            <Box className={classes.box} bgcolor="red" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
