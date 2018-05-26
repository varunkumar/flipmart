import React, { Fragment } from 'react';
import { Image, Text } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Fragment>
        <Image
          source={require('../../../public/logo.png')}
          style={{ width: 30, height: 30 }}
        />
        <Text>FlipMart</Text>
      </Fragment>
    );
  }
}