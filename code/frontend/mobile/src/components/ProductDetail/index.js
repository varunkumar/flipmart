import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProductDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Product Detail - ${navigation.getParam('id', undefined)}`,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Product Detail - {this.props.navigation.getParam('id', 'Undefined')}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push('product', {
            id: 100
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
