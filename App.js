import { View, Text } from 'react-native'
import React from 'react'
import MainScreen from './src/Screen'
import store from './src/Redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
}