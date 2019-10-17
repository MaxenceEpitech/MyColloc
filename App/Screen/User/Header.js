import React, { Component } from 'react'

import {
    Text,
    Image,
    SafeAreaView,
    StyleSheet
} from "react-native";
import { darkThemeColors } from "../Styles/ScreenStyles";
import images from "../../../assets/Images";

export class Header extends Component {
    render() {
        return (
            <SafeAreaView
                style={style.header}
            >
                <Image source={images.mainIcon} style={style.logo} />
                <Text style={style.appName}>MyColloC</Text>
                <Text style={style.slogan}>Let's part expenses</Text>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    header: {
        marginBottom: "15%"
    },
    logo: {
        flex: 1,
        marginBottom: "5%",
        borderRadius: 60,
        resizeMode: "cover",
        width: 230,
        height: 230,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        alignContent: "center",
        alignSelf: "center"
    },
    appName: {
        color: darkThemeColors.gradientDark.light,
        textAlign: "center",
        fontFamily: "Elianto",
        fontSize: 40,
        marginBottom: "2%"
    },
    slogan: {
        color: darkThemeColors.gradientDark.dark,
        textAlign: "center",
        fontFamily: "ProximaNova-Bold"
    },
})
