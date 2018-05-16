//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import PRODUCTS from '../../Data';

const AllProducts = (props) => (
  <div className="items">
    {PRODUCTS.map((product) => {
      if (props.category === "all" || product.category === props.category) {
        if (props.gender === 'all' || product.gender === props.gender) {
          return <div key={product.id} className="item">
            <Link to={`/products/${product.id}`}>
              <div className="product-img">
                <img alt={product.name} src={product.img} title={product.name} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.name}</h1>
                <h4 id="product-description">{product.description}</h4>
              </div>
            </Link>
            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>
              <Icon small id="add-icon">add_shopping_cart</Icon>
            </div>
          </div>;
        }
      }
      return undefined;
    })}
  </div>
)

export default AllProducts;
