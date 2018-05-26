import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LogoTitle from '../LogoTitle';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTitle: <LogoTitle />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a test</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('product', {
            id: 101
          })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
