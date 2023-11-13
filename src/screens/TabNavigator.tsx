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
         <Text>Profile Screen</Text>
         {/* <NuevoModal /> */}
         <Button title='Nuevo' onPress={mensaje}/>
       </View>
    );
   }

   
   
   function SettingsScreen() {
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#509fd4' }}>
         <Text style={{padding: 20}}>Settings Screen</Text>
         <TextInput placeholder='escribe aqui' style={Styles.input}/>
       </View>
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
         }} />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
         tabBarIcon: ({ color, size }) => (
            <Icon name="user-circle-o" size={30} color="#0000FF" />
          ),
         }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
         tabBarIcon: ({ color, size }) => (
            <Icon name="sun-o" size={30} color="#000000" />
          ),
         }}
      />
    </Tab.Navigator>
 );
}

export default TabNavigator;