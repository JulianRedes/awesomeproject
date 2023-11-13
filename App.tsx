/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/screens/TabNavigator';




function App() {

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

//let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

export default App;

