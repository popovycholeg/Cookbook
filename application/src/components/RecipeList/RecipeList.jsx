import React from "react";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "../RecipeCard/RecipeCard";
import withHocs from "./RecipeListHoc";

function RecipeList(props) {
  const { data = {} } = props;
  const { recipes = [] } = data;

  return (
    <Grid container spacing={4}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.name}
          description={recipe.description}
        />
      ))}
    </Grid>
  );
}

export default withHocs(RecipeList);
