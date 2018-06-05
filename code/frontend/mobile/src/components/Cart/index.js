import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { View, Text, StyleSheet } from 'react-native';

export const FETCH_PRODUCTS_IN_CART = gql`
  {
    productsInCart @client {
      id
    }
  }
`;

export default class Cart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Query query={FETCH_PRODUCTS_IN_CART}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>error.toString()</Text>;

            // Example for nested query
            const productsInCart = data.productsInCart || [];
            return (
              <Text>There are {productsInCart.length} item(s) in cart</Text>
            );
          }}
        </Query>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
