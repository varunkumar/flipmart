//Dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
//Internals
import './index.css';

class CartProducts extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h1>This is the cart</h1>
        <div className="items">
          {this.props.cartProducts.map((product) => {
            return (<h1>{product.name}</h1>);
          })}
        </div>
      </div>
    );
  }
}

export default CartProducts;
