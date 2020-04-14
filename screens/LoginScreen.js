import React from 'react';
import {Button} from 'react-native';
import { Container, Text, Form, Item, Input, Content} from 'native-base';
import { StyleSheet } from 'react-native';

export default function Login({ navigation }) {
    return (

        <Container style={styles.container}>
            <Text style={styles.inputform}> Hola mundo </Text>
            < Button 
                onPress={() => navigation.navigate('Home', { name: 'roger', age: '24' })}
                title="Home Screen"
            >

            </Button>
        </Container>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    inputform: {
        color: "black"
    }
});


