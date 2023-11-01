/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function mensajeBoton() {

  Alert.alert('boton 1');
  
}

function codePushStatusDidChange(syncStatus: codePush.SyncStatus) {
  switch(syncStatus) {
    case codePush.SyncStatus.CHECKING_FOR_UPDATE:
      //this.setState({ syncMessage: "Checking for update." });
      console.log(70, "Checking for update.");
      break;
    case codePush.SyncStatus.DOWNLOADING_PACKAGE:
      //this.setState({ syncMessage: "Downloading package." });
      console.log(74, "Downloading package.");
      break;
    case codePush.SyncStatus.AWAITING_USER_ACTION:
      //this.setState({ syncMessage: "Awaiting user action." });
      console.log(78, "Awaiting user action.");
      break;
    case codePush.SyncStatus.INSTALLING_UPDATE:
      //this.setState({ syncMessage: "Installing update." });
      console.log(82, "Installing update.");
      break;
    case codePush.SyncStatus.UP_TO_DATE:
      //this.setState({ syncMessage: "App up to date.", progress: false });
      Alert.alert('App is up to date.');
      console.log(86, "App is up to date.");
      break;
    case codePush.SyncStatus.UPDATE_IGNORED:
      //this.setState({ syncMessage: "Update cancelled by user.", progress: false });
      console.log(90, "Update cancelled by user.");
      break;
    case codePush.SyncStatus.UPDATE_INSTALLED:
      //this.setState({ syncMessage: "Update installed and will be applied on restart.", progress: false });
      console.log(94, "Update installed and will be applied on restart.");
      break;
    case codePush.SyncStatus.UNKNOWN_ERROR:
      //this.setState({ syncMessage: "An unknown error occurred.", progress: false });
      console.log(98, "An unknown error occurred.");
      break;
  }
}


function syncImmediate() {
  var updateDialogOptions = {
    updateTitle: "Hay una actualizacion disponible",
    optionalUpdateMessage: "Instalar?",
    optionalIgnoreButtonLabel: "NO",
    optionalInstallButtonLabel: "SI",
};
  codePush.sync({
      updateDialog: updateDialogOptions,
      installMode: codePush.InstallMode.IMMEDIATE
  });
}


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const buttonstyle = {
    backgroundColor: "green",
    padding: 30
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
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>MOBILE 3 CODEPUSH NUEVA ACTUALIZACION TEST</Text>
          </Section>
          <Section title="Seccion 2">
          <TouchableOpacity style={buttonstyle} onPress={syncImmediate}>
          <Text style={styles.syncButton}>Presionar para obtener update</Text>
        </TouchableOpacity>
        </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  syncButton: {
    color: "white",
    fontSize: 17
  },
});

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

export default codePush(codePushOptions)(App);

