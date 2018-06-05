import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import SplashScreen from './components/SplashScreen';
import { HEADER_BACKGROUND_COLOR } from './styles';
import Order from './components/OrderList';
import { MaterialIcons } from '@expo/vector-icons';
import ProductList from './components/ProductList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { defaults, resolvers } from './state/resolvers';

export const BASE_URL = 'http://192.168.0.104:3000';

const ProductStack = createStackNavigator(
  {
    home: HomeScreen,
    product: ProductDetail,
    products: ProductList
  },
  {
    initialRouteName: 'home',
    headerMode: 'screen'
  }
);

const MainStack = createBottomTabNavigator(
  {
    Shop: ProductStack,
    Order,
    Cart: Cart
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Shop') {
          iconName = 'shopping-cart';
        } else if (routeName === 'Order') {
          iconName = 'payment';
        } else if (routeName === 'Cart') {
          iconName = 'shopping-cart';
        }

        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: HEADER_BACKGROUND_COLOR,
      inactiveTintColor: 'gray'
    }
  }
);

const RootStack = createStackNavigator(
  {
    home: MainStack,
    splash: SplashScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const client = new ApolloClient({
  uri: `${BASE_URL}/graphql`,
  clientState: {
    defaults,
    resolvers
  }
});
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}
