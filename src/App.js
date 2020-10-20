import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, Image, StyleSheet } from 'react-native'

import TopBar from "./components/TopBar/Index"
import Browse from "./screens/tabs/Browse"
import Login from "./screens/tabs/Login"
import Home from "./components/Home"

let Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Browse" component={Browse} />
        <Tabs.Screen name="Login" component={Login} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }
})