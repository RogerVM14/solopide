import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ProfileScreen({ navigation }) {

    return (
        < View style={styles.container}>
            <Icon name="rocket" size={30} color="#900" />
            <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={() => alert('Login with Facebook')}>
            Login with Facebook
          </Icon.Button>
            <Text style={styles.text}>
                Profile Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold"
    }
});