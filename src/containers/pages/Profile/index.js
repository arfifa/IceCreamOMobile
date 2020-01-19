import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native'
import { Card, CardItem, Body, List, ListItem, Right } from 'native-base'
import Icon from 'react-native-vector-icons/Octicons'

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleAccount}>Account</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerBody}>
            <Card style={{ borderColor: 'pink' }}>
              <CardItem>
                <Body style={styles.containerCardBody}>
                  <View>
                    <Image source={require('../../../assets/icons/female.png')} style={styles.imgProfile} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.name}>Nita Tahlia</Text>
                    <Text style={styles.email}>arfifarahman509@gmail.com </Text>
                    <Text style={styles.sinceMember}>Member Since 2013</Text>
                    <Icon name="pencil" size={25} color="#84F4F1" style={styles.iconPencil} />
                  </View>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ borderColor: 'pink' }}>
              <CardItem>
                <Body>
                  <Text style={{ fontFamily: 'McLaren-Regular', fontSize: 18, marginBottom: 10 }}>Address</Text>
                  <Icon name="pencil" size={25} color="#84F4F1" style={styles.iconPencilAddress} />
                  <Text style={{ fontFamily: 'McLaren-Regular' }}>jl.carita2 RT.01 RW.02 no.232 kelurahan sepanjang jaya kecamatan Rawa Lumbu kota bekasi 17174</Text>
                  <Text style={{ fontFamily: 'McLaren-Regular', marginBottom: 5 }}>Jawa Barat - Kota Bekasi - Rawalumbu</Text>
                  <Text style={{ fontFamily: 'McLaren-Regular', marginBottom: 5 }}>081779035662</Text>
                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={styles.contanerMenuProfile}>
            <List>
              <ListItem noBorder>
                <Body>
                  <Text style={styles.fontMcLarent}>Your Account</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Body>
                  <Text style={styles.fontMaShanZheng}>Orders History</Text>
                </Body>
                <Right>
                  <Icon name="chevron-right" size={30} color="#7FB6BA" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Body>
                  <Text style={styles.fontMaShanZheng}>Voucher</Text>
                </Body>
                <Right>
                  <Icon name="chevron-right" size={30} color="#7FB6BA" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Body>
                  <Text style={styles.fontMaShanZheng}>Review</Text>
                </Body>
                <Right>
                  <Icon name="chevron-right" size={30} color="#7FB6BA" />
                </Right>
              </ListItem>
            </List>
          </View>
        </ScrollView>
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 60,
    backgroundColor: '#7FB6BA',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  titleAccount: {
    color: '#FFECAC',
    fontSize: 35,
    fontFamily: 'MaShanZheng-Regular'
  },
  containerBody: {
    flex: 1,
    padding: 10
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 10
  },
  containerCardBody: {
    flexDirection: "row",
    alignItems: 'center'
  },
  name: {
    fontFamily: 'McLaren-Regular',
    fontSize: 18,
  },
  email: {
    fontFamily: 'McLaren-Regular',
    fontSize: 12,
    marginBottom: 10
  },
  sinceMember: {
    fontFamily: 'McLaren-Regular',
    fontSize: 12,
    color: '#444'
  },
  iconPencil: {
    position: 'absolute',
    right: 0,
    top: -20
  },
  iconPencilAddress: {
    position: 'absolute',
    right: 0,
    top: -5
  },
  contanerMenuProfile: {
    backgroundColor: '#fff'
  },
  fontMaShanZheng: {
    fontFamily: 'MaShanZheng-Regular',
    fontSize: 20
  },
  fontMcLarent: {
    fontFamily: 'McLaren-Regular',
    fontSize: 24,
    color: '#444'
  }
})
