import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { AppRegistry, View } from "react-native-web";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { defaults, resolvers } from "./state/local-state-resolvers";
import Detail from "./views/Detail";
import Feed from "./views/Feed";
import Likes from "./views/Likes";

const client = new ApolloClient({
  uri: "https://graphql-backend.glitch.me/graphql",
  clientState: {
    defaults,
    resolvers
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <View>
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/likes" exact component={Likes} />
          <Route path="/:breed/:id" component={Detail} />
        </Switch>
      </View>
    </Router>
  </ApolloProvider>
);

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
