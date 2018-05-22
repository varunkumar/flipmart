//Dependencies
import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import PRODUCTS from '../Data';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import './index.css';
import { ADD_TO_CART } from '../ProductList/AllProducts';

export const FETCH_PRODUCT_BY_ID = gql`
  query fetchProductById($id: String) {
    product(id: $id) {
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

class ProductDetail extends Component {
  render() {
    const id = this.props.match.params.id;
    return <Query query={FETCH_PRODUCT_BY_ID} variables={{ id }}>
      {({ loading, error, data, client }) => {
        if (loading) return 'Loading...';
        if (error) return error.toString();

        const product = data.product;
        const currentProduct = product;
        return (
          <div className="show-product">
            <div className="item-wrapper">
              <div className="item-image">
                <img className="product-image" src={currentProduct.imageUrl} alt={currentProduct.name} title={currentProduct.name} />
              </div>
              <div className="item-name">
                <div className="product-info">
                  <h3 id="product-name">{currentProduct.name}</h3>
                </div>
                <div className="product-bio">
                  <p id="product-description">{currentProduct.description}</p>
                  <p id="product-price">${currentProduct.price}</p>
                  <Mutation mutation={ADD_TO_CART} variables={{ id: currentProduct.id }}>
                    {addToCart => (
                      !currentProduct.inCart && <div onClick={addToCart}><Icon small id="add-icon">add_shopping_cart</Icon></div>
                    )}
                  </Mutation>
                </div>
                <div className="product-review">
                  <div className="stars">
                    <Icon small id="add-icon">star</Icon>
                    <Icon small id="add-icon">star</Icon>
                    <Icon small id="add-icon">star</Icon>
                    <Icon small id="add-icon">star</Icon>
                    <Icon small id="add-icon">star_half</Icon>
                  </div>
                </div>
              </div>
            </div>
            <div className="similar-products">
              <h5>You might also like</h5>
              {PRODUCTS.map((product) => {
                if (
                  product.gender === currentProduct.gender
                  && product.type === currentProduct.type
                  && product.name !== currentProduct.name) {
                  return (
                    <Link to={`/products/${product.id}`} key={product.id} >
                      <div key={product.id} className="item">
                        <Link to={`/products/${product.id}`}>
                          <div className="product-img">
                            <img alt={product.name} src={product.imageUrl} />
                          </div>
                          <div className="product-details">
                            <div id="product-name">{product.name}</div>
                            <div id="product-description">{product.description}</div>
                          </div>
                        </Link>
                        <div className="price-add">
                          <h5 id="product-price">₹{product.price}</h5>
                          {!product.inCart && <Icon small id="add-icon">add_shopping_cart</Icon>}
                        </div>
                      </div>
                    </Link>
                  )
                }
                return undefined;
              })}
            </div>
          </div>
        );
      }}
    </Query>;
  }
}

export default ProductDetail;
