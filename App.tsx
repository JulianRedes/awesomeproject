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
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import CodePush from 'react-native-code-push';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onButtonPress = () => {
    CodePush.sync({
      updateDialog: { 
        title: "Hay una nueva actualizacion disponible!",
        optionalInstallButtonLabel: "Instalar",
        optionalIgnoreButtonLabel: "Mas tarde",
        optionalUpdateMessage: "¿Deseas descargar la nueva actualizacion?",
        appendReleaseDescription: true, 
      },
      installMode: CodePush.InstallMode.IMMEDIATE,
    });
    CodePush.restartApp(true);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <TouchableOpacity onPress={onButtonPress}>
            <Text>Check for updates</Text>
          </TouchableOpacity>
        </View>
        <Text>Probando el mensaje de las actualizacionnnn</Text>
        <Text>Probando el mensaje de las actualizacionnnn</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CodePush(App);
