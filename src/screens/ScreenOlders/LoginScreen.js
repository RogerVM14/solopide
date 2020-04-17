import React, { useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import LoginForm from '../../components/LoginForm';
/* Firebase configuration  */
import * as firebase from 'firebase';


const background = { uri: '/Users/roger/Documents/ROGER/PROYECTOREACT/NATIVE/solopide/src/assets/img/bl.png' }






export default function Login({ navigation }) {

//Use Effect Hook

useEffect(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyDeH2KF8_09jHamO-tuNxP_1FSYvrBCrfw",
        authDomain: "solopide-d85e8.firebaseapp.com",
        databaseURL: "https://solopide-d85e8.firebaseio.com",
        projectId: "solopide-d85e8",
        storageBucket: "solopide-d85e8.appspot.com",
        messagingSenderId: "1000485570530",
        appId: "1:1000485570530:web:dd4259465472618d195bbb",
        measurementId: "G-LWJHMGPETT"
    };
}, []);

//Use Effect Hook




    return (

        < View style={styles.container}>
            < ImageBackground source={background} style={styles.image}>
                < LoginForm />
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent:"center",

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems:"center"
      }

});


