import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';



export default function LoginForm() {

    const [user, setUser] = useState();
    const [pass, setPass] = useState();


    return (
        < View style={styles.LoginForm}>
            < Text style={styles.title}> Solo Pide!</Text>

            < TextInput
                placeholder="Usuario"
                style={styles.inputs}
                placeholderTextColor="gray"
                autoCapitalize="none"
                onChangeText={(text) => { setUser(text) }}
                value={user}
            />

            < TextInput
                placeholder="Contraseña"
                style={styles.inputs}
                placeholderTextColor="gray"
                autoCapitalize="none"
                onChangeText={(text) => { setPass(text) }}
                value={pass}
                secureTextEntry
            />

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="black"
                style={styles.touchable}
                onPress={() => alert(user + " --> " + pass)}
            >
                <Text style={styles.sesion}> Iniciar Sesion </Text>
            </TouchableHighlight>


        </View>
    );
}

const styles = StyleSheet.create({
    LoginForm: {
        flex: 1,
        flexDirection: "column",
        width: 300,
        justifyContent: "center",
        alignItems: "center",

    },
    inputs: {
        width: 320,
        height: 40,
        color: "black",
        backgroundColor: "#ffffff",
        borderRadius: 18,
        marginBottom: 15,
        textAlign: "center",
        shadowColor: "#000",
        shadowOpacity: 0.30,
        shadowRadius: 3.0,
        elevation: 4,
        borderColor: "#ffffff",
        shadowOffset: { width: 0, height: 2 },
        justifyContent: "center",
      

    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#110133",
        marginBottom: 20,
        marginTop: 100
    },
    touchable: {
        backgroundColor: "#110133",
        height: 40,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        marginTop: 10,
        alignSelf:"center"
    },
    sesion: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight:"500"
    }

})