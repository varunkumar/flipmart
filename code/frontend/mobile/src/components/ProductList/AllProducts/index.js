import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { MaterialIcons } from '@expo/vector-icons';
import { BASE_URL } from '../../..';

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

const AllProducts = props => (
  <ScrollView style={styles.container}>
    <Query query={FETCH_ALL_PRODUCTS}>
      {({ loading, error, data, client }) => {
        if (loading) return <Text>Loading...</Text>;
        if (error) return <Text>error.toString()</Text>;
        return data.allProducts.map(product => {
          if (
            props.category === 'all' ||
            (product.category && product.category.name === props.category)
          ) {
            if (props.gender === 'all' || product.gender === props.gender) {
              return (
                <View key={product.id} style={styles.item}>
                  <Image
                    alt={product.name}
                    style={{
                      height: 200,
                      width: 200,
                      resizeMode: Image.resizeMode.contain
                    }}
                    source={{ uri: `${BASE_URL}${product.imageUrl}` }}
                    title={product.name}
                  />
                  <View style={styles.productDetails}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20
                      }}
                    >
                      {product.name}
                    </Text>
                    <Text id="product-description">{product.description}</Text>
                  </View>
                  <Mutation
                    mutation={ADD_TO_CART}
                    variables={{ id: product.id }}
                  >
                    {addToCart => (
                      <View className="price-add">
                        <Text id="product-price">₹{product.price}</Text>
                        {!product.inCart && (
                          <Text onPress={() => addToCart()}>
                            <MaterialIcons name="shopping-cart" size={25} />
                          </Text>
                        )}
                      </View>
                    )}
                  </Mutation>
                </View>
              );
            }
          }
          return undefined;
        });
      }}
    </Query>
  </ScrollView>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 5,
    margin: 5,
    width: 220
  },
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap'
  },
  productDetails: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    marginTop: 10,
    borderColor: '#AAA'
  }
});

export default AllProducts;
