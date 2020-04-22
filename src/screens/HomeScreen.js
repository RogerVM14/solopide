import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import Global from '../../Global'

export default function HomeScreen() {

    const [userInfo, setUserInfo] = useState({ email: '', displayName: '' });
    const url = Global.url;

    // signOutUser = () => {
    //     axios.post(url+'signout')
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(error => console.log(error));
    // }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    useEffect(() => {
        const { email, displayName } = firebase.auth().currentUser;
        setUserInfo({ email: email, displayName: displayName })
    }, []);

    return (
        < View style={styles.container}>
            {
                userInfo
                    ? <View>
                        <Text> Hello! {userInfo.email}</Text>
                        < TouchableOpacity style={styles.button} onPress={signOutUser}>
                            <Text> Cerrar Sesion </Text>
                        </TouchableOpacity>
                    </View>

                    : <Text> Cargando....</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
});