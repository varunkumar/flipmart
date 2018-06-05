import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { HEADER_BACKGROUND_COLOR } from '../../styles';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.container} onPress={() =>
        this.props.navigation.goBack()
      }>
        <Image
          source={require('../../../public/logo.png')}
          style={{ width: 300, height: 300 }}
        />
        <Text onPress={() =>
          this.props.navigation.goBack()
        }>FlipMart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HEADER_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});