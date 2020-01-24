import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Form, Item, Label, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { postAuth } from '../../../redux/action/auth';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isValidUsername: false,
      isValidPassword: false,
      hidePassword: true,
      successLogin: false,
      msg: false
    }
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setTranslucent(true)
    this.setState({
      successLogin: this.props.auth.data.success
    })
  }

  _checkUsername(usernameInput) {
    usernameInput.length < 6 ? this.setState({ isValidUsername: false }) : this.setState({ isValidUsername: true })
    this.setState({ username: usernameInput });
  }

  _checkPassword(passwordInput) {
    passwordInput.length < 3 ? this.setState({ isValidPassword: false }) : this.setState({ isValidPassword: true })
    this.setState({ password: passwordInput });
  }

  _changeIcon() {
    this.setState({ hidePassword: !this.state.hidePassword })
  }

  _handleLogin = () => {
    const { isValidPassword, isValidUsername, username, password } = this.state
    if (isValidPassword && isValidUsername) {
      this.props.dispatch(postAuth({ username, password }))
      this.componentDidMount()
      const { successLogin } = this.state
      if (successLogin) {
        this.props.navigation.navigate('Home')
      } else {
        this.setState({
          msg: true
        })
      }
    }
  }

  render() {
    const { msg } = this.state
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
                <Input
                  style={this.state.isValidUsername ? styles.textInput : { color: "#F17880" }}
                  value={this.state.username}
                  onChangeText={this._checkUsername.bind(this)} />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input
                  style={this.state.isValidPassword ? styles.textInput : { color: "#F17880" }}
                  value={this.state.password}
                  secureTextEntry={this.state.hidePassword}
                  onChangeText={this._checkPassword.bind(this)} />
              </Item>
              <Icon
                name={this.state.hidePassword ? 'eye-slash' : 'eye'}
                style={styles.iconEye}
                size={25}
                onPress={this._changeIcon.bind(this)} />
              {msg &&
                <Text>{this.props.auth.data.msg}</Text>
              }
              <TouchableOpacity
                style={this.state.isValidUsername && this.state.isValidPassword ? styles.btnLogin : styles.loginBtnDisabled}
                disabled={this.state.isValidUsername && this.state.isValidPassword ? false : true}
                onPress={this._handleLogin}><Text style={styles.textLogin}>Login</Text></TouchableOpacity>
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
  textInput: {
    color: '#555'
  },
  iconEye: {
    position: 'absolute',
    top: 100,
    right: 5
  },
  btnLogin: {
    backgroundColor: '#B2A67F',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 20
  },
  loginBtnDisabled: {
    backgroundColor: '#444',
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

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Login)