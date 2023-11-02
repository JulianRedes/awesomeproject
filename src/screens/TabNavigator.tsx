import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Styles from '../components/Styles';

   
   function ProfileScreen() {
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Profile Screen</Text>
       </View>
    );
   }

   
   
   function SettingsScreen() {
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Settings Screen</Text>
         <TextInput placeholder='escribe aqui' style={Styles.input}/>
       </View>
    );
   }

   const Tab = createBottomTabNavigator();

function TabNavigator() {
 return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
 );
}

export default TabNavigator;