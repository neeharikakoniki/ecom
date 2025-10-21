/*
import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { IMAGES } from '../../constants/images-paths'
import {s, vs} from "react-native-size-matters"
import AppTextInput from '../../inputs/AppTextInput'
import AppText from '../../components/views/AppText'
import AppButton from '../../components/views/buttons/AppButton'



const SiginScreen = () => {
    const [email,setEmail]= useState("")
const [password, setPassword] = useState("")

    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo}/>
            <AppTextInput placeholder='Email' onChangeText={setEmail}/>
            <AppTextInput placeholder='Password' onChangeText={setPassword} secureTextEntry/>
            <AppText>ShopVerse</AppText>
            <AppButton title='Login'/>
            <AppButton title='Sign up'/>




        </AppSafeView>

    )
}

export default SiginScreen

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        paddingHorizontal: sharedPaddingHorizontal,
    },
    logo:{
        height: s(150),
        width:s(150),
        marginBottom:vs(50),
        marginLeft: s(20)
        
    }
})
*/

import { StyleSheet, View, Image } from 'react-native'
import React, { useState } from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { IMAGES } from '../../constants/images-paths'
import { s, vs, ms } from 'react-native-size-matters'
import AppTextInput from '../../inputs/AppTextInput'
import AppText from '../../components/views/AppText'
import AppButton from '../../components/views/buttons/AppButton'

const SigninScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <AppSafeView style={styles.container}>
    
      <View style={styles.circleLightBottom} />
      <View style={styles.circleDarkBottom} />
      <View style={styles.circleLightTop} />
      <View style={styles.circleDarkTop} />

  
      <Image source={IMAGES.appLogo} style={styles.logo} />
  
      <AppText style={styles.title}>ShopVerse</AppText>
      


      <AppTextInput placeholder='Email' onChangeText={setEmail} />
      <AppTextInput placeholder='Password' onChangeText={setPassword} secureTextEntry />

      

  
      <AppButton title='Login' style={styles.button} />
      <AppButton title='Sign up' style={[styles.button, styles.signupButton]} />
    </AppSafeView>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sharedPaddingHorizontal,
    backgroundColor: '#FFFFFF',
  },

  logo: {
    height: s(130),
    width: s(130),
   
  },

  title: {
  fontSize: ms(26),
  fontWeight: '800',
  color: '#2C5E1A',
  marginVertical: vs(15),
  letterSpacing: 1,
  textShadowColor: 'rgba(0, 0, 0, 0.15)',
  textShadowOffset: { width: 1, height: 2 },
  textShadowRadius: 3,
  textTransform: 'uppercase',
  textAlign: 'center',
},

  button: {
    width: '85%',
    borderRadius: 30,
    marginTop: vs(10),
  },

  signupButton: {
    backgroundColor: '#2C5E1A',
  },


  circleLightBottom: {
    position: 'absolute',
    bottom: -vs(100),
    right: -s(80),
    width: s(250),
    height: s(250),
    borderRadius: s(125),
    backgroundColor: 'rgba(185, 235, 195, 0.35)', 
  },
  circleDarkBottom: {
    position: 'absolute',
    bottom: -vs(50),
    right: -s(30),
    width: s(180),
    height: s(180),
    borderRadius: s(90),
    backgroundColor: 'rgba(57, 170, 110, 0.45)', 
  },


  circleLightTop: {
    position: 'absolute',
    top: -vs(80),
    left: -s(70),
    width: s(200),
    height: s(200),
    borderRadius: s(100),
    backgroundColor: 'rgba(185, 235, 195, 0.35)',
  },
  circleDarkTop: {
    position: 'absolute',
    top: -vs(40),
    left: -s(30),
    width: s(140),
    height: s(140),
    borderRadius: s(80),
    backgroundColor: 'rgba(57, 170, 110, 0.45)',
  },
})
