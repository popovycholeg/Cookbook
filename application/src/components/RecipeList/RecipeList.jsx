import React from 'react';
import Grid from '@material-ui/core/Grid';
import RecipeCard from "../RecipeCard/RecipeCard";
// import withHocs from './RecipeCardHoc';

export default function RecipeList(props) {

  return (
    <Grid container spacing={4}>
      { [1, 2, 3, 4, 5, 6].map((card) => 
        <RecipeCard 
          key={card} 
          name={'name'}
          description={'description'}
        />)
      } 
    </Grid>
  );
}

// export default withHocs(RecipeList);

