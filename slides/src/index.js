import React from "react";
import ReactDOM from "react-dom";
import Presentation from "./presentation";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Presentation />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
