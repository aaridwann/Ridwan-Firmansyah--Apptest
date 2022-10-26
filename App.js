import React, { useEffect } from 'react'
import MainScreen from './src/Screen'
import store from './src/Redux/store'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
}