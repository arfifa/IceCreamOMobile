import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFontA from 'react-native-vector-icons/FontAwesome'
import NumberFormat from 'react-number-format'
import StarRating from 'react-native-star-rating'
import { Card, Body } from 'native-base'
import { connect } from 'react-redux'

import { APP_URL_IMAGE } from '../../../config/Api';
import { getItem } from '../../../redux/action/item';
import trunc from '../../../utils/trunc';

import Banner from '../../organisms/banner'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      bannerImage: [require('../../../assets/images/1.jpg'), require('../../../assets/images/2.jpeg'), require('../../../assets/images/3.jpg')]
    }
  }

  componentDidMount() {
    this.props.dispatch(getItem())
  }

  render() {
    const { isLoading, isSuccess, data } = this.props.item

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#7FB6BA" barStyle="light-content" />
        <View style={styles.banner}>
          <View style={styles.headerBrand}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../../assets/images/logo.jpg')} style={styles.imageBrand} />
              <Text style={styles.textBrand}>Ice Cream O</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Icon name="login" size={25} color="#fff" /><Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerSearch}>
            <TextInput placeholder='Type search Here' style={styles.inputSearch} />
            <IconFontA name="search" color="#fff" size={25} />
          </View>
          <Text style={styles.titleCategories}>Categories</Text>
          <View style={styles.cardContainerCat}>
            <Card style={styles.cardCategories}>
              <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/icons/ice-cream.png')} style={styles.iconCategories} />
                <Text style={styles.textCategories}>Ice Cream</Text>
              </Body>
            </Card>
            <Card style={styles.cardCategories}>
              <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/icons/cake.png')} style={styles.iconCategories} />
                <Text style={styles.textCategories}>Ice Cream Cake</Text>
              </Body>
            </Card>
            <Card style={styles.cardCategories}>
              <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/icons/donuts.png')} style={styles.iconCategories} />
                <Text style={styles.textCategories}>Donut</Text>
              </Body>
            </Card>
            <Card style={styles.cardCategories}>
              <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../assets/icons/drink.png')} style={styles.iconCategories} />
                <Text style={styles.textCategories}>Drink</Text>
              </Body>
            </Card>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            {isLoading &&
              <Text>...isLoading</Text>
            }
            {isSuccess &&
              <>
                <View style={styles.backHeader}></View>
                <View style={styles.bannerContainer}>
                  <Banner image={this.state.bannerImage} />
                </View>
                <Text style={styles.titleSpecialPromo}>Special Promo</Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.containerPromo}>
                  <Card style={styles.cardPromo}>
                    <Image source={require('../../../assets/images/diskonBri.jpg')} style={styles.imgBankPromo} />
                  </Card>
                  <Card style={styles.cardPromo}>
                    <Image source={require('../../../assets/images/diskonMega.jpg')} style={styles.imgBankPromo} />
                  </Card>
                  <Card style={styles.cardPromo}>
                    <Image source={require('../../../assets/images/diskonMega1.jpg')} style={styles.imgBankPromo} />
                  </Card>
                  <Card style={styles.cardPromo}>
                    <Image source={require('../../../assets/images/diskonPanin.jpg')} style={styles.imgBankPromo} />
                  </Card>
                </ScrollView>
                <Text style={styles.titleSpecialPromo}>List Sweet Food & Drink</Text>
                <View style={styles.containerListItem}>
                  {<Text>{this.props.item.isLoading}</Text>}
                  {data.map(d => (
                    < Card style={styles.cardItem}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {
                        idItem: d.id_item
                      })}>
                        <View style={styles.containerImgItem}>
                          <Image source={{ uri: `${APP_URL_IMAGE}${d.images}` }} style={styles.imgItemList} />
                        </View>
                        <View style={{ padding: 5 }}>
                          <View style={{ height: 40, marginVertical: 7 }}>
                            <Text style={{ fontFamily: 'McLaren-Regular' }}>{trunc(d.item_name)}</Text>
                          </View>
                          <NumberFormat
                            value={d.price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Rp. '}
                            renderText={value => <Text
                              style={{ color: '#1DEBE6', fontWeight: 'bold' }}>{value}</Text>} />
                          <View style={{ width: 80, marginTop: 7 }}>
                            <StarRating
                              disabled={true}
                              starSize={12}
                              fullStarColor={'#1DEBE6'}
                              maxStars={5}
                              rating={d.ratings.toFixed(2)}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </Card>
                  ))}
                </View>
              </>
            }
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
  banner: {
    height: 215,
    backgroundColor: '#7FB6BA'
  },
  imageBrand: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 100
  },
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between'
  },
  textBrand: {
    fontFamily: 'MaShanZheng-Regular',
    fontSize: 25,
    color: '#ffffff'
  },
  headerSearch: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  inputSearch: {
    width: '87%',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 10
  },
  titleCategories: {
    fontSize: 16,
    paddingHorizontal: 16,
    fontFamily: 'McLaren-Regular',
    color: '#FDEEEF',
    marginTop: 5
  },
  cardContainerCat: {
    backgroundColor: '#FFECAC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingTop: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  cardCategories: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '23%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  iconCategories: {
    width: 30,
    height: 30
  },
  textCategories: {
    fontSize: 12,
    color: '#444',
    fontFamily: 'MaShanZheng-Regular',
    marginTop: 5
  },
  body: {
    flex: 1,
    backgroundColor: '#fff'
  },
  backHeader: {
    height: 60,
    backgroundColor: '#FFECAC',
    borderBottomWidth: 4,
    borderBottomColor: '#84F4F1'
  },
  textLogin: {
    color: '#fff',
    fontFamily: 'McLaren-Regular',
    marginLeft: 2
  },
  bannerContainer: {
    marginTop: -50
  },
  specialPromo: {
    flexDirection: 'row',
  },
  titleSpecialPromo: {
    color: '#444',
    fontFamily: 'MaShanZheng-Regular',
    fontSize: 25,
    marginTop: 25,
    paddingHorizontal: 16
  },
  containerPromo: {
    flexDirection: "row",
    paddingHorizontal: 7,
    marginTop: -5
  },
  cardPromo: {
    width: 170,
    height: 110,
    marginRight: 10,
    borderRadius: 5
  },
  imgBankPromo: {
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  containerListItem: {
    borderTopWidth: 2,
    borderTopColor: '#84F4F1',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    paddingHorizontal: 5,
    justifyContent: 'center'
  },
  cardItem: {
    width: '45%',
    borderRadius: 5,
    padding: 5,
    marginRight: 5
  },
  containerImgItem: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgItemList: {
    width: '100%',
    height: 130,
    flex: 1,
    resizeMode: 'contain'
  },

})

const mapStateToProps = state => {
  return {
    item: state.item
  }
}

export default connect(mapStateToProps)(Home);

