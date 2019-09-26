import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { createAppContainer } from "react-navigation";
import AppNavigator from "./App/Components/AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#ddd"
  }
});
