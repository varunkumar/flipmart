import React from 'react';
import { Image, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class CartCount extends React.Component {
  render() {
    return (
      <MaterialIcons name="shopping-cart" size={25} />
    );
  }
}