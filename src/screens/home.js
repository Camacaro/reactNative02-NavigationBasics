/* jshint ignore:start */
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Home extends Component {
    
    handlePress = () => {
        // esta propieda ya viene heredada por estar conectada al createStackNavigator
        // console.log(this.props.navigation); 

        // para navegar entre pantallas
        this.props.navigation.navigate('Login');
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