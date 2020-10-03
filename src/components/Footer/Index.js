import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import logo from '../../assets/images/black.png'
import profile from '../../assets/images/profile-default.png'

const Header = ({title}) => {
  let platformStyle = Platform.OS === 'ios' ? iosStyles: androidStyles;
  return(
    <View style={platformStyle.footer}>
        <TouchableOpacity>
            <Text style={platformStyle.textLeft}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={platformStyle.textCenter}>Browse Atheletes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={platformStyle.textRight}>Login</Text>
        </TouchableOpacity>
    </View>
  )
}

Header.defaultProps = {
  title: "Athletic Prospects",
  textStyles: {

  }
}
const iosStyles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor:  'black',
    justifyContent: 'space-between',
  },
  textLeft: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
    paddingLeft: 30
  },
  textCenter: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
  },
  textRight: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
    paddingRight: 30
  },
})



const androidStyles = StyleSheet.create({
  footer: {
    height: 80,
    backgroundColor:  'black',
    justifyContent: 'flex-end',
    marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLeft: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
    paddingLeft: 30
  },
  textCenter: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
  },
  textRight: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
    paddingRight: 30
  },
})
const styles = StyleSheet.create({
  
})

export default Header;