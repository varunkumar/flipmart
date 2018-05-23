import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

export const FETCH_ALL_PRODUCTS = gql`
  {
    allProducts {
      id
      name
      description
      category {
        id
        name
      }
      gender
      price
      imageUrl
      inCart @client
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation addToCart($id: String) {
    addToCart(id: $id) @client
  }
`;

const AllProducts = (props) => (
  <div className="items">
    <Query query={FETCH_ALL_PRODUCTS} >
      {({ loading, error, data, client }) => {
        if (loading) return 'Loading...';
        if (error) return error.toString();
        return data.allProducts.map((product) => {
          if (props.category === 'all' || (product.category && product.category.name === props.category)) {
            if (props.gender === 'all' || product.gender === props.gender) {
              return <div key={product.id} className="item">
                <Link to={`/products/${product.id}`}>
                  <div className="product-img">
                    <img alt={product.name} src={product.imageUrl} title={product.name} />
                  </div>
                  <div className="product-details">
                    <h1 id="product-name">{product.name}</h1>
                    <h4 id="product-description">{product.description}</h4>
                  </div>
                </Link>
                <Mutation mutation={ADD_TO_CART} variables={{ id: product.id }}>
                  {addToCart => (
                    <div className="price-add">
                      <h5 id="product-price">₹{product.price}</h5>
                      {!product.inCart && <div onClick={addToCart}><Icon small id="add-icon">add_shopping_cart</Icon></div>}
                    </div>
                  )}
                </Mutation>
              </div>;
            }
          }
          return undefined;
        })
      }}
    </Query>
  </div>
)

export default AllProducts;
