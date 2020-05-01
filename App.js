//React navigation modules
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-elements';
//screens import
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import ProfileScreen from './src/screens/ProfileScreen'
import OrdersScreen from './src/screens/OrdersScreen'

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
//firebase.initializeApp(firebaseConfig);


//creating the Stack for the navigation part

const AppStack = createStackNavigator(
  {
    home: HomeScreen,
    profile: ProfileScreen,
    orders: OrdersScreen,
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#000",
      },
      headerTintColor: "black"
    }
  },

);

const HomeStackTabs = createBottomTabNavigator(
  {
    home: AppStack,
    profile: ProfileScreen,
    orders: OrdersScreen
  },

  

);


const AuthStack = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerTitle: 'S',
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Iniciar Sesion',
    },
  },
  // CreateAccount: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Creount',
  //   },
  // },
  // ForgotPassword: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Forgot Password',
  //   },
  // },
  // ResetPassword: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Reset Password',
  //   },
  // },
});




export default createAppContainer(

  createSwitchNavigator(

    {
      Loading: LoadingScreen,
      Splash: SplashScreen,
      App: HomeStackTabs,
      Auth: AuthStack
    },
    {
      //initialRouteName: "Loading"
      initialRouteName: "Splash"
    }


  )



)