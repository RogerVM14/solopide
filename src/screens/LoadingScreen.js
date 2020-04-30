import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

export default function LoadingScreen( { navigation } ) {

    useEffect(() =>{
        //firebase.auth().onAuthStateChanged( user => { navigation.navigate( user ? "App": "Auth")})
        setTimeout(() => {navigation.navigate('Home')}, 2000)
    }, []);



    return (
        < View style={styles.container}>
            <Text>
                Loading Screen
            </Text>
            < ActivityIndicator  size="large"/> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});