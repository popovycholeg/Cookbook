import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RecipeList from '../components/RecipeList/RecipeList';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main> 
        {/* Hero unit */}
        {/* End hero unit */}
        <Container className={ classes.cardGrid } maxWidth="md">
          <RecipeList />
        </Container>
      </main>
    </React.Fragment>
  );
}
