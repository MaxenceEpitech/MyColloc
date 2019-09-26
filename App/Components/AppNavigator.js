import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;
