import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Splash, Home, Details} from "../pages";

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Splash" component = {Splash} />
            <Stack.Screen name = "Home" component = {Home} />
            <Stack.Screen name = "Details" component = {Details} />
        </Stack.Navigator>
    )

}

export default Router;