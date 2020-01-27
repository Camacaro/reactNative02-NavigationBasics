import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Login extends Component {
    
    handlePress = () => {
        this.props.navigation.navigate('About');
        // {this.props.navigation.state.params.nombre}
    }

    render() {
        return (
            <View style = {styles.container}>
                {/* {this.props.navigation.state.params.nombre} */}
                <Text> Login   </Text>
                <Button title="Ir al about" onPress = { this.handlePress } />
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

export default Login;