// Import React
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  ComponentPlayground,
  Deck,
  Heading,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// import order from "raw-loader!./snippets/orderlist.example"; // eslint-disable-line
// Require CSS
require("normalize.css");

const order = `
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

render(<OrderList />);
`;

const darkTheme = createTheme(
  {
    primary: "#042B35",
    secondary: "#D2A03E",
    tertiary: "#FD853D",
    quartenary: "#A7A7A7"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const lightTheme = createTheme(
  {
    primary: "#FDF6E3",
    secondary: "#D2A03E",
    tertiary: "#FD853D",
    quartenary: "#657B83"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={darkTheme}
        contentHeight={1000}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Data exchange technology - GraphQL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            - Sanket, Varun
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Structure
          </Heading>
          <List>
            <ListItem>Intro</ListItem>
            <ListItem>Core concepts</ListItem>
            <ListItem>GraphQL client</ListItem>
            <ListItem>GraphQL ecosystem</ListItem>
            <ListItem>GraphQL @ Arcesium</ListItem>
            <ListItem>Our verdict</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Introduction
          </Heading>
          {
            // TODO: add logo
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            GraphQL
          </Heading>
          {
            // TODO: add does it work image
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Exploration Scope - FlipMart
          </Heading>
          {
            // TODO: add demo images
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Exploration Scope - Reporting infra
          </Heading>
          {
            // TODO: add demo images
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Core concepts
          </Heading>
          <List>
            <ListItem>SDL</ListItem>
            <ListItem>Query</ListItem>
            <ListItem>Mutation</ListItem>
            <ListItem>Subscription</ListItem>
            <ListItem>Resolver functions</ListItem>
            <ListItem>Introspection queries</ListItem>
          </List>
          {
            // TODO: add SDL image
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            GraphQL client
          </Heading>
          <List>
            <ListItem>Declarative data fetching</ListItem>
            <ListItem>Local and remote data management</ListItem>
          </List>
          {
            // TODO: embed codepane, add redux comparison chart
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            GraphQL ecosystem
          </Heading>
          <List>
            <ListItem>Batching, caching, pagination</ListItem>
            <ListItem>Automated persisted queries</ListItem>
            <ListItem>Monitoring and tracing</ListItem>
            <ListItem>Static type checking and linting</ListItem>
            <ListItem>Schema stitching, delegation and binding</ListItem>
          </List>
          {
            // TODO: add engine image
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            GraphQL @ Arcesium
          </Heading>
          {
            // TODO: add code screenshots
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Our verdict
          </Heading>
          {
            // TODO: add code screenshots
          }
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]}>
          {console.log(order, new Date())}
          <ComponentPlayground
            code={order}
            scope={{
              Query,
              gql
            }}
            theme="dark"
          />
        </Slide>
        <Slide transition={["zoom"]} maxWidth={1000} maxHeight={1000}>
          <iframe
            src="http://localhost:4567"
            style={{ width: "1000px", height: "800px", border: "none" }}
            title="GraphiQL"
          />
        </Slide>
      </Deck>
    );
  }
}
