import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Header from "./components/Header"

const App = () => {
  return(
    <View style={styles.container}>
      <Header title="Hello World" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
  }
})

export default App;