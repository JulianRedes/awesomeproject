import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, Alert, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Styles from '../components/Styles';
import Analytics from 'appcenter-analytics';
import Icon from 'react-native-vector-icons/FontAwesome';

const mensaje = () => {
    Alert.alert('No hay mas modal 3');
    Analytics.trackEvent('Mensaje Modal', {Category: 'modal3', Screen: 'profile3'});
};

   function ProfileScreen() {
    // const [modalVisible, setModalVisible] = useState(false);

    // const NuevoModal = () => (
    //       <Modal
    //         animationType="slide"
    //         transparent={true}
    //         visible={modalVisible}
    //         onRequestClose={() => {
    //           Alert.alert('Modal has been closed.');
    //           setModalVisible(!modalVisible);
    //         }}>
    //         <View style={Styles.centeredView}>
    //           <View style={Styles.modalView}>
    //             <Text style={Styles.modalText}>Titulo mensajes</Text>
    //             <Pressable
    //               style={[Styles.button, Styles.buttonClose]}
    //               onPress={() => setModalVisible(!modalVisible)}>
    //               <Text >Cerrar modal</Text>
    //             </Pressable>
    //           </View>
    //         </View>
    //       </Modal>
    //     );
    

    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#88ed14' }}>
         <Text testID='profileID' accessibilityLabel='labelTextProfile' >Profile Screen</Text>
         {/* <NuevoModal /> */}
         <Button testID='nuevoID' accessibilityLabel='labelNuevo' title='Nuevo' onPress={mensaje}/>
       </View>
    );
   }

   
   
   function SettingsScreen() {
      const [displayText, setDisplayText] = useState('');
      const [inputText, setInputText] = useState('');

      const handleButtonPress = () => {
         setDisplayText(inputText);
       };

       const handleInputChange = (text: string) => {
         setInputText(text);
       };

    return (
       <>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#509fd4' }}>
         <Text testID='screenID' accessibilityLabel='labelScreen' style={{padding: 20}}>Settings Screen</Text>
         <TextInput testID='textInput' accessibilityLabel='labelTextInput' placeholder='escribe aqui' style={Styles.input}
          onChangeText={handleInputChange} value={inputText}/>
         <Button testID='settingsButton' accessibilityLabel='labelEnviar' title='enviar' onPress={handleButtonPress}/>
       </View>
       <View style={{ flex: 0.3, borderWidth: 5, backgroundColor: '#FFFFFF' }}>
       <Text testID='settingsTextID' accessibilityLabel='labelTextSettings'>{displayText}</Text>
       </View>
       </>
    );
   }

   const Tab = createBottomTabNavigator();

function TabNavigator() {
 return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
       options={{
         tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color="#0000FF" />
          ),
          tabBarTestID: 'home',
          tabBarAccessibilityLabel: 'labelHome',
         }} />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
         tabBarIcon: ({ color, size }) => (
            <Icon name="user-circle-o" size={30} color="#0000FF" />
          ),
          tabBarTestID: 'profile',
          tabBarAccessibilityLabel: 'labelProfile',
         }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
         tabBarIcon: ({ color, size }) => (
            <Icon name="sun-o" size={30} color="#000000" />
          ),
          tabBarTestID: 'settings',
          tabBarAccessibilityLabel: 'labelSettings',
         }}
      />
    </Tab.Navigator>
 );
}

export default TabNavigator;