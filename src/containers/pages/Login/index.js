import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Form, Item, Label, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Login extends Component {

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setTranslucent(true)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.banner}>
          <Image source={require('../../../assets/images/bannerLoginPage.jpg')} style={styles.imageBanner} />
        </View>
        <View style={styles.body}>
          <Text style={styles.textHeader}>let's try happiness from food like never before</Text>
          <View style={styles.containerForm}>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
              <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Home')}><Text style={styles.textLogin}>Login</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btnLoginFacebook}>
                <Icon name="facebook-f" color='rgb(136, 81, 55)' size={18} style={styles.iconFacebook} />
                <Text style={styles.textLoginFacebook}>
                  Sign with Facebook</Text>
              </TouchableOpacity>
            </Form>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    flex: 1,
    backgroundColor: '#aaa'
  },
  imageBanner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  body: {
    flex: 2,
    padding: 20
  },
  textHeader: {
    fontSize: 20,
    fontFamily: 'McLaren-Regular',
    color: '#B2A67F'
  },
  containerForm: {
    marginTop: -10
  },
  btnLogin: {
    backgroundColor: '#B2A67F',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 20
  },
  textLogin: {
    color: '#fff'
  },
  btnLoginFacebook: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#B2A67F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 10
  },
  textLoginFacebook: {
    color: '#000'
  },
  iconFacebook: {
    marginRight: 5,
  }
})

