import React, { useEffect, useState } from 'react';
import { StyleSheet,View, Text, Animated, ImageBackground, Platform } from 'react-native';

//import the firebase modules
// import * as firebase from 'firebase';

export default function Splash ({navigation}){

    const [animate, setAnimate] = useState({
        animate: new Animated.Value(0), 
        animatexy: new Animated.ValueXY({x:0,y:0})
    })

    useEffect(() =>{
        setTimeout(() => {
            // firebase.auth().onAuthStateChanged( user => { navigation.navigate( user ? "App": "Auth")})
            navigation.navigate('App')
        }, 5000)
        
    }, []);
    return (
        < View style={styles.container}>
                 <Text style={styles.title}> Solo Pide </Text>
                 <Text style={styles.subtitle}> Nosotros lo llevamos </Text>
                <View>
                    {/* <ImageBackground 
                    source={require('../assets/img/moto.gif')}
                    style={styles.image}
                    /> */}
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#e03e36',
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color:"#fff",
        fontSize:50,
        fontWeight:"bold",
        textShadowColor:"#fff"
    },
    subtitle:{
        color:"#fff",
        fontFamily: Platform.OS === 'android'
        ? 'sans-serif-light'
        : 'DamascusLight',
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        height:200,
        width:200
    },

    })