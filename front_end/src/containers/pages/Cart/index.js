import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Card, CardItem, Body } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Cart extends Component {
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
          <Text style={styles.titleAccount}>My Cart</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerBody}>
            <Card style={{ borderColor: 'pink' }}>
              <CardItem>
                <Body style={styles.containerCardCart}>
                  <View style={styles.containerImgCard}>
                    <Image source={require('../../../assets/images/2.jpeg')} style={styles.imageItem} />
                  </View>
                  <View style={styles.containerDescCart}>
                    <Text style={styles.titleItem}>Ice Cream</Text>
                    <Text style={styles.price}>Rp. 100000</Text>
                    <View style={styles.containerAddMinCart}>
                      <View style={{ width: 120, flexDirection: "row" }}>
                        <TouchableOpacity style={styles.operationMin}>
                          <Text>
                            <Icon name="minus" color="#FFECAC" size={25} />
                          </Text>
                        </TouchableOpacity>
                        <TextInput style={styles.outputMinAdd}
                          editable={false}
                          value={this.state.totalItem}
                          keyboardType={'numeric'}
                          textAlign={'center'} />
                        <TouchableOpacity style={styles.operationPlus}>
                          <Text>
                            <Icon name="plus" color="#FFECAC" size={25} />
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                          <Text>
                            <Icon name="trash-can" color="#E92534" size={30} />
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
            </Card>
          </View>
        </ScrollView>
        <View style={styles.containerCheckout}>
          <View>
            <Text style={{ fontFamily: 'MaShanZheng-Regular', fontSize: 25, color: "#444" }}>Total</Text>
            <Text style={{ fontFamily: 'MaShanZheng-Regular', fontSize: 20 }}>Rp. 100000</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.btnCheckout}
              onPress={() => this.props.navigation.navigate('Checkout')}>
              <Text style={styles.textCheckout}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    borderBottomRightRadius: 10,
    paddingTop: 15
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
  containerCardCart: {
    flexDirection: "row",
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
  titleItem: {
    fontSize: 24,
    fontFamily: 'MaShanZheng-Regular',
    color: '#444',
    marginBottom: 10
  },
  price: {
    fontSize: 18,
    fontFamily: 'McLaren-Regular',
    color: '#84F4F1'
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
  containerCheckout: {
    height: 80,
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  btnCheckout: {
    width: 150,
    height: 40,
    backgroundColor: "#FFECAC",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2
  },
  textCheckout: {
    fontFamily: 'McLaren-Regular'
  }
})
