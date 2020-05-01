import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function OrdersScreen( { navigation } ) {



    return (
        < View style={styles.container}>
            <Text>
                Orders Screen
            </Text>
            < ActivityIndicator  size="large"/> 
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