import { gql } from 'apollo-boost';

export const receipsQuery = gql`
  query receipsQuery {
    recipes{
      id,
      name,
      description,
      dateCreated
    }
  }
`;
