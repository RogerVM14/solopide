import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import RegisterCommerceScreen from './src/screens/RegisterCommerce';
// import RegisterClientScreen from './src/screens/RegisterCliente';


// Using Firebase Auth.
import * as firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyDeH2KF8_09jHamO-tuNxP_1FSYvrBCrfw",
  authDomain: "solopide-d85e8.firebaseapp.com",
  databaseURL: "https://solopide-d85e8.firebaseio.com",
  projectId: "solopide-d85e8",
  storageBucket: "solopide-d85e8.appspot.com",
  messagingSenderId: "1000485570530",
  appId: "1:1000485570530:web:dd4259465472618d195bbb",
  measurementId: "G-LWJHMGPETT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//creating the Stack for the navigation part

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack =createStackNavigator({
  Login: LoginScreen,
  Splash : SplashScreen
  // Register: RegisterScreen,
  // RegisterCommerce: RegisterCommerceScreen,
  // RegisterClient: RegisterClientScreen,
});


export default createAppContainer(
  createSwitchNavigator(

    {
      Loading: LoadingScreen,
      Splash: SplashScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      //initialRouteName: "Loading"
      initialRouteName: "Splash"
    }
    

  )
)