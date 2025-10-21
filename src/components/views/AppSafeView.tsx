import { Platform, StyleSheet, View } from 'react-native'
import React, { Children, FC, ReactNode } from 'react'
import { AppColors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native';
import { TextStyle, ViewStyle } from 'react-native-size-matters';
import { IS_ANDROID } from '../../constants/constants';

interface AppSafeViewProps{
    children: ReactNode,
    style: ViewStyle
}
const AppSafeView: FC<AppSafeViewProps> = ({children, style}) => {
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
        paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0
    },
    container:{
        flex: 1
    }
})