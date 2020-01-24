import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'

import backgroudImage from '../../../assets/images/bannerFirstScreen.png'
import { connect } from 'react-redux';

class LaunchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setTranslucent(true)
    const { token } = this.props.auth.data
    this.props.navigation.navigate(token != null || undefined ? 'Home' : 'LaunchPage');
  }

  componentWillUnmount() {
    StatusBar.setTranslucent(false)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroudImage}
          style={styles.backgroundImage}
          imageStyle={styles.bgImage}
        >
          <View style={styles.containerContent}>
            <View style={styles.containerTitle}>
              <Text style={styles.titleApp}>Ice Cream O</Text>
              <Text style={styles.subtitleApp}>Share happiness with loved ones</Text>
            </View>
            <TouchableOpacity style={styles.btnStartOrder} onPress={() => this.props.navigation.navigate('NavigationLaunchPage')}><Text style={styles.textBtnStartOrder}>Start Order</Text></TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  bgImage: {
    resizeMode: 'cover',
    opacity: 0.5
  },
  containerContent: {
    height: '70%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerTitle: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleApp: {
    fontFamily: 'MaShanZheng-Regular',
    fontSize: 50,
    color: '#333',
  },
  subtitleApp: {
    fontFamily: 'McLaren-Regular',
    fontSize: 16,
    color: "#111"
  },
  btnStartOrder: {
    backgroundColor: '#B2A67F',
    width: 200,
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  textBtnStartOrder: {
    color: '#FFF'
  }
})

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(LaunchPage)
