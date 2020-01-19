import React, { Component } from 'react'
import Routes from './src/config/router'

import { Provider } from 'react-redux'
import storage from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = storage()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    )
  }
}
