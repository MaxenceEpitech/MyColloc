import React, { Component, Fragment } from "react";

import { StackedAreaChart } from "react-native-svg-charts";
import { LinearGradient } from "expo-linear-gradient";
import * as shape from "d3-shape";

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from "react-native";

import { darkThemeColors } from "./Styles/ScreenStyles";

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam("title", "Home"),
        headerStyle: {
            backgroundColor: "#273"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    });

    constructor({ navigation }) {
        super();
        this.state = {
            id: JSON.stringify(navigation.getParam("Id", "undefined")),
            count: 0,
            colorTop: "#000000",
            colorBottom: "#cccccc"
        };
    }

    incrementColor = (color, step) => {
        const intColor = parseInt(color.substr(1), 16);
        const newIntColor = (intColor + step).toString(16);
        return `#${"0".repeat(6 - newIntColor.length)}${newIntColor}`;
    };

    componentDidMount() {
        /*
        setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                colorTop: this.incrementColor(this.state.colorTop, 1),
                colorBottom: this.incrementColor(this.state.colorBottom, -1)
            });
        }, 20);*/
    }

    render() {
        return (
            <View>
                <LinearGradient
                    colors={[darkThemeColors.gradientDark.dark, darkThemeColors.gradientDark.light]}
                    style={styles.gradient}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    gradient: {
        width: "100%",
        height: "100%"
    },
});
export default HomeScreen;
