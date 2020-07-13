import React from "react";

import RecipeList from "../components/RecipeList/RecipeList";
import AddButton from "../components/AddButton/AddButton";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import HeroContent from "../components/HeroContent/HeroContent";

export default class Recipes extends React.Component {
  state = {
    open: false,
    id: null,
    name: null,
    description: null
  };

  handleClickOpen = (data = {}) => {
    this.setState({
      open: true,
      ...data,
    });
  };

  handleClose = () => {
    this.setState({
      name: "",
      description: "",
      open: false,
    });
  };

  handleChange = (name) => ({ target }) => {
    this.setState({ [name]: target.value });
  };

  render() {
    const { open, id, name, description } = this.state;
    return (
      <React.Fragment>
        <main>
          {/* <HeroContent /> */}
          {/* TODO: pagination & sorting & search */}
          <RecipeForm
            open={open}
            onClose={this.handleClose}
            handleChange={this.handleChange}
            selectedValue={{ id, name, description }}
          />
          <RecipeList onOpen={this.handleClickOpen} />
          <AddButton onClick={this.handleClickOpen} />
        </main>
      </React.Fragment>
    );
  }
}
