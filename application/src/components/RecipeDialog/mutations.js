import { gql } from 'apollo-boost';

export const deleteRecipeMutation = gql`
  mutation deleteRecipe($id: ID) {
    deleteRecipe(id: $id) {
      id
    }
  }
`;
