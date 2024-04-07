import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import { Provider } from 'react-redux';
import store from './src/store/index'
import { View } from 'react-native';
import React from 'react';
import MainNavigator from './src/Navigation/MainNavigator';
import {init} from "./src/db/index"


init()
  .then(()=> console.log("Base de datos inicializada"))
  .catch((err)=>{
    console.log("error")
    console.log(err)
  })

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    </Provider>
  );
}
