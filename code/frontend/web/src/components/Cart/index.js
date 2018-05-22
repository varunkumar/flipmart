import React, { Component, Fragment } from 'react';
import './index.css';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { FETCH_PRODUCT_BY_ID } from '../ProductDetail'
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';

export const IS_PRODUCT_IN_CART = gql`
  query isProductInCart($id: String) {
    isProductInCart(id: $id) @client
  }
`;

export const FETCH_PRODUCTS_IN_CART = gql`
  {
    productsInCart @client {
      id
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation removeFromCart($id: String) {
    removeFromCart(id: $id) @client
  }
`;

export const COMPUTE_TOTAL = gql`
  query computeTotal {
    computeTotal @client
  }
`

class CartProducts extends Component {
  computeTotal = (products = []) => products.reduce((total, product) => total + (product.price || 0), 0)

  renderProduct = (item) => {
    return <div key={item.id} className="item">
      <Link to={`/products/${item.id}`}>
        <div className="product-img">
          <img alt={item.name} src={item.imageUrl} title={item.name} />
        </div>
        <div className="product-details">
          <h1 id="product-name">{item.name}</h1>
          <h4 id="product-description">{item.description}</h4>
        </div>
      </Link>

      { // Example for refetch queries }
      }
      <Mutation mutation={REMOVE_FROM_CART} variables={{ id: item.id }} refetchQueries={["computeTotal"]}>
        {removeFromCart => (
          <div className="price-add">
            <h5 id="product-price">₹{item.price}</h5>
            <div onClick={removeFromCart}><Icon small>remove_shopping_cart</Icon></div>
          </div>
        )}
      </Mutation>
    </div>
  }

  render() {
    return (
      <div>
        <div className="items-title">
          <h4>Cart</h4>
          {
            // Example for computed property & fetch policies
            <Query query={COMPUTE_TOTAL} displayName="Total" fetchPolicy="network-only" errorPolicy="ignore">
              {({ loading: computedTotalLoading, data: computedTotalData = {} }) => {
                if (computedTotalLoading) return 'Loading...';

                return (<div>Total: ₹{computedTotalData.computeTotal || 0}</div>);
              }}
            </Query>
          }
        </div>
        <Query query={FETCH_PRODUCTS_IN_CART}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return error.toString();

            // Example for nested query
            const productsInCart = data.productsInCart || [];
            return (
              <Fragment>
                <div className="items">
                  {productsInCart.map(product => (
                    <Query query={FETCH_PRODUCT_BY_ID} variables={{ id: product.id }} key={product.id} displayName="ProductById">
                      {({ loading: productLoading, error: productError, data: productData }) => {
                        if (productLoading) return 'Loading...';
                        if (productError) return productError.toString();

                        return this.renderProduct(productData.product);
                      }}
                    </Query>
                  ))}
                </div>
              </Fragment>
            );
          }}
        </Query>
      </div >
    );
  }
}

export default CartProducts;
