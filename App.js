/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/home';
import About from './src/screens/about';
import Profile from './src/screens/profile';
import Login from './src/screens/login';


const AppNavigator = createStackNavigator( {
    Home: {
        screen: Home
    },
    About: {
        screen: About
    },
     : {
        screen: Profile
    },
    Login: {
        screen: Login
    }, 
} );

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

//export default App;
