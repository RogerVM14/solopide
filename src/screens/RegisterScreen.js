import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase';

export default function RegisterScreen({ navigation }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(null);

    handleCreateAccount = () => {
        const user = email;
        const pass = password;
        firebase.auth().createUserWithEmailAndPassword(user, pass).catch(error => setErrorMessage(error.message));

    }

    return (
        < View style={styles.container}>
            < View style={styles.createAccount}>
                <Text style={styles.account}> Crear Cuenta </Text>
            </View>


            < View style={styles.errorMessage}>
                {/* {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>} */}
                < Text> Error </Text>
            </View>


            < View style={styles.form}>
                < View style={styles.account}>
                    <Text style={styles.title}> Personal </Text>
                </View>

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

                < View style={styles.account}>
                    <Text style={styles.title}> Comercio </Text>
                </View>
                < View style={{ marginTop: 32 }}>
                    < Text style={styles.inputTitle}> Nombre </Text>
                    < TextInput style={styles.input}
                        autoCapitalize="none"
                    //onChangeText={password => setPassword(password)}
                    //value={password}
                    ></TextInput>
                </View>
                < View style={{ marginTop: 32 }}>
                    < Text style={styles.inputTitle}> Telefono </Text>
                    < TextInput style={styles.input}
                        autoCapitalize="none"
                    //onChangeText={password => setPassword(password)}
                    //value={password}
                    ></TextInput>
                </View>

                < View style={{ marginTop: 32 }}>
                    < Text style={styles.inputTitle}> Categoria </Text>
                    < TextInput style={styles.input}
                        autoCapitalize="none"
                    //onChangeText={password => setPassword(password)}
                    //value={password}
                    ></TextInput>
                </View>


                < TouchableOpacity
                    style={styles.button}
                    // onPress={handleCreateAccount}
                >
                    <Text style={{ color: "#fff", fontWeight: "500" }}> Crear Cuenta </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
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
    createAccount: {
        justifyContent: "center",
        alignItems: "center"
    },
    account: {
        top: 10,
        fontSize: 30,
        fontWeight: "600"
    },
    title: {
        marginBottom: 25,
        fontSize: 18,
        fontWeight: "400",
        marginTop: 10
    }

});