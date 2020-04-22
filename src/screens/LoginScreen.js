import React, { useState } from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase';
import Global from '../../Global';
import axios from 'axios';

export default function LoginScreen({ navigation }) {

    const url = Global.url;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(null)
    const background = { uri: '/Users/roger/Documents/ROGER/PROYECTOREACT/NATIVE/solopide/src/assets/img/bl.png' }




    // handleLogin = () => {


    //     const user =  email;
    //     const pass = password;
    //     firebase.auth().signInWithEmailAndPassword(user, pass).catch(error => setErrorMessage(error.message))
    // }

    handleLogin = () => {
        try {
            axios.post(url + 'signup', { params: { email: email, password: password } })
                .then(console.log('Todo se ejecuto sin problemas..'))
                .catch(e => {
                    console.log(e);
                })
        } catch(error){
            console.log(error);
            
        }
    }


    
    

    return (
            < View style={styles.container}>
                < ImageBackground
                    source={require('../assets/img/bl.png')}
                    style={styles.image}
                >
                    < View style={styles.errorMessage}>
                        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                    </View>


                    < View style={styles.form}>
                        < View>
                            < Text style={styles.inputTitle}> Correo </Text>
                            < TextInput style={styles.input}
                                autoCapitalize="none"
                                onChangeText={email => setEmail(email)}
                                value={email}
                            ></TextInput>
                        </View>

                        < View style={{ marginTop: 32 }}>
                            < Text style={styles.inputTitle}> Contraseña </Text>
                            < TextInput style={styles.input}
                                autoCapitalize="none"
                                secureTextEntry
                                onChangeText={password => setPassword(password)}
                                value={password}
                            ></TextInput>
                        </View>

                        < TouchableOpacity
                            style={styles.button}
                            onPress={handleLogin}
                        >
                            <Text style={{ color: "#fff", fontWeight: "500" }}> Iniciar Sesion </Text>
                        </TouchableOpacity>

                        < TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }} onPress={() => navigation.navigate('Register')}>
                            <Text style={{ color: "#414959", fontSize: 13 }}>
                                ¿Eres nuevo? <Text style={{ fontWeight: "500", color: "#E9446A" }}> Crea una cuenta  </Text>
                            </Text>
                        </TouchableOpacity>

                    </View>


                </ImageBackground>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: "center"
        },
        form: {
            marginBottom: 48,
            marginHorizontal: 30,
            marginTop: 250,

        },
        error: {
            color: "#E9446A",
            fontSize: 13,
            fontWeight: "600",
            textAlign: "center",

        },
        inputTitle: {
            color: "#8A8F9E",
            fontSize: 10,
            textTransform: "uppercase"
        },
        input: {
            borderBottomColor: "#8A8F9E",
            borderBottomWidth: StyleSheet.hairlineWidth,
            height: 40,
            width: 300,
            fontSize: 15,
            color: "#161F3D"
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
        errorMessage: {
            height: 80,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 30,
            top: 130
        }


    });