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
  import {
    Colors,
    Header,
  } from 'react-native/Libraries/NewAppScreen';
  import codePush from 'react-native-code-push';
  import type { PropsWithChildren } from 'react';

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

//   function codePushStatusDidChange(syncStatus: codePush.SyncStatus) {
//     switch(syncStatus) {
//       case codePush.SyncStatus.CHECKING_FOR_UPDATE:
//         //this.setState({ syncMessage: "Checking for update." });
//         console.log(70, "Checking for update.");
//         break;
//       case codePush.SyncStatus.DOWNLOADING_PACKAGE:
//         //this.setState({ syncMessage: "Downloading package." });
//         console.log(74, "Downloading package.");
//         break;
//       case codePush.SyncStatus.AWAITING_USER_ACTION:
//         //this.setState({ syncMessage: "Awaiting user action." });
//         console.log(78, "Awaiting user action.");
//         break;
//       case codePush.SyncStatus.INSTALLING_UPDATE:
//         //this.setState({ syncMessage: "Installing update." });
//         console.log(82, "Installing update.");
//         break;
//       case codePush.SyncStatus.UP_TO_DATE:
//         //this.setState({ syncMessage: "App up to date.", progress: false });
//         Alert.alert('App is up to date.');
//         console.log(86, "App is up to date.");
//         break;
//       case codePush.SyncStatus.UPDATE_IGNORED:
//         //this.setState({ syncMessage: "Update cancelled by user.", progress: false });
//         console.log(90, "Update cancelled by user.");
//         break;
//       case codePush.SyncStatus.UPDATE_INSTALLED:
//         //this.setState({ syncMessage: "Update installed and will be applied on restart.", progress: false });
//         console.log(94, "Update installed and will be applied on restart.");
//         break;
//       case codePush.SyncStatus.UNKNOWN_ERROR:
//         //this.setState({ syncMessage: "An unknown error occurred.", progress: false });
//         console.log(98, "An unknown error occurred.");
//         break;
//     }
//   }
  
  
//   function syncImmediate() {
//     var updateDialogOptions = {
//       updateTitle: "Hay una actualizacion disponible",
//       optionalUpdateMessage: "Instalar?",
//       optionalIgnoreButtonLabel: "NO",
//       optionalInstallButtonLabel: "SI",
//   };
//     codePush.sync({
//         updateDialog: updateDialogOptions,
//         installMode: codePush.InstallMode.IMMEDIATE
//     }, (status) => codePushStatusDidChange(status)
//     );
//   }

  const updateApp = async () => {
    try {
       let update = await codePush.checkForUpdate();
       if (update) {
         codePush.sync(
           {
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
         Alert.alert('No updates available');
       }
    } catch (error) {
       console.log('An error occurred: ', error);
    }
   };

function Home() {

    const buttonstyle = {
        backgroundColor: "green",
        padding: 30
      }

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

export default codePush(codePushOptions)(Home);
