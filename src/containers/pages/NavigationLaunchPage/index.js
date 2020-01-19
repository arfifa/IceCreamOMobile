import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'

import backgroudImage from '../../../assets/images/backgroundSecond.jpg';

export default class NavigationLaunchPage extends Component {
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
              <Image source={require('../../../assets/images/logo.jpg')} style={styles.imageLogo} />
              <Text style={styles.titleApp}>Ice Cream O</Text>
              <Text style={styles.descriptionApp}>healthy, delicious, sweet, quality guaranteed, suitable for all walks of life, food for happiness for everyone</Text>
            </View>
            <TouchableOpacity style={styles.btnCreateAccount} onPress={() => this.props.navigation.navigate('NavigationLaunchPage')}><Text style={styles.textBtnCreateAccount}>Create Account</Text></TouchableOpacity>
            <View style={styles.lineLogin}>
              <Text>Already have Account?</Text>
              <TouchableOpacity
                style={styles.linkLogin}
                onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.textLogin}>Log in</Text></TouchableOpacity>
            </View>
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
  },
  containerContent: {
    height: '65%',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(250, 250, 250, 0.7)',
    padding: 40
  },
  containerTitle: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleApp: {
    fontFamily: 'MaShanZheng-Regular',
    fontSize: 35,
    color: '#B2A67F',
    marginTop: 5
  },
  imageLogo: {
    width: 70,
    height: 70,
    opacity: 0.9
  },
  descriptionApp: {
    fontFamily: 'McLaren-Regular',
    fontSize: 12,
    color: "#111",
    textAlign: 'center',
    marginTop: 10
  },
  btnCreateAccount: {
    backgroundColor: '#ffffff',
    color: '#000',
    width: 200,
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  lineLogin: {
    flexDirection: 'row',
    marginLeft: 3
  },
  textLogin: {
    color: 'rgb(136, 81, 55)',
    fontFamily: 'McLaren-Regular'
  }
})

