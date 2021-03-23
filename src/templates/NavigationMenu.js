import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5em",
    flexGrow: 1,
  },
  menu: {
    margin: theme.spacing(2),
  },
  chip: {
    cursor: "pointer",
    margin: theme.spacing(1.5),
    padding: 20,
    fontSize: 20,
  },
}));
function NavigationMenu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.menu}>
        <div>
          <Chip className={classes.chip} color="primary" label="Videos" />
          <Chip className={classes.chip} label="People" />
          <Chip className={classes.chip} label="Documents" />
          <Chip className={classes.chip} label="Events" />
          <Chip className={classes.chip} label="Communities" />
          <Chip className={classes.chip} label="Favorites" />
          <Chip className={classes.chip} label="Channels" />
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
