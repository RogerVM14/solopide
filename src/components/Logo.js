import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';cd  

export default function Logo() {
    return (
        < View style={styles.container}>

            <Image
                style={styles.imageLogo}
                source={ require ('/Users/roger/Documents/ROGER/PROYECTOREACT/NATIVE/solopide/src/assets/img/Artboard.png')}
                fadeDuration="100"
            />

            <Text style={styles.textLogo}> Solo Pide! </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
    },
    textLogo: {
        fontSize: 40,
        color: "#ffffff",
        fontWeight: "800"
    },
    imageLogo: {
        height: 80,
        width: 100,
        marginBottom: 5
    }
});