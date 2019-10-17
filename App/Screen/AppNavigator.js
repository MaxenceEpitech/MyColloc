import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./User/LoginScreen";
import RegisterScreen from "./User/RegisterScreen"

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
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
