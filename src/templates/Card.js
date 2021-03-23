import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  content: {
    position: "absolute",
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    color: "#f1f1f1",
    width: "100%",
    padding: "20px",
  },
  container: {
    position: "relative",
    width: "100%",
    margin: "0 auto",
  },
}));

const VideoSection = ({ title, subtitle, src }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ height: "100%" }}
    >
      <div className={classes.container}>
        <img
          src={src}
          alt="Alt"
          className={classes.img}
        />
        <div className={classes.content}>
          {title ? <h2>{title}</h2> : ""}
          {subtitle ? <p>{subtitle}</p> : ""}
        </div>
      </div>
    </Card>
  );
};

export default VideoSection;
