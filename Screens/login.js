import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Navigator from '../routes/homeStack';

export default class Login extends React.Component {

    _toHome() {
        this.setState
        this.props.navigation.navigate('Browse')
      }

    render() {
        return (
            <View style={styles.text}>
                <TouchableOpacity onPress={this._toHome.bind(this)}>
                    <Text style={styles.goHome}>go to home page</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: '40%'
    },
    goHome: {
        backgroundColor: 'white',
        color: '#ff706e',
        width: "70%",
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: '13%',
        padding: "2%",
        fontSize: 30,
        marginTop: '35%'
      },
})