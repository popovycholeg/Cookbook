import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import RecipeCard from "../RecipeCard/RecipeCard";
import withHocs from "./RecipeListHoc";

function RecipeList(props) {
  const { data = {}, classes } = props;
  const { recipes = [] } = data;

  return (
    <Container className={classes.cardGrid} maxWidth='md'>
    <Grid container spacing={4}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          description={recipe.description}
        />
      ))}
    </Grid>
    </Container>
  );
}

export default withHocs(RecipeList);
