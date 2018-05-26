import React, { Fragment } from 'react';
import { Button, Text } from 'react-native';

export default class CartCount extends React.Component {
  render() {
    return (
      <Fragment>
        <Button
          onPress={() => alert('This is a button!')}
          title="Cart"
          color="#fff"
        >
          <Text>===</Text>
        </Button>
      </Fragment>
    );
  }
}