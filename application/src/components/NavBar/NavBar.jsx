import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withHocs from "./NavBarHoc";

function NavBar(props) {
  const { classes } = props;

  return (
    <AppBar position='relative'>
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant='h6' color='inherit' noWrap>
          Oleh Popovych Cookbook
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withHocs(NavBar);
