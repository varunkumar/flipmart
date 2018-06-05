import React from 'react';
import { Text } from 'react-native';
import { HEADER_TEXT_COLOR } from '../../styles';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Text
        onPress={() => this.props.navigation.navigate('splash')}
        color={HEADER_TEXT_COLOR}
        style={{ fontSize: 20, paddingLeft: 10 }}
      >
        FlipMart
      </Text>
    );
  }
}