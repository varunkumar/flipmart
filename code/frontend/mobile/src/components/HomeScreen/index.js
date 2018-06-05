import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { AppLoading, Font } from 'expo';
import RoundImageButton from '../RoundImageButton';
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR } from '../../styles';
import { BASE_URL } from '../..';

const ENTRIES = [
  {
    img: '/images/fashion2.jpg'
  },
  {
    img: '/images/fashion3.jpg'
  },
  {
    img: '/images/fashion5.jpg'
  },
  {
    img: '/images/pexels-photo-277320.jpeg'
  },
  {
    img: '/images/pexels-photo-724921.jpeg'
  },
  {
    img: '/images/pexels-photo-583842.jpeg'
  },
  {
    img: '/images/pexels-photo-217842.jpeg'
  }
];

const sliderWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height * 3 / 4;

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  state = { isReady: false };

  UNSAFE_componentWillMount() {
    (async () => {
      await Font.loadAsync({
        Lato: require('../../../public/fonts/Lato/Lato-Regular.ttf')
      });

      this.setState({ isReady: true });
    })();
  }

  renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View>
        <ParallaxImage
          source={{ uri: `${BASE_URL}${item.img}` }}
          containerStyle={{
            width: sliderWidth,
            height: itemHeight
          }}
          style={{ width: sliderWidth, height: itemHeight }}
          parallaxFactor={0.5}
          {...parallaxProps}
        />
      </View>
    );
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Fragment>
        <View style={styles.container}>
          <Carousel
            data={ENTRIES}
            renderItem={this.renderItem}
            hasParallaxImages={true}
            windowSize={1}
            sliderWidth={sliderWidth}
            itemWidth={sliderWidth}
            itemHeight={itemHeight}
            autoplay={true}
            loop={true}
          />
          <Text style={styles.logo}>FLIPMART</Text>
          <View style={styles.buttonBar}>
            <RoundImageButton
              text={'Women'}
              img={{ uri: `${BASE_URL}/images/fashion2.jpg` }}
              onPress={() =>
                this.props.navigation.navigate('products', { gender: 'women' })
              }
            />
            <RoundImageButton
              text={'Men'}
              img={{ uri: `${BASE_URL}/images/pexels-photo-277320.jpeg` }}
              onPress={() =>
                this.props.navigation.navigate('products', { gender: 'men' })
              }
            />
            <RoundImageButton
              text={'Accessories'}
              img={{ uri: `${BASE_URL}/images/fashion5.jpg` }}
              onPress={() =>
                this.props.navigation.navigate('products', {
                  category: 'accessories'
                })
              }
            />
            <RoundImageButton
              text={'Electronics'}
              img={{ uri: `${BASE_URL}/images/pexels-photo-217842.jpeg` }}
              onPress={() =>
                this.props.navigation.navigate('products', {
                  category: 'electronics'
                })
              }
            />
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_BACKGROUND_COLOR
  },
  logo: {
    position: 'absolute',
    top: itemHeight / 2 - 18,
    fontSize: 36,
    fontFamily: 'Lato',
    color: PRIMARY_TEXT_COLOR
  },
  buttonBar: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: itemHeight
  }
});
