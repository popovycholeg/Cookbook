import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Recipes from "./containers/Recipes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

const client = new ApolloClient({
  uri: "http://localhost:3005/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CssBaseline />
        <NavBar />
        <Recipes />
        <Footer />
      </ApolloProvider>
    );
  }
}

export default App;
