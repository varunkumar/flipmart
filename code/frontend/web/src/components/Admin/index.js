import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import products from '../Data';

const ADD_PRODUCT = gql`
  mutation addProduct($product: productInput) {
    upsertProduct(product: $product) {
      name
      id
    }
  }
`;

class Admin extends Component {
  render() {
    return (
      <Fragment>
        {products.map(product => {
          return <Mutation mutation={ADD_PRODUCT} variables={{ product: product }} key={product.name}>
            {(addProduct) => {
              return <div><a onClick={addProduct}>Load {product.name}</a><br /></div>;
            }}
          </Mutation>;
        })}
      </Fragment>
    );
  }
}

export default Admin;
