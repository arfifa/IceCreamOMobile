import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { LaunchPage, NavigationLaunchPage, Login, Register, Home, Wishlist, Profile, Detail, Cart, Checkout } from '../containers/pages';

const AuthStack = createStackNavigator(
  {
    LaunchPage,
    NavigationLaunchPage,
    Login,
    Register,
  },
  {
    headerMode: 'none',
    initialRouteName: 'LaunchPage'
  }
)

const BottomNavigationStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        < Icon
          name="home-circle"
          color={tintColor}
          size={25}
        />
      )
    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      tabBarLabel: 'Wishlist',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="heart-multiple-outline"
          color={tintColor}
          size={25}
        />
      )
    }
  },
  cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="cart-arrow-down"
          color={tintColor}
          size={25}
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle-outline"
          color={tintColor}
          size={25}
        />
      )
    }
  },
},
  {
    tabBarOptions: {
      activeTintColor: '#84F4F1',
      inactiveTintColor: '#FFECAC',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#F17880',
        borderTopWidth: 2,
        borderTopColor: '#FFECAC',
        paddingVertical: 6,
        height: 60
      }
    }
  },
)

const AppStackNavigation = createStackNavigator(
  {
    BottomNavigationStack,
    Detail,
    Checkout
  },
  {
    headerMode: 'none'
  }
)

const Router = createSwitchNavigator({
  AuthStack,
  AppStackNavigation
},
  {
    initialRouteName: 'AppStackNavigation',
  }
)

export default createAppContainer(Router);
