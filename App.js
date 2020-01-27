/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/home';
import About from './src/screens/about';
import Profile from './src/screens/profile';
import Login from './src/screens/login';
import { Text } from 'react-native';

// initialRouteName: es el path por defecto a donde entrara al cargar la pagina
// defaultNavigationOptions: reemplaza el titulo en todos los componentes
// initialRouteKey: es agregarle un key al default route
// headerTitleAllowFontScaling: esta config es para habilitar el tamaño de letras, ejemplo su aumento el tamaño de letras en el telefono esta respondera a ello, sino se mantiene por defecto
// headerBackTitle: solo funciona en IOS
// headerBackImage: reempolzar la imagen flecha de regreso- Ctrl + mayus -> insert emoji
// gestureEnabled: habilitar el efecto de deslizado para volver, en vez de tocar la flecha de atras

// headerMode: efecto de como se muestra el header
// mode: con esta puedo ponerla como un card o modal, solo funciona en IOS
// cardStyle: para ponerle estilo a la tarjeta o pantalla
const AppNavigator = createStackNavigator( {
    Home: {
        path: 'home/',
        screen: Home,
        navigationOptions: {
            title: 'Esta es la Home'
        }
    },
    About: {
        screen: About
    },
    Profile : {
        screen: Profile
    },
    Login: {
        screen: Login
    }, 
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'Un titulo generico',
        headerTitleAllowFontScaling: true,
        // eslint-disable-next-line react/display-name
        // header: () => <Text> Esto es el header </Text> , 
        headerBackTitle: 'Atras',
        gestureEnabled: true,
        // eslint-disable-next-line react/display-name
        headerBackImage: () => <Text> 😍 </Text>,
        cardStyle: {
            borderWidth: 5,
            backgroundColor: 'yellow'
        },
    },
    initialRouteKey: 'home',
    initialRouteParams: {
        nombre: 'Jesus Camacaro'
    },
    // opciones visuales
    // headerMode: 'float', 'screen', 'none'
    headerMode: 'screen',
    mode: 'card',
    
} );



const Main = createStackNavigator(
    {
        Main: {
            screen: AppNavigator
        },
        Login: {
            screen: Login
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);

const AppContainer = createAppContainer(Main);

export default AppContainer;

//export default App;
