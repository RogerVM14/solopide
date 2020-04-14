import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({route, navigation}){
    const {name} = route.params;
    const {age}= route.params;

    

    return(
        < View>
        <Text >
            <Text>  </Text>
            Hello {name} this is your age: {age}
        </Text>
            <Text>
                Home Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignContent:"center"
}
});