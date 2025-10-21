import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import AppText from './src/components/views/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
    <AppSafeView>
      <AppText variant="medium" >Hello Neeha</AppText>
      <AppText variant= "bold">Hello Neeha</AppText>
      <StatusBar style="auto" />
    </AppSafeView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});
