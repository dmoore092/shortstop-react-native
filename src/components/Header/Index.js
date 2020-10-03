import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import logo from '../../assets/images/black.png'
import profile from '../../assets/images/profile-default.png'

const Header = ({title}) => {
  let platformStyle = Platform.OS === 'ios' ? iosStyles: androidStyles;
  // console.log(platformStyle)
  return(
    <View style={platformStyle.header}>
      <Image source={logo} style={platformStyle.logo} />
      <Text style={platformStyle.text}>{title}</Text>
      <TouchableOpacity>
        <Image source={profile} style={platformStyle.userImage} />
      </TouchableOpacity>
    </View>
  )
}

Header.defaultProps = {
  title: "Athletic Prospects",
}
const iosStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 100,
    backgroundColor:  '#bb0a1e',
    // backgroundColor:  'green',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 40,
    marginLeft: 20,
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 23,
    marginTop: 50,
    // marginRight: 120,
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
    marginTop: 40,
  }
})



const androidStyles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor:  '#bb0a1e',
    justifyContent: 'flex-end',
    marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10,
    marginTop: 14,
  },
  text: {
    color: 'white',
    fontSize: 23,
    marginTop: 20,
    // marginRight: 120,
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 13,
    marginRight: 10,
  }
})
const styles = StyleSheet.create({
  
})

export default Header;