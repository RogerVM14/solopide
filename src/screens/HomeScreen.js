import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

export default function HomeScreen() {

    const [userInfo, setUserInfo] = useState({ email: '', displayName: '' })

    useEffect(() => {
        const { email, displayName } = firebase.auth().currentUser;
        setUserInfo({ email: email, displayName: displayName })
    }, []);

    return (
        < View style={styles.container}>
            {
                userInfo
                    ? <Text> {userInfo.email}</Text>
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
    }
});