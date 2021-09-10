import React, {useState, useEffect} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/navigation';

import  API_KEY from "./apikey";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const url = "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=" + API_KEY;

const App = () => {
  return(
    <NavigationContainer>
      <Navigation />
    </NavigationContainer> 
    // <Text>Hello World</Text>
  )
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

export default App;