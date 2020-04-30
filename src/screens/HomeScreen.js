import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import * as firebase from 'firebase';
import axios from 'axios';
import Global from '../../Global'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {



    const url = Global.url;
    const [errorMessage, setErrorMessage] = useState(null);



    // signOutUser = () => {
    //     axios.post(url+'signout')
    //       .then( (response) => {
    //          const data = response.data;
    //          console.log(data);
    //          navigation.navigate('Login')         
    //           console.log('Logout...'); 
    //         if(Error != null){
    //             setErrorMessage(null)
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log(error);

    //         setErrorMessage(error)
    //       });
    // }


    const Categories = [
        {
            name: 'Café',
            image: 'https://www.dw.com/image/44469116_303.jpg',
        },
        {
            name: 'Tacos',
            image: 'https://ep01.epimg.net/verne/imagenes/2018/01/04/mexico/1515095452_195414_1515109959_noticia_normal.jpg',
        }, {
            name: 'Pizza',
            image: 'https://lh3.googleusercontent.com/proxy/3KzCh9cuqoyFOo3udGLtdCpFttc-dxw814T6BVyk8o3coaZEKFgozKL7RTwtoZAlwVg8mwkj9vEYSghnCJwXEwmKdF8TUAsR7EN6507-PbtSUXQl',
        }, {
            name: 'Fruta',
            image: 'https://lh3.googleusercontent.com/proxy/xnQGpf5sdWHSxkBSfLIRUjDSVq24Z86P8eORTG0Mol58pSSeBpPimVJXJmE_oFONZ7tJsWm36bhA73rUIfB0j0CPWPwzgHOsM9X8z5Y1HrWM_EXoBNdtd_7pTKH8bRDHMWBRkrijfjrh-S1on0-ALB09uHEgo-lJTXBlf9bqnjoXAasngDln2ikBHqjrSw',
        }, {
            name: 'Pastas',
            image: 'https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/1/150419-gt-salsa-de-jamon-y-vino-para-pastas_5.jpg?itok=XcYtA1oW',
        },
        {
            name: 'Tacos',
            image: 'https://ep01.epimg.net/verne/imagenes/2018/01/04/mexico/1515095452_195414_1515109959_noticia_normal.jpg',
        }, {
            name: 'Pizza',
            image: 'https://lh3.googleusercontent.com/proxy/3KzCh9cuqoyFOo3udGLtdCpFttc-dxw814T6BVyk8o3coaZEKFgozKL7RTwtoZAlwVg8mwkj9vEYSghnCJwXEwmKdF8TUAsR7EN6507-PbtSUXQl',
        },
        {
            name: 'Tacos',
            image: 'https://ep01.epimg.net/verne/imagenes/2018/01/04/mexico/1515095452_195414_1515109959_noticia_normal.jpg',
        }, {
            name: 'Pizza',
            image: 'https://lh3.googleusercontent.com/proxy/3KzCh9cuqoyFOo3udGLtdCpFttc-dxw814T6BVyk8o3coaZEKFgozKL7RTwtoZAlwVg8mwkj9vEYSghnCJwXEwmKdF8TUAsR7EN6507-PbtSUXQl',
        }
    ];


    const Restaurantes = [
        {
            name: 'Café Don juan',
            image: 'https://www.dw.com/image/44469116_303.jpg',
            categorie: 'Cafes, capuchinos y snacks'
        },
        {
            name: 'Tacos Doña Lucha',
            image: 'https://ep01.epimg.net/verne/imagenes/2018/01/04/mexico/1515095452_195414_1515109959_noticia_normal.jpg',
            categorie: 'Tacos y Tortas'
        }, {
            name: 'Pizza Alfredos',
            image: 'https://lh3.googleusercontent.com/proxy/3KzCh9cuqoyFOo3udGLtdCpFttc-dxw814T6BVyk8o3coaZEKFgozKL7RTwtoZAlwVg8mwkj9vEYSghnCJwXEwmKdF8TUAsR7EN6507-PbtSUXQl',
            categorie: 'Pizza, papas y Snacks '
        }, {
            name: 'Fruta don pepé',
            image: 'https://lh3.googleusercontent.com/proxy/xnQGpf5sdWHSxkBSfLIRUjDSVq24Z86P8eORTG0Mol58pSSeBpPimVJXJmE_oFONZ7tJsWm36bhA73rUIfB0j0CPWPwzgHOsM9X8z5Y1HrWM_EXoBNdtd_7pTKH8bRDHMWBRkrijfjrh-S1on0-ALB09uHEgo-lJTXBlf9bqnjoXAasngDln2ikBHqjrSw',
            categorie: ' Fruta picada, entera y jugosa '
        }, {
            name: 'Pastas a la francesa',
            image: 'https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/1/150419-gt-salsa-de-jamon-y-vino-para-pastas_5.jpg?itok=XcYtA1oW',
            categorie: 'Pastas, comida vegetariana y Snacks'
        }, {
            name: 'Fruta don pepé',
            image: 'https://lh3.googleusercontent.com/proxy/xnQGpf5sdWHSxkBSfLIRUjDSVq24Z86P8eORTG0Mol58pSSeBpPimVJXJmE_oFONZ7tJsWm36bhA73rUIfB0j0CPWPwzgHOsM9X8z5Y1HrWM_EXoBNdtd_7pTKH8bRDHMWBRkrijfjrh-S1on0-ALB09uHEgo-lJTXBlf9bqnjoXAasngDln2ikBHqjrSw',
            categorie: ' Fruta picada, entera y jugosa '
        },
        {
            name: 'Tacos Doña Lucha',
            image: 'https://ep01.epimg.net/verne/imagenes/2018/01/04/mexico/1515095452_195414_1515109959_noticia_normal.jpg',
            categorie: 'Tacos y Tortas'
        },
        {
            name: 'Tacos Doña Lucha',
            image: 'https://ep01.epimg.net/verne/imagenes/2018/01/04/mexico/1515095452_195414_1515109959_noticia_normal.jpg',
            categorie: 'Tacos y Tortas'
        },
    ];

    return (

        < View style={styles.container}>
            {/* Scroll View  */}
            < ScrollView> 
                <View style={styles.TitleCard}>
                    <Text style={styles.title}> Categorias </Text>
                </View>

                <View style={styles.categoriesCards}>

                    <ScrollView
                        horizontal={true}
                        style={{ height: 220 }}
                        showsHorizontalScrollIndicator={false}
                    >

                        {
                            Categories.map((categorie, index) => {
                                let image = { uri: `${categorie.image}` }
                                return (

                                    < View style={styles.card} key={index}>
                                        <TouchableOpacity
                                            onPress={() => alert(categorie.name)}
                                        >
                                            <ImageBackground
                                                source={image}
                                                imageStyle={{ borderRadius: 10 }}
                                                style={styles.image}>

                                                <View style={{ top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={styles.categorieName}>{categorie.name}</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>

                                );
                            })
                        }
                    </ScrollView>
                </View>


                <View style={styles.restaurantList}>
                    < Text style={styles.headertitle}> Restaurantes </Text>
                    {
                        Restaurantes.map((rest, index) => {
                            let image = { uri: `${rest.image}` }
                            return (

                                <View style={styles.restaurantCard} key={index}>
                                    <View style={styles.logoContainer}>
                                        <ImageBackground
                                            source={image}
                                            imageStyle={{ borderRadius: 55 }}
                                            style={styles.logoImage}
                                        />
                                    </View>

                                    <View style={styles.infoRestaurant}>
                                        <Text style={styles.title}> {rest.name} </Text>
                                        <Text style={styles.subtitle}> {rest.categorie} </Text>
                                    </View>
                                </View>

                            );
                        })
                    }


                </View>

            </ScrollView>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "100",
        color: "#fff"
    },
    headertitle: {
        paddingTop: 10,
        marginBottom: 20,
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 25
    },
    card: {
        flexDirection: "column",
        alignSelf: "center",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        height: 130,
        width: 130,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        color: "#000",
        fontSize: 15,
        fontWeight: "bold",

    },
    categoriesCards: {
        backgroundColor: "#fff",
        height: 220,
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
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        height: 130,
        width: 130,
    },
    categorieName: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    restaurantList: {
        marginTop: 15,
        backgroundColor: "#fff",
        shadowColor: "#000",
        marginTop: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    restaurantCard: {
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#f33535",
        height: 120,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    logoImage: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: '100%',
    },
    logoContainer: {
        width: '35%',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        borderRadius: 55,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    infoRestaurant: {
        left: '40%',
        bottom: '80%'
    }





});