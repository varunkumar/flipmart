import React, { Component } from 'react';
import './index.css';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

export const FETCH_ALL_ORDERS = gql`
  query allOrders {
    allOrders {
      id
      customerId
      orderStatus
      products {
        id
        name
        price
      }
    }
  }
`;

class OrderList extends Component {
  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>My Orders</h4>
        </div>
        <div className="items">

          <Query query={FETCH_ALL_ORDERS} >
            {({ loading, error, data, client }) => {
              if (loading) return 'Loading...';
              if (error) return error.toString();
              return data.allOrders.map((order) => {
                return <div className="order" key={order.id}>
                  <div style={{ fontWeight: 'bold' }}><a href="">Order: {order.id}</a>  <i>{order.orderStatus}</i></div>
                  <ul>
                    {order.products.map((product) => {
                      return <li key={product.id}>{product.name}<div className="order-product-price">₹{product.price}</div></li>;
                    })}
                  </ul>
                </div>
              })
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default OrderList;
