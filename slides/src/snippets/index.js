export const ORDER = `
const FETCH_ALL_ORDERS = gql\`
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
\`;

class OrderList extends React.Component {
  render() {
    return (
      <div style={{ fontSize: 16, color: 'black' }}>
        <Query query={FETCH_ALL_ORDERS} >
          {({ loading, error, data }) => {
            
            // Loading and state management
            if (loading) return 'Loading...';
            if (error) return error.toString();

            // data rendering
            return data.allOrders.map((order) => {
              return <Order order={order} />
            })
          }}
        </Query>
      </div>
    );
  }
}

// Pure component
class Order extends React.Component {
  render() {
    const { order } = this.props;
    return <div key={order.id} style={{textAlign: 'left', marginBottom: 20}}>
      <div>Order: {order.id} Status: {order.orderStatus}</div>
        {order.products.map((product) => {
          return <div key={product.id}>- {product.name} ₹{product.price} {product.category && product.category.name}</div>;
        })}
    </div>;
  }
}

render(<OrderList />);
`;
