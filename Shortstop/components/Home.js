import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ConsumeApi from "../consumeApi"



const Home = () => {
    const { loading, error, data } = ConsumeApi('/index/')
    return(
        <View>
            <Text>
                {data[0].header}
            </Text>
            <Text>
                {data[0].text}
            </Text>
        </View>
    )
}
  

// const styles = StyleSheet.create({
// header: {
//     height: 60,
//     padding: 15,
//     backgroundColor: 'darkslateblue'
// },
// text: {
//     color: 'white',
//     fontSize: 23,
//     textAlign: 'left'
// }
// })

export default Home;