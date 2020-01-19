import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Form, Item, Label, Input, ListItem, CheckBox, Body, Button } from 'native-base';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueRadio: [
        { label: 'Man', value: 0 },
        { label: 'Woman', value: 1 }
      ],
      value: 0
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#B2A67F" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.banner}>
            <Text style={styles.textRegister}>Register</Text>
            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.btnRegisterFacebook}>
                <Icon name="facebook-f" color='#fff' size={15} style={styles.iconFacebook} />
                <Text style={styles.textFacebook}>
                  Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnRegisterGoogle}>
                <Icon name="google" color='#EA4335' size={15} style={styles.iconGoogle} />
                <Text style={styles.textGoogle}>
                  Google</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerLine}>
              <View
                style={styles.line}
              />
              <Text>Or</Text>
              <View
                style={styles.line}
              />
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.containerForm}>
              <Form>
                <Item stackedLabel last>
                  <Label>Fullname</Label>
                  <Input />
                </Item>
                <Item stackedLabel last>
                  <Label>Email</Label>
                  <Input />
                </Item>
                <Item stackedLabel last>
                  <Label>No. Handphone</Label>
                  <Input />
                </Item>
                <Item stackedLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
            </View>
            <View style={styles.containerGender}>
              <RadioForm
                formHorizontal={true}
                animation={true}
              >
                {/* To create radio buttons, loop through your array of options */}
                {
                  this.state.valueRadio.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i}
                      style={{ marginRight: 60 }}
                    >
                      {/*  You can set RadioButtonLabel before RadioButtonInput */}
                      <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={this.state.value === i}
                        // onPress={onPress}
                        borderWidth={1}
                        buttonInnerColor={'#F17880'}
                        buttonOuterColor={this.state.value === i ? '#7FB6BA' : '#000'}
                        buttonSize={20}
                        buttonOuterSize={25}
                        buttonStyle={{}}
                        buttonWrapStyle={{ marginLeft: 10 }}
                      />
                      <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
                        // onPress={onPress}
                        labelStyle={{ fontSize: 18, color: '#B2A67F' }}
                        labelWrapStyle={{}}
                      />
                    </RadioButton>
                  ))
                }
              </RadioForm>
            </View>
            <ListItem noBorder style={{ marginLeft: 5 }}>
              <CheckBox checked={true} style={{ marginRight: 20 }} />
              <Body>
                <Text style={styles.textTerms}>I have read and agree to the Ice Cream O Terms & Conditions</Text>
              </Body>
            </ListItem>
            <TouchableOpacity style={styles.btnRegister} onPress={() => this.props.navigation.navigate('NavigationLaunchPage')}><Text style={styles.textBtnRegister}>Register</Text></TouchableOpacity>
            <View style={styles.lineLogin}>
              <Text>Already have Account?</Text>
              <TouchableOpacity
                style={styles.linkLogin}
                onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.textLogin}>Log in</Text></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    flex: 0.5,
    padding: 20
  },
  body: {
    flex: 2,
    padding: 20
  },
  textRegister: {
    fontSize: 25,
    fontFamily: 'McLaren-Regular',
    color: '#B2A67F'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  btnRegisterFacebook: {
    flexDirection: 'row',
    backgroundColor: '#4B689F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '49%',
    padding: 10
  },
  textFacebook: {
    color: '#fff'
  },
  btnRegisterGoogle: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '49%'
  },
  iconFacebook: {
    marginRight: 5,
  },
  iconGoogle: {
    marginRight: 5,
  },
  containerLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '43%'
  },
  containerForm: {
    borderWidth: 1,
    borderColor: '#999',
    marginTop: -25
  },
  containerGender: {
    marginTop: 20,
  },
  textTerms: {
    color: '#444'
  },
  btnRegister: {
    backgroundColor: '#B2A67F',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  textBtnRegister: {
    color: '#fff'
  },
  lineLogin: {
    flexDirection: 'row',
    marginLeft: 3,
    marginTop: 5,
    justifyContent: 'center'
  },
  textLogin: {
    color: 'rgb(136, 81, 55)',
    fontFamily: 'McLaren-Regular',
    marginLeft: 5
  }
})

