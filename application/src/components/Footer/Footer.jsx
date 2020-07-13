import React from "react";
import Typography from "@material-ui/core/Typography";
import Copyright from "../Copyrights/Copyright";
import withHocs from "./FooterHoc";

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      >
        Oleh Popovych
      </Typography>
      <Copyright />
    </footer>
  );
}

export default withHocs(Footer);
