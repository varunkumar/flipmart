import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AllProducts from './AllProducts';

const titleMap = {
  all: 'All Items',
  accessories: 'Accessories',
  clothes: 'Clothes',
  electronics: 'Electronics'
};

const genderMap = {
  men: 'Men',
  women: 'Women'
};

class ProductList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: ProductList.getTitle(navigation)
    };
  };

  static getTitle = navigation => {
    let category = 'all',
      gender = 'all';

    category = navigation.getParam('category', 'all');
    gender = navigation.getParam('gender', 'all');

    if (category === 'all' && gender !== 'all') {
      return `${genderMap[gender]}'s Items`;
    }

    if (gender === 'all') {
      return titleMap[category];
    }

    return `${genderMap[gender]}'s ${titleMap[category]}`;
  };

  render() {
    let category = 'all',
      gender = 'all';
    const { navigation } = this.props;
    category = navigation.getParam('category', 'all');
    gender = navigation.getParam('gender', 'all');

    return (
      <View style={styles.container}>
        <AllProducts category={category} gender={gender} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  }
});

export default ProductList;
