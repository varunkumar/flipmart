import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import Admin from './components/Admin';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { defaults, resolvers } from "./state/resolvers";

const client = new ApolloClient({
  uri: "/graphql",
  clientState: {
    defaults,
    resolvers
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Cart} />
          <Route path="/women" render={() => <ProductList gender="women" />} />
          <Route path="/men" render={() => <ProductList gender="men" />} />
          <Route path="/clothes" render={() => <ProductList category="clothes" />} />
          <Route path="/accessories" render={() => <ProductList category="accessories" />} />
          <Route path="/electronics" render={() => <ProductList category="electronics" />} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route path="/orders" component={OrderList} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </ApolloProvider>

  , document.getElementById('root'));
registerServiceWorker();
