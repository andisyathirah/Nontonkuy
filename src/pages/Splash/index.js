import { StyleSheet, Text, View, Image} from 'react-native'
import React, { useEffect } from 'react'
import {Logo} from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000)
    })
  return (
    <View style={styles.container}>
    <Image
        style={styles.logo}
        source={Logo}
    />
</View>
  )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        paddingTop: 10,
        width: 300,
        height: 400,
      }
})