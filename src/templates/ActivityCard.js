import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    width: "100%",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function ActivityCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid xs={3} item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid xs={9} container direction="column" wrap="nowrap">
            <Grid item xs zeroMinWidth>
              <Typography noWrap variant="h5" component="h5">
                John Strainor
              </Typography>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{message}</Typography>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>2 seconds</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
