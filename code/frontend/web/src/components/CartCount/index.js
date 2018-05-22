import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { FETCH_PRODUCTS_IN_CART } from '../Cart';

class CartCount extends Component {
  render() {
    return <Query query={FETCH_PRODUCTS_IN_CART}>
      {({ loading, error, data }) => {
        const productsInCart = data.productsInCart || [];
        if (productsInCart.length > 0) {
          return <div className="cart-items-count">{productsInCart.length}</div>;
        }
        return null;
      }}
    </Query>;
  }
}

export default CartCount;
