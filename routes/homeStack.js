import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from  '@react-navigation/native';
import frontpage from '../Screens/frontpage';
import Login from '../Screens/login';

const screens = {
    Home: {
        screen: frontpage
    },
    Login: {
        screen: Login
    }
}

const HomeStack = createStackNavigator(screens); 

export default createAppContainer(HomeStack);