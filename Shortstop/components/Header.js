import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = ({title}) => {
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {
    title: 'Athletic Prospects'
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor:  '#bb0a1e'
  },
  text: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center'
  }
})

export default Header;