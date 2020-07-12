import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import RecipeList from "../components/RecipeList/RecipeList";
import AddButton from "../components/AddButton/AddButton";
import RecipeForm from "../components/RecipeForm/RecipeForm";

export default class Recipes extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = (data = {}) => {
    this.setState({
      open: true,
      ...data
    });
  };

  handleClose = () => {
    this.setState({
      name: '',
      description: '',
      open: false
    });
  };

  handleChange = name => ({ target }) => { this.setState({ [name]: target.value }); };

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <main>
          {/* Hero unit */}
          {/* End hero unit */}
          <RecipeForm open={open} onClose={this.handleClose} handleChange={this.handleChange} />
          <RecipeList />
          <AddButton onClick={this.handleClickOpen} />
        </main>
      </React.Fragment>
    );
  }
}
