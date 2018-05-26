import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ProductDetail from './components/ProductDetail';
import CartCount from './components/CartCount';

const RootStack = createStackNavigator(
  {
    home: HomeScreen,
    product: ProductDetail
  },
  {
    modal: true,
    initialRouteName: 'home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: <CartCount />,
      headerLeft: <CartCount />
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}