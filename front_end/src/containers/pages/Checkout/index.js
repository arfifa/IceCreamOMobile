import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Card, CardItem, Body } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconO from 'react-native-vector-icons/Octicons'

export default class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalItem: "1"
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleCheckout}>Checkout</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerBody}>
            <View style={styles.titleSection}>
              <IconF name="address-book-o" size={25} color="#666" style={styles.icon} />
              <Text style={styles.textTitleSection}>shipping address</Text>
            </View>
            <Card style={{ borderColor: 'pink' }}>
              <CardItem>
                <Body>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.textEmail}>arfifarahman@gmail.com</Text>
                    <IconF name="map-marker" size={25} color="#1DEBE6" />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.textAddress}>Jl. Pasir Putih D No.155B, Sepanjang Jaya, Rawalumbu, Kota Bks, Jawa Barat 17114 Kota Bekasi, Jawa Barat</Text>
                    </View>
                    <View style={{ width: 45, alignItems: 'center' }}>
                      <IconO name="chevron-right" size={20} />
                    </View>
                  </View>
                  <View style={styles.line} />
                  <Text style={styles.textDeliveryNote}>Delivery Note</Text>
                </Body>
              </CardItem>
            </Card>
            <View style={styles.titleSection}>
              <Icon name="truck-fast" size={25} color="#666" style={styles.icon} />
              <Text style={styles.textTitleSection}>Your Order</Text>
            </View>
            <Card style={{ borderColor: 'pink' }}>
              <CardItem style={{ flexDirection: 'column' }}>
                <Body style={styles.itemContainer}>
                  <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <View>
                      <Image source={require('../../../assets/images/2.jpeg')} style={{ width: 80, height: 80, marginRight: 10 }} />
                    </View>
                    <View>
                      <Text style={styles.titleItem}>Ice Cream</Text>
                      <Text style={styles.price}>Rp. 100000/Product</Text>
                    </View>
                  </View>
                  <View style={styles.line} />
                  <View>
                    <Text style={{ fontFamily: 'McLaren-Regular' }}>Number of item: 10</Text>
                    <Text style={{ fontFamily: 'McLaren-Regular' }}>Total price item: Rp.1000000</Text>
                  </View>
                </Body>
                <Body style={styles.itemContainer}>
                  <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <View>
                      <Image source={require('../../../assets/images/2.jpeg')} style={{ width: 80, height: 80, marginRight: 10 }} />
                    </View>
                    <View>
                      <Text style={styles.titleItem}>Ice Cream</Text>
                      <Text style={styles.price}>Rp. 100000/Product</Text>
                    </View>
                  </View>
                  <View style={styles.line} />
                  <View>
                    <Text style={{ fontFamily: 'McLaren-Regular' }}>Number of item: 10</Text>
                    <Text style={{ fontFamily: 'McLaren-Regular' }}>Total price item: Rp.1000000</Text>
                  </View>
                </Body>
              </CardItem>
            </Card>
            <View style={styles.titleSection}>
              <Icon name="playlist-check" size={25} color="#666" style={styles.icon} />
              <Text style={styles.textTitleSection}>payment details</Text>
            </View>
            <Card style={{ borderColor: 'pink' }}>
              <CardItem>
                <Body>
                  <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <View>
                      <Text>Total Belanja</Text>
                      <Text>Biaya Pengiriman</Text>
                      <View style={styles.line} />
                      <Text>Total Pembayaran</Text>
                    </View>
                    <View>
                      <Text>Rp. 264.000</Text>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
        <View style={styles.containerNextCheckout}>
          <View>
            <Text style={{ fontFamily: 'MaShanZheng-Regular', fontSize: 25, color: "#444" }}>Total</Text>
            <Text style={{ fontFamily: 'MaShanZheng-Regular', fontSize: 20 }}>Rp. 100000</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btnNextCheckout}
              onPress={() => this.props.navigation.navigate('NextCheckout')}>
              <Text style={styles.textNextCheckout}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#7FB6BA',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  containerBody: {
    flex: 1,
    padding: 10
  },
  titleCheckout: {
    color: '#FFECAC',
    fontSize: 35,
    fontFamily: 'MaShanZheng-Regular'
  },
  titleSection: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  textTitleSection: {
    fontSize: 14,
    fontFamily: 'McLaren-Regular',
    color: '#999'
  },
  textEmail: {
    fontFamily: 'McLaren-Regular',
    fontSize: 16,
    marginRight: 10
  },
  textAddress: {
    fontFamily: 'McLaren-Regular',
    fontSize: 12,
    marginVertical: 10
  },
  line: {
    borderBottomColor: '#BBB',
    borderBottomWidth: 1,
    width: '100%'
  },
  textDeliveryNote: {
    fontFamily: 'McLaren-Regular',
    marginTop: 10,
    marginBottom: 5,
    color: '#1DEBE6'
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 3,
    marginBottom: 5
  },
  titleItem: {
    fontSize: 20,
    fontFamily: 'MaShanZheng-Regular',
    color: '#444'
  },
  price: {
    fontSize: 14,
    fontFamily: 'McLaren-Regular',
    color: '#1DEBE6'
  },
  containerImgCard: {
    width: 80,
    height: 80
  },
  containerDescCart: {
    flex: 1
  },
  imageItem: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'contain'
  },
  containerDescCart: {
    marginLeft: 15
  },

  containerAddMinCart: {
    marginTop: 10,
    flexDirection: 'row',
    width: 205,
  },
  operationMin: {
    width: 30,
    height: 30,
    backgroundColor: '#F17880',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  operationPlus: {
    width: 30,
    height: 30,
    backgroundColor: '#7FB6BA',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  outputMinAdd: {
    marginHorizontal: 5,
    borderWidth: 1,
    width: 50,
    padding: 0,
    borderColor: '#666',
    color: '#222',
  },
  containerNextCheckout: {
    height: 80,
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  btnNextCheckout: {
    width: 120,
    height: 40,
    backgroundColor: "#FFECAC",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2
  },
  textNextCheckout: {
    fontFamily: 'McLaren-Regular'
  }
})
