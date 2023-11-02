import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';

   
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