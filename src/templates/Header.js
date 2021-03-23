import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Icon } from "@material-ui/core";
import Logo from "../images/logo.png";
import FormInput from "../templates/FormInput";
import Button from "@material-ui/core/Button";
import UploadIcon from "@material-ui/icons/CloudUpload";
import ProfileSection from './ProfileSection';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    width: "100%",
    padding: 13,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={5}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "10em" }}
      >
        <Grid item xs={3}>
          <Icon>
            <img src={Logo} width="55%" alt="Logo" />
          </Icon>
        </Grid>
        <Grid item xs={5}>
          <FormInput />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<UploadIcon />}
          >
            Upload
          </Button>
        </Grid>
        <Grid item xs={2}>
          <ProfileSection />
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
