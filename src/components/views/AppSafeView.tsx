import { Platform, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native';


const AppSafeView = ({children, style}) => {
  return (
    <SafeAreaView style = {styles.safearea}>
      <View style = { [styles.container, style]}>{children}</View>
    </SafeAreaView>
  )
}

export default AppSafeView

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0
    },
    container:{
        flex: 1
    }
})