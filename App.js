import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { createAppContainer } from "react-navigation";
import AppNavigator from "./App/Screen/AppNavigator";
import * as Font from "expo-font";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Elianto: require("./assets/fonts/Elianto-Regular.ttf"),
            Digital: require("./assets/fonts/Digital.ttf"),
            Blanka: require("./assets/fonts/Blanka-Regular.ttf"),
            Beams: require("./assets/fonts/Beams.ttf"),
            Anurati: require("./assets/fonts/Anurati-Regular.otf"),
            Mylodon: require("./assets/fonts/Mylodon-Light.otf"),
            "ProximaNova-Alt-Bold": require("./assets/fonts/ProximaNova-Alt-Bold.otf"),
            "ProximaNova-Alt-Light": require("./assets/fonts/ProximaNova-Alt-Light.otf"),
            "ProximaNova-Alt-Thin": require("./assets/fonts/ProximaNova-Alt-Thin.otf"),
            "ProximaNova-Black": require("./assets/fonts/ProximaNova-Black.otf"),
            "ProximaNova-Bold": require("./assets/fonts/ProximaNova-Bold.otf"),
            "ProximaNova-Extrabold": require("./assets/fonts/ProximaNova-Extrabold.otf"),
            "ProximaNova-Regular": require("./assets/fonts/ProximaNova-Regular.otf"),
            "ProximaNova-Thin": require("./assets/fonts/ProximaNova-Thin.otf")
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return this.state.fontLoaded ? <AppContainer /> : null;
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
