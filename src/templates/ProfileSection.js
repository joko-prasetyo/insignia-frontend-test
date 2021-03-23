import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import UserIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "rows",
  },
  badge: {
    cursor: "pointer",
    padding: 5
  },
}));

export default function ProfileSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Badge className={classes.badge} color="secondary">
          <UserIcon />
        </Badge>
        <Badge className={classes.badge} color="secondary" variant="dot">
          <Typography>Joko Prasetyo</Typography>
        </Badge>
      </div>
    </div>
  );
}
