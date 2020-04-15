import React from 'react'
import {Text,View, StyleSheet, Button} from 'react-native'

export default class Login extends React.Component{
    render(){
        return(
            <View style={styles.text}>
                <Text>hewwo</Text>
                <Button title="Go Back"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: '40%'
    }
})