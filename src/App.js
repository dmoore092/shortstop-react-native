import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Header from "./components/Header/Index"
import Home from "./components/Home"
import Footer from "./components/Footer/Index"

const App = () => {
  return(
    <View style={styles.container}>
      <Header />
      <Home />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }
})

export default App;