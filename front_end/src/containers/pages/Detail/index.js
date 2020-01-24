import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import { Card, CardItem, Body } from 'native-base'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NumberFormat from 'react-number-format'
import StarRating from 'react-native-star-rating'

import { getItemById } from '../../../redux/action/item'
import { APP_URL_IMAGE } from '../../../config/Api'
import { getReview } from '../../../redux/action/review'
import trunc from '../../../utils/trunc'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalItem: "1"
    }
  }

  componentDidMount() {
    const idItem = this.props.navigation.getParam('idItem')
    this.props.dispatch(getItemById(idItem))
    this.props.dispatch(getReview(idItem))
  }

  render() {
    const { isLoading, isSuccess, isError, dataDetailItem } = this.props.item
    const { dataReview } = this.props.review
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.itemContentImage}>
          {isLoading &&
            <>
            </>
          }
          {isSuccess &&
            <ImageBackground
              source={{ uri: `${APP_URL_IMAGE}${dataDetailItem.result[0].images}` }}
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
          }
        </View>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.itemDesc}>
            {isLoading &&
              <>
                <Text>loading ...</Text>
              </>
            }
            {isSuccess &&
              <>
                <View style={styles.headerDesc}>
                  <View style={{ flex: 1, marginRight: 15 }}>
                    <Text style={styles.titleItem}>{dataDetailItem.result[0].item_name}</Text>
                  </View>
                  <View style={{ width: 45 }}>
                    <Icon name="heart-multiple-outline" size={35} />
                  </View>
                </View>
                <View style={{ width: 100, marginTop: 7 }}>
                  <StarRating
                    disabled={true}
                    starSize={20}
                    fullStarColor={'#1DEBE6'}
                    maxStars={5}
                    rating={dataDetailItem.result[0].ratings}
                  />
                </View>
                <Text style={styles.descItem}>{dataDetailItem.result[0].description}</Text>
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
              </>
            }
          </View>
          <View style={styles.containerCardReview}>
            <Text style={styles.titleSection}>Review</Text>
            {isSuccess && dataReview.map(r => (
              <>
                <Card style={{ borderColor: 'pink' }} key={r.id_review}>
                  <CardItem>
                    <Body>
                      <View style={styles.headerCardReview}>
                        <View style={{ flex: 1 }}>
                          <Text>{r.name}</Text>
                        </View>
                        <Text style={{ fontSize: 11 }}>{r.created_on.substring(0, 10)}</Text>
                      </View>
                      <Text style={{ fontFamily: 'McLaren-Regular', fontSize: 14 }}>{r.review}</Text>
                      <Icon />
                    </Body>
                  </CardItem>
                </Card>
              </>
            ))}
          </View>
          <View style={styles.containerRecommandedItem}>
            <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
              <Text style={styles.titleSection}>Recommanded Item</Text>
            </View>
            <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.containerShowcase}>
                {isSuccess && dataDetailItem.showcase.map(s => (
                  <Card style={styles.cardShowcase}>
                    <TouchableOpacity onPress={() => this.props.navigation.replace('Detail', { idItem: s.id_item })}>
                      <View style={styles.containerImgItem}>
                        <Image source={{ uri: `${APP_URL_IMAGE}${s.images}` }} style={styles.imgItem} />
                      </View>
                      <View style={{ padding: 5 }}>
                        <View style={{ height: 40, marginVertical: 3 }}>
                          <Text style={{ fontFamily: 'McLaren-Regular', fontSize: 13 }}>{trunc(s.item_name)}</Text>
                        </View>
                        <NumberFormat
                          value={s.price}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'Rp. '}
                          renderText={value => <Text
                            style={{ color: '#1DEBE6', fontWeight: 'bold' }}>{value}</Text>} />
                        <View style={{ width: 80, marginTop: 3 }}>
                          <StarRating
                            disabled={true}
                            starSize={12}
                            fullStarColor={'#1DEBE6'}
                            maxStars={5}
                            rating={s.ratings.toFixed(2)}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </Card>
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <View style={styles.footerPriceContainer}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoading &&
              <>
              </>
            }
            {isSuccess &&
              <NumberFormat
                value={dataDetailItem.result[0].price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rp. '}
                renderText={value => <Text
                  style={styles.textPrice}>{value}</Text>} />
            }
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.btnOrderNow}
              onPress={() => this.props.navigation.navigate('cart')}
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
    backgroundColor: '#F7A8AE'
  },
  itemBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F7A8AE',
    borderBottomLeftRadius: 40
  },
  itemImage: {
    resizeMode: 'cover',
    borderBottomLeftRadius: 40
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 40
  },
  headerDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  titleItem: {
    fontSize: 25,
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

const mapStateToProps = state => {
  return {
    item: state.item,
    review: state.review
  }
}

export default connect(mapStateToProps)(Detail)
