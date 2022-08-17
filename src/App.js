import { StyleSheet, Text, View,
  TouchableOpacity, Image, FlatList, ActivityIndicator, Alert} from 'react-native'
import React, { PureComponent }from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Router from './router'


const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App;