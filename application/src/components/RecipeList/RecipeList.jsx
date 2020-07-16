import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import RecipeCard from "../RecipeCard/RecipeCard";
import SortingSelect from "../SortingSelect/SortingSelect";
import withHocs from "./RecipeListHoc";

function RecipeList(props) {
  const { data = {}, classes, onOpen } = props;
  const { recipes = [] } = data;

  return (
    <Container className={classes.cardGrid} maxWidth='md'>
      {/* <SortingSelect /> */}
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            data={recipe}
            onOpen={onOpen}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default withHocs(RecipeList);
