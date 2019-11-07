import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./User/LoginScreen";
import RegisterScreen from "./User/RegisterScreen"

import {
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Animated,
  Easing
} from "react-native";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default AppNavigator;
