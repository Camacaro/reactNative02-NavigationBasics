import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Name from '../profile/components/name';

class Profile extends Component {
    
    handlePress = () => {
        this.props.navigation.navigate('Home');
    }

    static navigationOptions = ({ navigation }) => {
        
        return {
            title: `${navigation.getParam('name')} ${navigation.getParam('age', 23)}`
        }
    }

    setParams = () => {
        this.props.navigation.setParams({
            name: 'Lismar'
        })
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text> Profile </Text>
                <Button title="Ir al home" onPress = { this.handlePress }  />
                <Button title="Cambiar nombre" onPress = { this.setParams }  />

                <Name />
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

export default Profile;


/** si esto fuera un component function
 * const Home = (props) => {
 ...

  const setParams = () => {
    props.navigation.setParams({name: 'Pedro Suarez'});
  };

  ...
};

Home.navigationOptions = ({navigation}) => {
  return {
    title: `${navigation.getParam('name')} ${navigation.getParam('age', 24)}`,
  };
};


export default Home;
 */