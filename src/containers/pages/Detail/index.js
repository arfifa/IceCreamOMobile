import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import { Card, CardItem, Body } from 'native-base'

import dummyImage from '../../../assets/images/1.jpg'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalItem: "1"
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.itemContentImage}>
          <ImageBackground
            source={dummyImage}
            style={styles.itemBackgroundImage}
            imageStyle={styles.itemImage}>
            <View style={styles.headerMenu}>
              <View style={styles.containerIconLeft}>
                <Icon name="arrow-left" size={25} color="#FFECAC"
                  onPress={() => this.props.navigation.navigate('Home')} />
              </View>
              <View style={styles.containerIconCart}>
                <Icon name="cart-plus" size={25} color="#FFECAC" />
              </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.itemDesc}>
            <View style={styles.headerDesc}>
              <View style={{ flex: 1, marginRight: 15 }}>
                <Text style={styles.titleItem}>Ice Cream</Text>
              </View>
              <View style={{ width: 45 }}>
                <Icon name="heart-multiple-outline" size={35} />
              </View>
            </View>
            <Text style={styles.descItem}>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. </Text>
            <View style={styles.containerAddMinCart}>
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
          </View>
          <View style={styles.containerCardReview}>
            <Text style={styles.titleSection}>Review</Text>
            <Card style={{ borderColor: 'pink' }}>
              <CardItem>
                <Body>
                  <View style={styles.headerCardReview}>
                    <View style={{ flex: 1 }}>
                      <Text>Arfifa</Text>
                    </View>
                    <Text style={{ fontSize: 11 }}>16 Januari 2020</Text>
                  </View>
                  <Text style={{ fontFamily: 'McLaren-Regular', fontSize: 14 }}>Enak bgt tp si dia bokek, nanti deh klo dpt yang tajir beli 2</Text>
                  <Icon />
                </Body>
              </CardItem>
            </Card>
            <Card style={{ borderColor: 'pink' }}>
              <CardItem>
                <Body>
                  <View style={styles.headerCardReview}>
                    <View style={{ flex: 1 }}>
                      <Text>Arfifa</Text>
                    </View>
                    <Text style={{ fontSize: 11 }}>16 Januari 2020</Text>
                  </View>
                  <Text style={{ fontFamily: 'McLaren-Regular', fontSize: 14 }}>Enak bgt tp si dia bokek, nanti deh klo dpt yang tajir beli 2</Text>
                  <Icon />
                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={styles.containerRecommandedItem}>
            <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
              <Text style={styles.titleSection}>Recommanded Item</Text>
            </View>
            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.containerShowcase}>
                <Card style={styles.cardShowcase}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                    <View style={styles.containerImgItem}>
                      <Image source={require('../../../assets/images/1.jpg')} style={styles.imgItem} />
                    </View>
                    <View>
                      <Text>aaaa</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
                <Card style={styles.cardShowcase}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                    <View style={styles.containerImgItem}>
                      <Image source={require('../../../assets/images/1.jpg')} style={styles.imgItem} />
                    </View>
                    <View>
                      <Text>aaaa</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
                <Card style={styles.cardShowcase}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                    <View style={styles.containerImgItem}>
                      <Image source={require('../../../assets/images/1.jpg')} style={styles.imgItem} />
                    </View>
                    <View>
                      <Text>aaaa</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
                <Card style={styles.cardShowcase}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                    <View style={styles.containerImgItem}>
                      <Image source={require('../../../assets/images/1.jpg')} style={styles.imgItem} />
                    </View>
                    <View>
                      <Text>aaaa</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <View style={styles.footerPriceContainer}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.textPrice}>Rp. 50000</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.btnOrderNow}
              onPress={() => this.props.navigation.navig('NavigationLaunchPage')}
            ><Text style={styles.textBtnOrderNow}>Order Now</Text>
            </TouchableOpacity>
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
  itemContentImage: {
    height: '40%',
    borderBottomLeftRadius: 40,
  },
  itemBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  },
  itemImage: {
    borderBottomLeftRadius: 40,

  },
  headerMenu: {
    flexDirection: "row",
    height: 60,
    justifyContent: 'space-between'
  },
  containerIconLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  containerIconCart: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FB6BA',
    paddingHorizontal: 15,
    borderBottomLeftRadius: 30,
    elevation: 3
  },
  itemDesc: {
    padding: 16,
    backgroundColor: "#fff"
  },
  headerDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  titleItem: {
    fontSize: 30,
    fontFamily: 'MaShanZheng-Regular'
  },
  descItem: {
    fontFamily: 'McLaren-Regular',
    fontSize: 12,
    color: '#222',
  },
  titleSection: {
    fontFamily: 'McLaren-Regular',
    fontSize: 18,
    marginBottom: 5
  },
  containerAddMinCart: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end'
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
  containerCardReview: {
    backgroundColor: '#FFF',
    marginTop: 16,
    padding: 10
  },
  headerCardReview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  containerRecommandedItem: {
    backgroundColor: "#fff",
    marginTop: 16,
    marginBottom: 16,
  },
  footerPriceContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  btnOrderNow: {
    backgroundColor: '#7FB6BA',
    width: "100%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopLeftRadius: 40,
  },
  textBtnOrderNow: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'McLaren-Regular'
  },
  textPrice: {
    color: '#222',
    fontSize: 16,
    fontFamily: 'McLaren-Regular'
  },
  containerShowcase: {
    borderTopWidth: 2,
    borderTopColor: '#84F4F1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardShowcase: {
    width: 150,
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },
  containerImgItem: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgItem: {
    width: '100%',
    height: undefined,
    flex: 1,
  },

})
