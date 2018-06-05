import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

export default class RoundImageButton extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.roundButtonsWrap}
        onPress={() => this.props.onPress()}
      >
        <Image style={styles.roundButtons} source={this.props.img} />
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  roundButtonsWrap: {
    alignItems: 'center',
    height: deviceHeight / 6,
    width: deviceWidth / 4 - 4,
    justifyContent: 'center'
  },
  roundButtons: {
    height: (deviceWidth - 60) / 4,
    width: (deviceWidth - 60) / 4,
    borderRadius: (deviceWidth - 60) / 4 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    resizeMode: 'cover'
  },
  text: {
    alignSelf: 'center',
    fontSize: 16
  }
});
