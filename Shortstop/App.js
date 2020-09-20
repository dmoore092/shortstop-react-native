import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Header from "./components/Header"
import Home from "./components/Home"

const App = () => {
  return(
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 40,
  }
})

export default App;