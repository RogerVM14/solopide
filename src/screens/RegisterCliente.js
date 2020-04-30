import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Global from '../../Global'
import * as firebase from 'firebase';
import axios from 'axios';


export default function RegisterClient() {
    

    const url = Global.url;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(null);


    // handleCreateAccount = ({navigation}) => {
    //     const user = email;
    //     const pass = password;
    //     firebase.auth().createUserWithEmailAndPassword(user, pass).catch(error => setErrorMessage(error.message));
    // }

    
    handleCreateAccount = () =>{
        const email = email;
        const password = password;
        
        axios.post(url+'/signup', {
            email: 'roger.vazquezas@gmail.com',
            password: 'Flintstone'
          })
          .then(function (response) {
            setErrorMessage(null)            
          })
          .catch(function (error) {
            const Error = error.response.data['error']
            setErrorMessage(Error)
          });
    }



    return (
        < View style={styles.container}>
            < View style={styles.createAccount}>
                <Text style={styles.account}> Crear Cuenta </Text>
            </View>

            < View style={styles.errorMessage}>
                {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            </View>

            < View style={styles.form}>


                < View style={{ marginTop: 32 }}>
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
                    onPress={handleCreateAccount}
                >
                    <Text style={{ color: "#fff", fontWeight: "500" }}> Crear Cuenta </Text>
                </TouchableOpacity>

            </ View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 50,
        marginTop: 50,
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
        width: 250,
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
    createAccount: {
        justifyContent: "center",
        alignItems: "center"
    },
    account: {
        top: 10,
        fontSize: 30,
        fontWeight: "600"
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 13

    },



});