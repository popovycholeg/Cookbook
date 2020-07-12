import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import withHocs from "./AddButtonHoc";

function AddButton(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Fab
        onClick={() => props.onClick()}
        color='primary'
        aria-label='Add'
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
}

export default withHocs(AddButton);
