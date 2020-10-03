import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet, Dimensions } from 'react-native'
import banner from '../assets/images/mainbanner.jpg'


const Home = () => {
    const screenHeight = Dimensions.get('window').height
    return(
        <View style={{flex: 1}}>
            <ScrollView style={styles.view}>
                <Image source={banner} style={styles.banner}/>
                <Text style={styles.header}>
                    At Athletic Prospects
                </Text>
                <Text style={styles.text}>
                    We strive to provide High School and JUCO athletes the tools to successfully promote themselves to college coaches by assisting athletes through the recruiting process. 
                    Our goal is to be a mentor-leader to student-athletes to teach them the importance of academics and athletics while showing strong leadership characteristics to be 
                    successful on and off the playing field.
                </Text>
            </ScrollView>
        </View>
    )
}
  

const styles = StyleSheet.create({
    view: {
        flexGrow: 1,
        height: 1000
    },
    banner: {
        flex: 1,
        width: null,
        height: 300,
        resizeMode: 'contain'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    text: {
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Home;