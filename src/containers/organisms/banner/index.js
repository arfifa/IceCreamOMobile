import React, { Component } from 'react';
import { Image, Dimensions, Text } from 'react-native';
import { View } from 'native-base';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height / 3.3;

class Banner extends Component {

  renderPage(image, index) {
    return (
      <View key={index} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ width: BannerWidth / 1.15, height: BannerHeight, borderRadius: 10, resizeMode: 'cover' }}
          source={image} />
      </View>
    )
  }

  render() {
    return (
      <View >
        <Carousel
          pageIndicatorOffset={16}
          autoplay
          autoplayTimeout={7000}
          loop
          index={0}
          pageSize={BannerWidth}>
          {this.props.image.map((data, index) => this.renderPage(data, index))}
        </Carousel>
      </View>
    )
  }
}

export default Banner;
