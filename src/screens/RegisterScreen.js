import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Platform } from 'react-native';





export default function RegisterScreen({ navigation }) {

    return (



        < View style={styles.container}>
            < View style={styles.createAccount}>
                <Text style={styles.account}> Crear Cuenta </Text>
            </View>

            < View style={styles.options}>
                <View>
                    <TouchableOpacity style={styles.option}
                        onPress={() => navigation.navigate('RegisterClient')}
                    >
                        < ImageBackground
                            source={require('../assets/img/cliente.png')}
                            style={styles.image}
                        />
                        < Text style={styles.textoption}> Cliente </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.option}
                        onPress={() => navigation.navigate('RegisterCommerce')}
                    >
                        < ImageBackground
                            source={require('../assets/img/comercio.png')}
                            style={styles.image}
                        />
                        < Text style={styles.textoption}> Comercio</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    );
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
    title: {
        fontSize: 18,
        fontWeight: "400",
        marginTop: 10,
        alignSelf: "center"
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 13

    },
    options: {

        justifyContent: "space-between",
        alignItems: "center"
    },
    option: {
        backgroundColor: "#fff",
        height: 100,
        width: 130,
        marginTop: 20,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textoption: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold"
    },
    image: {
        height: 45,
        width: 45,
        resizeMode: "cover"
    }

});