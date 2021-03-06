/* jshint ignore:start */
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackActions } from 'react-navigation';

class Home extends Component {
    
    handlePress = () => {
        // esta propieda ya viene heredada por estar conectada al createStackNavigator
        // console.log(this.props.navigation); 

        // para navegar entre pantallas
        // this.props.navigation.navigate('Login');

        // Se puede hacer asi
        // this.props.navigation.dispatch({
        //     type: 'NAVIGATE',
        //     payload: {
        //         screen: 'Login',
        //         params: {
        //             name: 'jesus 23'
        //         }
        //     }
        // });

        // o esto 
        // para esto se puede usar el pop, y todas las demas
        this.props.navigation.dispatch( StackActions.push({
            routeName: 'Login'
        }) );

    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text> Home </Text>
                <Button 
                    title="Ir al login"  
                    onPress = { this.handlePress }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;
/* jshint ignore:end */