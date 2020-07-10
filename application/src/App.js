import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import RecipeList from "./containers/RecipeList";

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RecipeList />
      </ApolloProvider>
    );
  }
}

export default App;
