const AppStack = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
    },
    Browse: {
        screen: BrowseStack
    },
    Login: {
        screen: LoginStack
    },
}, {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    shifting: false,
    barStyle: {
        backgroundColor: '#694fad',
    },
    labeled: false,
    tabBarComponent: ({navigation}) => <BottomBar navigation={navigation}/>
})

export default AppStack