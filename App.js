import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import TabNavigator from './src/Navigation/TabNavigation';
import { Provider } from 'react-redux';
import store from './src/store/index'
import { View } from 'react-native-web';
import React from 'react';


export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <TabNavigator />
      </View>
    </Provider>
  );
}
