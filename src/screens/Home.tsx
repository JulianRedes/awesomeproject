import React, { useState } from 'react';
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
  import {
    Colors,
    Header,
  } from 'react-native/Libraries/NewAppScreen';
  import codePush from 'react-native-code-push';
  import type { PropsWithChildren } from 'react';
  import Styles from '../components/Styles';

  type SectionProps = PropsWithChildren<{
    title: string;
  }>;

  function Section({ children, title }: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={Styles.sectionContainer}>
        <Text
          style={[
            Styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            Styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  }

  const updateApp = async () => {
    var updateDialogOptions = {
       title: "Hay una actualizacion disponible",
      optionalUpdateMessage: "Instalar?",
      optionalIgnoreButtonLabel: "NO",
      optionalInstallButtonLabel: "SI",
  };

    try {
       let update = await codePush.checkForUpdate();
       if (update) {
         codePush.sync(
           {  updateDialog: updateDialogOptions,
             installMode: codePush.InstallMode.IMMEDIATE,
           },
           (status) => {
             switch (status) {
               case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                 console.log('Downloading package...');
                 break;
               case codePush.SyncStatus.INSTALLING_UPDATE:
                 console.log('Installing update...');
                 break;
               case codePush.SyncStatus.UP_TO_DATE:
                 console.log('App is up to date!');
                 Alert.alert('App ya actualizada!');
                 break;
               case codePush.SyncStatus.UPDATE_IGNORED:
                 console.log('User decided to ignore the update');
                 break;
               case codePush.SyncStatus.UPDATE_INSTALLED:
                 console.log('Update installed and will be applied at the next restart!');
                 break;
               case codePush.SyncStatus.UNKNOWN_ERROR:
                 console.log('An unknown error occurred');
                 break;
             }
           },
         );
       } else {
         console.log('No updates available');
         Alert.alert('No hay actualizaciones disponibles');
       }
    } catch (error) {
       console.log('An error occurred: ', error);
    }
   };

function Home() {
  const [welcomeMessage, setWelcomeMessage] = useState('');

    const buttonstyle = {
        backgroundColor: "green",
        padding: 30
      }

  const handleButtonClick = () => {
    setWelcomeMessage('Hola, mundo');
  };

  return (

    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          <Section title="Seccion 2">
            <TouchableOpacity style={buttonstyle} onPress={updateApp}>
              <Text style={Styles.syncButton}>Presionar para obtener update</Text>
            </TouchableOpacity>
          </Section>

          <Section title="Seccion 3">
          <Button accessibilityLabel='labelBoton' testID='botonMensajeHomeID' title="Mostrar mensaje" onPress={handleButtonClick} />
          <View style={{flex: 1, padding: 15}}>
          <Text accessibilityLabel='labelText' testID='homeTextViewID'>{welcomeMessage}</Text>
          </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

export default codePush(codePushOptions)(Home);
