import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
// import Landing from './src/screens/Landing'
import Login from './src/screens/Login'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}
