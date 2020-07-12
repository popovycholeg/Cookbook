import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';

import withHocs from "./RecipeFormHoc";

class RecipeForm extends React.Component {
  handleSave = () => {
    const { selectedValue, onClose, addRecipe } = this.props;
    const { name, description } = selectedValue;
    addRecipe({ name, description});
    onClose();
  };

  render() {
    const { classes, open, handleChange, onClose, selectedValue = {} } = this.props;
    const { name, description, dateCreated } = selectedValue;

    return (
      <Dialog onClose={onClose} open={open} aria-labelledby="simple-dialog-title">
        <DialogTitle className={classes.title} id="simple-dialog-title">Recipe information</DialogTitle>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-description"
            label="Description"
            className={classes.textField}
            value={description}
            onChange={handleChange('description')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-dateCreated"
            value={dateCreated}
            type="date"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <div className={classes.wrapper}>
            <Button onClick={this.handleSave} variant="contained" color="primary" className={classes.button}>
              <SaveIcon /> Save
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
};

export default withHocs(RecipeForm);