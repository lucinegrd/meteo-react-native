import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import {View, Button, Text, StyleSheet} from 'react-native'

function About({navigation}) {
    return (
        <View>
            <Text style={style.title}>A propos</Text>
            <Button
                title="Rechercher"
                onPress={() => navigation.navigate('Search')} 
            />  
        </View>
    )
}

const style = StyleSheet.create ({
    title : {
        fontSize:22,
        margin:10,
    }
})


export default About