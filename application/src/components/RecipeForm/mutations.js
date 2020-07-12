import { gql } from 'apollo-boost';

export const addRecipeMutation = gql`
  mutation addRecipe($name: String!, $description: String!) {
    addRecipe(name: $name, description: $description) {
      name
    }
  }
`;

export const updateRecipeMutation = gql`
  mutation updateRecipe($id: ID!, $name: String!, $description: String!) {
    updateRecipe(id: $id, name: $name, description: $description) {
      name
    }
  }
`;