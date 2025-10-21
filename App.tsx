import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import AppText from './src/components/views/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import FlashMessage, { showMessage} from 'react-native-flash-message';
import AppTextInput from './src/inputs/AppTextInput';
import SiginScreen from './src/screens/auth/SiginScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';


export default function App() {
  return (
    <>
    <FlashMessage position={"top"}/>

    <SafeAreaProvider>
    <AppSafeView>
      <SignUpScreen/>
    </AppSafeView>
    </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
