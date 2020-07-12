import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteRecipeMutation } from './mutations';
import { receipsQuery } from '../RecipeList/queries';

const withGraphqlDelete = graphql(deleteRecipeMutation, {
  props: ({ mutate }) => ({
    deleteRecipe: id => mutate({
      variables: id,
      refetchQueries: [{ query: receipsQuery }],
    }),
  }),
});

export default compose(withGraphqlDelete);
