import { gql } from 'apollo-boost';

export const addRecipeMutation = gql`
  mutation addRecipe($name: String!, $description: String!) {
    addRecipe(name: $name, description: $description) {
      name
    }
  }
`;