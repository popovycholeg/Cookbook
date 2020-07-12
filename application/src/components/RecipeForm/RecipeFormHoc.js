import { withStyles } from '@material-ui/core/styles';
import { graphql } from "react-apollo";
import { compose } from 'recompose';

import { styles } from './styles';
import { addRecipeMutation, updateRecipeMutation } from './mutations';
import { receipsQuery } from '../RecipeList/queries';

const withGraphqlAdd = graphql(addRecipeMutation, {
  props: ({ mutate }) => ({
    addRecipe: recipe => mutate({
      variables: recipe,
      refetchQueries: [{ query: receipsQuery }],
    }),
  }),
});

const withGraphqlUpdate = graphql(updateRecipeMutation, {
  props: ({ mutate }) => ({
    updateRecipe: recipe => mutate({
      variables: recipe,
      refetchQueries: [{ query: receipsQuery }],
    }),
  }),
});

export default compose(withStyles(styles), withGraphqlAdd, withGraphqlUpdate);